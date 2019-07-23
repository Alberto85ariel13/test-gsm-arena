const program = require('commander');
const R = require('@redwagon/ramda');
const dotEnvSafe = require('dotenv-safe');
const { extractCommands, prepareCommand } = require('./utils/command');

dotEnvSafe.config();

program
    .version('0.0.1')

const preparedCommand = prepareCommand(program);
const preparedCommands = R.forEach(preparedCommand);

const commands = extractCommands(`${process.cwd()}/scripts/commands/*`);

preparedCommands(commands);

program
    .parse(process.argv);