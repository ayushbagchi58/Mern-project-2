const express=require('express')
const productApiController = require('../controller/productApiController')

const router=express.Router()

router.post('/create-product',productApiController.createProduct)
router.get('/get-product',productApiController.getProduct)
router.get('/get-product/:id',productApiController.getSingleProduct)
router.put('/update-product/:id',productApiController.UpdateProductData)
router.delete('/delete-product/:id',productApiController.DeleteProduct)

module.exports=router
