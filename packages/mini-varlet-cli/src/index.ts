import { Command } from 'commander'
import { dev } from './commands/dev'

const program = new Command()

program
  .command('dev')
  .description('Run the dev server')
  .action(dev)

program.parse()