#! /usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');

program
    .version('1.0.0')
    .option('-i, --init', 'init start')
    .parse(process.argv);

if (program.init) {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'create',
            message: 'create web simple-react?',
            default: true
        }
    ]).then(answers => {
        if (answers.test) {
            downloadGit('github:xingzhewj/react-simple', './dist', {clone: true}, err => {
                if (err) {
                    console.log(err);
                }
                else {
                    msg('success!')
                }
            });
        }
    });
}