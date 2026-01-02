const Product=require('../model/productModel')

class ProductApiController{
    async createProduct(req,res){
        try{
           const {name,description,price,size,color,brand}=req.body
           const productData=new Product({
            name,
            description,
            price,
            size,
            color,
            brand
           })
           const data=await productData.save()
          if(data){
            return res.status(201).json({
                status:true,
                message:"product created successfully!",
                data:data
            })
          }
        }catch(error){
            return res.status(500).json({
            status:false,
            message:error.message
          })
        }
    }

    async getProduct(req,res){
        try{
            const data=await Product.find()
            if(data){
                 return res.status(200).json({
                status:true,
                total:data.length,
                message:"Product fetched successfully!",
                data:data
            })
            }
        }catch(error){
             return res.status(500).json({
            status:false,
            message:error.message
          })
        }
    }
        async getSingleProduct(req,res){
        try{
            const id=req.params.id
            const data=await Product.findById(id)
            if(data){
                 return res.status(200).json({
                status:true,
                message:"get single  product",
                data:data
            })
            }
        }catch(error){
             return res.status(500).json({
            status:false,
            message:error.message
          })
        }
    }

     async UpdateProductData(req,res){
            try{
                const id=req.params.id
                const data=await Product.findByIdAndUpdate(id,req.body)
                if(data){
                     return res.status(200).json({
                    status:true,
                    message:"Product updated successfully!",
                })
                }
            }catch(error){
                 return res.status(500).json({
                status:false,
                message:error.message
              })
            }
        }
    
        async DeleteProduct(req,res){
        try{
            const id=req.params.id
            const data=await Product.findByIdAndDelete(id,req.body)
            if(data){
                 return res.status(200).json({
                status:true,
                message:"Product deleted successfully!",
            })
            }
        }catch(error){
             return res.status(500).json({
            status:false,
            message:error.message
          })
        }
    }
}

module.exports=new ProductApiController()