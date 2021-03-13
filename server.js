const express=require('express');

const app=express();

//establish mongoose config
require('./server/config/mongoose.config')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

require("./server/routes/athlete.routes")(app);

app.listen(8000, ()=>{
    console.log("Listening to Port 8000")
})