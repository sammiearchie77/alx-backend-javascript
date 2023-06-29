# 0x02. ES6 classes

[OOP] [JavaScript] [ES6]

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test

## Setup

## Install NodeJS 12.11.x

(in your home directory):

> curl -sL <https://deb.nodesource.com/setup_12.x> -o nodesource_setup.sh
> sudo bash nodesource_setup.sh
> sudo apt install nodejs -y
> $ nodejs -v
> v12.11.1
> $ npm -v
> 6.11.3

### Install Jest, Babel, and ESLint

in your project directory:

- Install Jest using: npm install --save-dev jest
- Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env
- Install ESLint using: npm install --save-dev eslint

### Configuration files

package.json
Click to show/hide file contents
babel.config.js

> module.exports = {
> presets: [
> [
> '@babel/preset-env',
> {
> targets: {
> node: 'current',
> },
> },
> ],
> ],
> };

.eslintrc.js

Don’t forget to run $ npm install when you have the package.json
