const http = require('http');
const routing = require('./routing');
const app = require('./server')


const server = http.createServer(app)

server.listen(3000, '127.0.0.1',()=>{
    console.log('Server Running')
})
 