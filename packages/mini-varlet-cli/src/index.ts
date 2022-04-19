import { Command } from 'commander'
import { build } from './commands/build'
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

program.parse()