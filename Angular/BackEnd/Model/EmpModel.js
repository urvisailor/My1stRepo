var mongoose=require('../Connection');
var empModel=mongoose.model('emp',mongoose.Schema({
    name:String,
    salary:Number
}));

module.exports=empModel;