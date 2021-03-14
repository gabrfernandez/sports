const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost/sports", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(()=>{
    console.log("DB Connection Established")
}).catch(()=>{
    console.log("DB Connection Error")
})