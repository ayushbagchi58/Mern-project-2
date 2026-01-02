const mongoose=require('mongoose')
const Schema=mongoose.Schema

const productSchema=new Schema({
       name:{
        type: String,
        required:[true,"Please add a name"]
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:[true,"Please provide the price"],
        min:0,

    },
    size:{
        type:[String],
        required:true,
        enum:['S','M','L','XL']
    },
    color:{
        type: [String],
        required:true,
        enum:['Black','White','Red']
    },
    brand:{
        type:[String],
        required:true,
        enum:['Gucci','Turtle','Peter England']
    }
},{
    timestamps:true
})
const ProductModel=mongoose.model('product',productSchema)
module.exports=ProductModel