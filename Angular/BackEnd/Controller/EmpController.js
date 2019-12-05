var express = require('express');
var router = express.Router();
var mongoose=require('../Connection.js');
var empModel=require('../Model/EmpModel');
//var multer=require('multer');
//var upload=multer({dest:'./uploads'});

/* GET home page. */
router.get('/', function(req, res) {
  empModel.find(function(err,emp){
      //res.send(emp);
      //res.render('index', { title: 'Express',data:emp});
      if (err)
        throw err;
      res.send(emp);

  })
  
});

router.post('/',function(req,res)
{
 // console.log(req.body.name);
	var emp1=new empModel({
    name:req.body.name,
    salary:req.body.salary
	});
 // console.log(emp1.img);
	emp1.save(function(err,emp){
    //res.status(200).send(emp);
    if(err)
      throw err;
    res.status(200).send(emp);
    
	});
	
})

router.delete('/:id',function(req,res){
  //console.log("hi");
  //console.log(req.params.id);
  empModel.findOneAndRemove(req.params.id,function(err,emp){
    if(err)
    throw err;
  res.status(200).send(emp.name);

  })
});

router.put('/:id',function(req,res){
  var emp=({
    name:req.body.name,
    salary:req.body.salary
});
empModel.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},function(err,data){
    if(err)
    {
      res.send(err);
    }
    else
    {
      res.send(data);
    }
  })
});
/*


router.get('/edit/:id',function(req,res){
  empModel.findOne({"_id":req.params.id},function(err,data){
    console.log(data);
    res.render("edit",{data:data});
   //res.send(data);
  })

})


router.post('/edit',function(req,res){
  var emp=({
    name:req.body.name,
    salary:req.body.salary
});
  empModel.findByIdAndUpdate(req.body.id,{$set:emp},{new:true},function(err,data){
    if(err)
    {
      res.send(err);
    }
    else
    {
      res.redirect('/');
    }
  })
})



router.get('/delete/:id',function(req,res){
  empModel.findByIdAndRemove(req.params.id,function(err,data){
    if(err)
    {
      console.log('Error in Delete');
    }
    else
    {
      console.log(" Deleted");
      res.redirect('/');
    }
  })
});


  router.get('/:name',function(req,res){
   
    empModel.find({name:req.params.search},function(err,data)
    {
      if(err)
      {
        console.log("error");
      }
      else
      {
        res.send(data);
      }
    });
  });

*/


module.exports = router;
