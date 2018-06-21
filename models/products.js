
var mongoose=require('../mongoose');
var schemaProduct=new mongoose.Schema({
	name:{
		type:String,
		require:true
	},
	model:{
		type:String,
		unique:true,
		require:true
	},
	category:{
		type:String,
		require:true
	},
	count:{
		type:Number,
		require:true
	},
	price:{
		type:Number,
		require:true
	},
	path:{
		type:String,
		require:true
	}
	})
var Product=mongoose.model("Product",schemaProduct);
module.exports=Product;