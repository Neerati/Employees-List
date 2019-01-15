var mongoose=require('mongoose');

var EmployeeListSchema=mongoose.Schema({
    employeename: String,
    salary:Number
});

var Employee=mongoose.model('Employee', EmployeeListSchema);

module.exports=Employee;