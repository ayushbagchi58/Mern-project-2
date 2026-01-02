import { Endpoints } from "../End_points"
import { axiosInstance } from "../Instance/axiosInstance"

export const singleProduct=async(id)=>{
   try{
    const res=await axiosInstance.get(`${Endpoints.productEnd.read}/${id}`)
    console.log("single product data:",res)
    return res?.data?.data
   }catch(error){
    console.log("single product data:",error)
    throw error
   }
}