const koa =require('koa');
const path = require('path')
const staticFiles = require('koa-static'); 
const App = new koa();
App.use(staticFiles(path.resolve(__dirname, "./static")))   
App.listen(8089);

App.use(koa)
