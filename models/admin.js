var mongoose=require('../mongoose');
var schemaAdmin=new mongoose.Schema({
		username:{
		type:String,
		require:true,
		unique:true
	},
		password:{
		type:String,
		require:true,
		unique:true
	}
	})
var Admin=mongoose.model("Admin",schemaAdmin);
module.exports=Admin;