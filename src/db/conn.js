const mongoose = require("mongoose");



mongoose.connect("mongodb://127.0.0.1:27017/social").then(()=>{
    console.log("connecction is succesfull")
})   
.catch((e)=>{
    console.log(e);
})
// const mongoose = require("mongoose");



// mongoose.connect("mongodb://127.0.0.1:27017/social").then(()=>{
//     console.log("connecction is succesfull")
// })   
// .catch((e)=>{
//     console.log(e);
// })