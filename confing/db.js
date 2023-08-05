const dotenv= require('dotenv')
dotenv.config()
const mongoose= require('mongoose');
mongoose.connect(process.env.DB).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})