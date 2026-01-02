import React from 'react'
import { useForm } from "react-hook-form"
import { createProductData } from '../API/functions/create.api'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const submitHandler = (input) => {
    createProductData(input)
    navigate("/")
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <h2 className="text-center text-primary mb-4 fw-bold">
                ADD PRODUCT
              </h2>

              <form onSubmit={handleSubmit(submitHandler)}>

                
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    {...register('name', { required: "Name is required" })}
                  />
                  {errors?.name && <p className="text-danger mt-1">{errors.name.message}</p>}
                </div>

                
                <div className="mb-3">
                  <label htmlFor="description" className="form-label fw-semibold">
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={3}
                    className="form-control"
                    {...register('description', { required: "Description is required" })}
                  />
                  {errors?.description && <p className="text-danger mt-1">{errors.description.message}</p>}
                </div>

               
                <div className="mb-4">
                  <label htmlFor="price" className="form-label fw-semibold">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    {...register('price', { required: "Price is required" })}
                  />
                  {errors?.price && <p className="text-danger mt-1">{errors.price.message}</p>}
                </div>

                
                <div className="mb-4">
                  <label className="form-label fw-semibold">Size</label>
                  <div className="row">
                    {["S", "M", "L", "XL"].map((size) => (
                      <div className="col-6 col-md-3" key={size}>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            value={size}
                            className="form-check-input"
                            id={`size-${size}`}
                            {...register("size", { required: "At least one size is required" })}
                          />
                          <label htmlFor={`size-${size}`} className="form-check-label">
                            {size}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors?.size && <p className="text-danger mt-1">{errors.size.message}</p>}
                </div>

               
                <div className="mb-4">
                  <label className="form-label fw-semibold">Color</label>
                  <div className="row">
                    {["Black", "White", "Red"].map((color) => (
                      <div className="col-6 col-md-4" key={color}>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            value={color}
                            className="form-check-input"
                            id={`color-${color}`}
                            {...register("color", { required: "At least one color is required" })}
                          />
                          <label htmlFor={`color-${color}`} className="form-check-label">
                            {color}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors?.color && <p className="text-danger mt-1">{errors.color.message}</p>}
                </div>

              
                <div className="mb-4">
                  <label className="form-label fw-semibold">Brand</label>
                  <div className="row">
                    {["Gucci", "Turtle", "Peter England"].map((brand) => (
                      <div className="col-12 col-md-4" key={brand}>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            value={brand}
                            className="form-check-input"
                            id={`brand-${brand}`}
                            {...register("brand", { required: "At least one brand is required" })}
                          />
                          <label htmlFor={`brand-${brand}`} className="form-check-label">
                            {brand}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors?.brand && <p className="text-danger mt-1">{errors.brand.message}</p>}
                </div>

               
                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Submit Product
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
