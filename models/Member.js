
var mongoose = require('mongoose');
var MemberSchema = new mongoose.Schema({
    name: String,
    phone: String,
    Idproject: [{type: Schema.type.String, ref:'Project'}]
});

module.exports=mongoose.model('Member', MemberSchema);
