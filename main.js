const mstring = require('./mstring')

console.log(mstring.toLowerCase('Chopper'))
console.log(mstring.toLowerCase('TONY TONY'))

console.log(mstring.toUpperCase('Chopper'))
console.log(mstring.toUpperCase('TONY TONY'))

console.log(mstring.capitalize('tony'))
console.log(mstring.decapitalize('Tony'))


console.log(mstring.kebabCase('tony tony'))
console.log(mstring.snakeCase('-tony-tony-'))

console.log(mstring.swapCase('One Code'))

console.log(mstring.chartAt('chopper', 0))
console.log(mstring.chartAt('chopper', 1))

console.log(mstring.first('chopper', 4))
console.log(mstring.last('chopper', 2))

console.log(mstring.slice('chopper', 2))
console.log(mstring.slice('chopper', -4))
console.log(mstring.slice('chopper', 1 ,4))

console.log(mstring.count('chopper'))
console.log(mstring.countSubStrings('tony tony chopper', 'tony'))
console.log(mstring.countWords('TonyTonyChopperMbark'))

console.log(mstring.indexOf('TonyTonyChopperMbark','T'))
console.log(mstring.lastIndexOf('TonyTonyChopperMbark','T'))
