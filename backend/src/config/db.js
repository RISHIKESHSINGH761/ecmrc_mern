const { default: mongoose } = require("mongoose");
const dbConnect=()=>{
try{
    const conn=mongoose.connect(process.env.MONGODB_URL);
    console.log('Database connected Succesffully');
}catch(error){
    console.log("Dtabase error");
}
};
module.exports=dbConnect;
