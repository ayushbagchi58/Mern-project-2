import { Endpoints } from "../End_points"
import { axiosInstance } from "../Instance/axiosInstance"

export const readProductList=async()=>{
    try{
        const res=await axiosInstance.get(Endpoints.productEnd.read)
        console.log("Products data:",res)
        return res?.data?.data
    }catch(error){
        console.log("product data error:",error)
        throw error
    }
}