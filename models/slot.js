const mongoose=require('mongoose');
const locationSchema = require('./location.js').schema;
//const acmem= require('./AcademicMemberModel.js');//academic member

const Slot=mongoose.Schema({
    //name: String,
    id: String,
    day:String,
    timing: {enum : ['First','Second','Third','Fourth','Fifth']} ,
    type: {enum : ['Lab','Tutorial']} ,
    //timing by hour ???
    location:locationSchema,


});
module.exports=mongoose.model("slot",Slot);
