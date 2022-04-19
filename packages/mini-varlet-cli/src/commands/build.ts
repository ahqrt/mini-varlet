import { build as buildVite } from 'vite'
import { compileRoutes } from '../compiler/compiler-routes'
import inlineConfig, { getBuildConfig } from '../config/vite.config'
export async function build() {
  process.env.NODE_ENV = 'production'

  await compileRoutes()
  const buildConfig = getBuildConfig(inlineConfig)

  await buildVite(buildConfig)
}