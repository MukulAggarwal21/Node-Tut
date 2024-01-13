const {readFileSync, writeFileSync, readFile, writeFile } = require('fs')

console.log('start')
// return callback whenever the fnction is called
readFileSync('./content/first.txt' , 'utf8' , (err, result)=>{
    if(err){
       console.log(err)
       return
    }
   const first = result;
   readFile('./conten/subfolder/second.txt' , 'utf8' ,(err, result)=>{
    if(err){
       console.log(err)
       return
    }
     const second = result
     writeFile('./content/result-async.txt' , `Here is the result: ${first}, ${second}`,
      (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('Done With the Task')
        // console.log(result)
     })
   })
})
console.log('starting with next task')