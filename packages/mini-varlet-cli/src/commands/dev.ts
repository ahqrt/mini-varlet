import { createServer } from 'vite'
import inlineConfig from '../config/vite.config'
import { removeSync, copySync } from 'fs-extra'
import { MINI_VARLET, SITE } from '../constants'

export async function dev() {
  removeSync(MINI_VARLET)
  copySync(SITE, MINI_VARLET)
  const server = await createServer(inlineConfig)
  await server.listen(8080)
  server.printUrls()
}