import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { singleProduct } from '../API/functions/singleproduct.api'
import { editProduct } from '../API/functions/edit.api'

const Edit = () => {

 const {id}=useParams()
 const navigate=useNavigate()
 const {register,handleSubmit,formState:{errors},reset}=useForm()

 useEffect(()=>{
   const fetchData=async()=>{
    try{
     const data=await singleProduct(id)
     reset({
        name:data?.name,
        description:data?.description,
        price:data?.price,
        size:data?.size,
        color:data?.color,
        brand:data?.brand
     });
    }catch(error){
        console.log("single product error:",error)
    }
   }
   if(id){
    fetchData()
   }
 },[id,reset])

 const submitHandler=(input)=>{
   editProduct(id,input)
   navigate("/")
 }

 return (
  <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
        
        <div className="card shadow-lg border-0">
          <div className="card-header bg-dark text-white text-center">
            <h3 className="mb-0">EDIT PRODUCT</h3>
          </div>

          <div className="card-body p-4">
            <form onSubmit={handleSubmit(submitHandler)}>

           
              <div className="mb-3">
                <label className="form-label fw-semibold">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register('name',{required:"Name is required"})}
                />
                {errors?.name && <small className="text-danger">{errors.name.message}</small>}
              </div>

             
              <div className="mb-3">
                <label className="form-label fw-semibold">Description</label>
                <textarea
                  rows="3"
                  className="form-control"
                  {...register('description',{required:"Description is required"})}
                ></textarea>
                {errors?.description && <small className="text-danger">{errors.description.message}</small>}
              </div>

              
              <div className="mb-3">
                <label className="form-label fw-semibold">Price</label>
                <input
                  type="number"
                  className="form-control"
                  {...register('price',{required:"Price is required"})}
                />
                {errors?.price && <small className="text-danger">{errors.price.message}</small>}
              </div>

            
              <div className="mb-3">
                <label className="form-label fw-semibold">Size</label>
                <div className="row">
                  {["S","M","L","XL"].map(item=>(
                    <div className="col-6 col-md-3" key={item}>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          value={item}
                          className="form-check-input"
                          {...register("size",{required:"At least one size is required"})}
                        />
                        <label className="form-check-label">{item}</label>
                      </div>
                    </div>
                  ))}
                </div>
                {errors?.size && <small className="text-danger">{errors.size.message}</small>}
              </div>

             
              <div className="mb-3">
                <label className="form-label fw-semibold">Color</label>
                <div className="row">
                  {["Black","White","Red"].map(item=>(
                    <div className="col-6 col-md-4" key={item}>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          value={item}
                          className="form-check-input"
                          {...register("color",{required:"At least one color is required"})}
                        />
                        <label className="form-check-label">{item}</label>
                      </div>
                    </div>
                  ))}
                </div>
                {errors?.color && <small className="text-danger">{errors.color.message}</small>}
              </div>

             
              <div className="mb-4">
                <label className="form-label fw-semibold">Brand</label>
                <div className="row">
                  {["Gucci","Turtle","Peter England"].map(item=>(
                    <div className="col-12 col-md-4" key={item}>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          value={item}
                          className="form-check-input"
                          {...register("brand",{required:"At least one brand is required"})}
                        />
                        <label className="form-check-label">{item}</label>
                      </div>
                    </div>
                  ))}
                </div>
                {errors?.brand && <small className="text-danger">{errors.brand.message}</small>}
              </div>

              <button type="submit" className="btn btn-dark w-100 py-2">
                Update Product
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
 )
}

export default Edit
