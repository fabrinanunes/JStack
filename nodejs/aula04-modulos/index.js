//const modulo = require('./printName');

//modulo.printName(`Fabrina ${modulo.lastName}`)

const { printName, lastName } = require('./printName');

printName(`Fabrina ${lastName}`)

const os = require('os'); //operation system

console.log(os.type())