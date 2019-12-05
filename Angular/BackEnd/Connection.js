var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/EmployeeDb",{useUnifiedTopology:true,useNewUrlParser:true});
var db=mongoose.connection;
db.on('open',function(){
    console.log('connection successful');
})
module.exports=mongoose;