import { createServer, ViteDevServer } from 'vite'
import inlineConfig from '../config/vite.config'
import { removeSync, copySync } from 'fs-extra'
import { MINI_VARLET, SITE } from '../constants'
import consola from 'consola'
import chokidar from 'chokidar'
import { compileRoutes } from '../compiler/compiler-routes'

let server: ViteDevServer | null = null

const watcher = chokidar.watch(SITE)

async function startServer() {
  if (server) {
    consola.info('Server already started')

    await watcher.close()
    await server.close()
    server = null
    consola.info('Server closed... restarting')
  }
  removeSync(MINI_VARLET)
  copySync(SITE, MINI_VARLET)

  await compileRoutes()

  server = await createServer(inlineConfig)
  await server.listen(8080)
  server.printUrls()
}

export async function dev() {
  try {
    await startServer()
    watcher
      .on('all', startServer)
  } catch (error) {
    consola.error(error)
  }
}