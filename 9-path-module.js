const { log } = require('console')
const path = require('path')

// to see the joining element of path 
console.log(path.sep)

//to join paths 
const filepath = path.join('./content/' , 'subfolder' , 'test.txt')
console.log(filepath)

//to see the last path 
const base = path.basename(filepath)
 console.log(base)

 // to show the directory where the app js is located 
 const absolute = path.resolve(__dirname, 'content' , ' subfolder' , 'test.txt ')
 console.log(absolute)