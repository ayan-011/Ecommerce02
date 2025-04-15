const mongoose = require('mongoose');
const dbgr  = require("debug")("development:mongoose")
const config = require("config")


//$env:DEBUG="development:*"  & node app.js in terminal to see the debug messages


mongoose.connect(`${config.get("MONGODB_URI")}/scatch`) // You will also do this by [.env] method But [config] is good.

.then(function(){
    dbgr("connected");
})
.catch(function(err){
    dbgr(err);
})

module.exports = mongoose.connection;

//npm i debug
//npm i config