/**
 * @file 脚手架逻辑脚本
 * @Author wangjie19
 * @Date 2018-06-19 14:57:05
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-06-20 16:06:29
 */

const _ = require('lodash');
const glob = require('glob');
const chalk = require('chalk');
const inquirer = require('inquirer');
const downloadGit = require('download-git-repo');

const msg = (txt) => console.log(chalk.keyword('green')(txt));
const warn = (txt) => console.log(chalk.keyword('orange')(txt));
const error = (txt) => console.log(chalk.bold.red(txt));

inquirer.prompt([
    {
        type: 'confirm',
        name: 'test',
        message: 'Are you handsome?',
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
