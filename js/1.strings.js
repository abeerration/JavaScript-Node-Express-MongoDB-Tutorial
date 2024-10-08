const name = 'abeerration'

console.log('A' + ' ' + 'string')
console.log('Hello, ' + name + '!')

console.log(name.length)
console.log('This is a line of text'.length)
console.log(''.length)

const multilineString = `This is a ...

... multiline ...

string!`
console.log(multilineString)

const message = `Howdy, ${name}! You name is ${name.length} characters long.`
console.log(message)

const nameLengthType = `This is a ${name.length > 9 ? 'rather long' : 'small enough'} name!`
console.log(nameLengthType)
