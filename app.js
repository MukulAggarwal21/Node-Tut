// const _ = require('lodash')
// //  one of lodash method  make it as a flat array as follows: 
// const items = [1,[2,[3,[4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems)
// console.log('hello people');

const http = require('http');

const server = http.createServer((req,res)=> {
if(req.url === '/'){
  res.end('Home Page')
}
else if(req.url==='/about'){
  //Blocking Code!!: it is nested for loop
  for(let i=0 ; i<1000 ; i++){
    for(let j=0 ;j<1000 ; j++ ){
      console.log(`${i} ${j}`)
    }
  }
  res.end('About Page')
}
else{
  res.end('Error Page')
}

})
server.listen(5000,()=>{
  console.log('Server is Listening on port 5000...')
})