var express=require('express');
var router=express.Router();
var Employee=require('../model/employee');

//Getting the data -READ
router.get('/employees', function(req, res, next){
    Employee.find({}, function(err, emp){
        if(err){
            res.json(err);
        }
        else{
            res.json(emp);
        }
    });
});

//Getting the data -WRITE
router.post('/employees', function(req, res){
    employeename=req.body.employeename;
    salary=req.body.salary;
    var newEmployee=new Employee({
        employeename:employeename, 
        salary:salary
    });
    newEmployee.save(function(err, newlycreatedemp){
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:'employee has been added'});
        }
    });

});
//Getting the data -UPDATE
router.put('/employees/:id', function(req, res){
    Employee.findOneAndUpdate({_id: req.params.id},{
        $set:{
            employeename:req.body.employeename,
            salary: req.body.salary
        }
    }, 
    function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    } );
});

//deleting the data -DELETE
router.delete('/employees/:id', function(req, res, next){
    Employee.remove({_id:req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })    
});





module.exports=router;