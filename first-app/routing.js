const fs = require('fs');
const { request } = require('http');
const url = require('url');


/** handleRequest
 * 
 * @param mixed filePath
 * @param mixed response
 * 
 * @return [type]
 */
function handleRequest(filePath, response){
    fs.readFile(filePath, null ,(err, data)=>{
        if (err) response.end('File has Errors');
        else response.end(data);
       
   })
 }


 /** routing
  * @param mixed request
  * @param mixed response
  * 
  * @return [type]
  */
 function routing(request, response){
    const path = url.parse(request.url).pathname
    switch(path){
        case '/':
         handleRequest('./index.html', response)
            break;
        case '/any':
            handleRequest('./any.html', response)
            break;   
        case '/users':
            handleRequest('./users.html', response)
            break;   
        default:
            response.end('404');
            break;   
    }
}


module.exports =  routing