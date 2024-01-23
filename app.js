 const {readFile} = require('fs');

const getText = (path)=>{
 return new Promise((resolve , reject) =>{



 readFile('./content/first.txt','utf8' ,(err,data)=>{
  if(err){
    reject(err);
  }
  else{
    // console.log(data)
    resolve(data)
  }
 })
 
 })
}

getText('./content/first.txt').then(result => console.log(result)).catch(err=> console.log(err))

