import { build as buildVite } from 'vite'
import { compileRoutes } from '../compiler/compiler-routes'
export async function build() {
  process.env.NODE_ENV = 'production'

  await compileRoutes()
  await buildVite()
}