import { Command } from 'commander'
import { build } from './commands/build'
import { compile } from './commands/compile'
import { dev } from './commands/dev'

const program = new Command()

program
  .command('dev')
  .description('Run the dev server')
  .action(dev)

program
  .command('build')
  .description('Build the site')
  .action(build)

program
  .command('compile')
  .description('Compile the site')
  .action(compile)

program.on('command:*', ([cmd]) => {
  program.outputHelp()
  // logger.error(`\nUnknown command ${cmd}.\n`)
  process.exitCode = 1
})

program.parse()