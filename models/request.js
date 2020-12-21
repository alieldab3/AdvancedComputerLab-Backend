const mongoose=require('mongoose');
const locationModel = require('./location.js').schema;
const acmem= require('./AcademicMemberModel.js').schema;//academic member
//const sl= require('./slot.js').schema;//academic member

const RE=mongoose.Schema({
    id:{type:String,required:true,unique:true,sparse:true},

    sender:{type:acmem,required:true},
    receiver:{type:[acmem],required:true},///?????????
    state:{enum : ['Pending','Accepted','Rejected','Cancelled']},
    reason:String,
    type:{enum : ['Compensation','Replacement','Leave','Slot-linking','dayOffChange']}
    
});

module.exports=mongoose.model("RE",RE);
