const mongoose=require('mongoose')

mongoose.connect("mongoosedb://localhost/sports", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB Connection Established")
}).catch(()=>{
    console.log("DB Connection Error")
})