
var mongoose = require('mongoose');
// ProjcetSchema
var ProjcetSchema = new mongoose.Schema({
    nameproject: String,
    Idproject:[{type: Schema.type.String, ref:'Member'}]
});
module.exports= mongoose.model('Project', ProjcetSchema);