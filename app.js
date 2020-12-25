const express=require('express');
const mongoose=require('mongoose');

const AllStaffRoutes = require('./routes/StaffMembersRoutes');
const HrRoutes = require('./routes/HrRoutes');
//const HODRoutes = require('./routes/HODRoutes');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',AllStaffRoutes);
app.use('/',HrRoutes);
//app.use('/',HODRoutes);

app.listen(3000);

module.exports=app;


