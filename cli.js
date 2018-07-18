#!/usr/bin/env node

const mkdir = require('mkdirp')
const fs = require('fs')
const chalk = require('chalk')

const [,, ...args ] = process.argv

// check that a library directory exists
if (!fs.existsSync('./library')) mkdir('library')

// example for how to copy a file and move it fs.copyFile(from, to, resultsFunc(err))
fs.copyFile('./library/Card.js', './Card.js',
  err => {
    if (err) throw chalk.bgRed(err)
    console.log(chalk.bgGreen('success'))
});