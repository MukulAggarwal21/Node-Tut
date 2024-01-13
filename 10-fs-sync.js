// fs is module name 
const {readFileSync, writeFileSync } = require('fs')
// for encoding file
const first = readFileSync('./content/first.txt' , 'utf8')
const second = readFileSync('./content/subfolder/second.txt' , 'utf8')

// console.log(first , second)

// a means append 
writeFileSync('./content/result-sync.txt ' , `Hey there is the result:  ${first} , ${second}` , {flag : 'a'}
)

console.log('done with the Task')
console.log('Starting with the next one')