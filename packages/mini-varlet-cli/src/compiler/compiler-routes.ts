import { writeFileSync } from 'fs-extra'
import { parse, resolve } from 'path'
import { CWD, ROUTES } from '../constants'
import { globPromise } from '../shared/fsUtils'

export async function compileRootRoutes() {
  const files = await globPromise('docs/*.md')

  return files.map(file => {
    const { name } = parse(file)
    const [docName, lang] = name.split('.')
    const routePath = `/${lang}/${docName}`

    return {
      path: routePath,
      component: resolve(CWD, file)
    }
  })
}

export async function compileComponentsRoutes() {
  const files = await globPromise('src/**/docs/*.md')

  return files.map(file => {
    const { dir, name: lang } = parse(file)
    const component = dir.replace('src', '').replace('/docs', '')
    const routePath = `/${lang}${component}`

    return {
      path: routePath,
      component: resolve(CWD, file)
    }
  })
}



export async function compileRoutes() {
  const rootRoutes = await compileRootRoutes()
  const componentRoutes = await compileComponentsRoutes()
  const routes = [...rootRoutes, ...componentRoutes]

  const template = `
export default [
  ${routes.map(routePath => `{ path: '${routePath.path}', component: () => import('${routePath.component}') }`).join(',\n  ')}
]
  `
  writeFileSync(ROUTES, template)
}