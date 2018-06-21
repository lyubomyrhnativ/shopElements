var mongoose=require('../mongoose');
var schemaCategory=new mongoose.Schema({
		name:{
		type:String,
		require:true,
		unique:true
	}
	})
var Category=mongoose.model("Category",schemaCategory);
module.exports=Category;