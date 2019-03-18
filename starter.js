const inquirer = require("inquirer");
const chalk = require("chalk");

const toKebabCase = str =>
    str &&
    str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join("-");
const execa = require("execa");
const exec = async command => {
    let output;

    try {
        console.log(`\n ${chalk.green.bold("Running: ")}: ${chalk.underline(command)} \n`);
        output = execa.shell(command, { env: { FORCE_COLOR: true } }).stdout;
    } catch (error) {
        console.log(`${chalk.red.bold(error)}`);
    }
    output.pipe(process.stdout);
    return await output;
};

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name (eg: Angel Grablev):"
        }
    ])
    .then(async ({name}) => {
	    let domain = toKebabCase(name) + ".surge.sh";
	    console.log(`${chalk.green.bold.underline("Uploading dist folder to domain " + domain)}`);
	    await exec("yarn build; surge ./dist " + domain);
    });
