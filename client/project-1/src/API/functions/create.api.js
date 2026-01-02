import toast from "react-hot-toast"
import { Endpoints } from "../End_points"
import { axiosInstance } from "../Instance/axiosInstance"

export const createProductData=async(data)=>{
    try{
        const res=await axiosInstance.post(Endpoints.productEnd.create,data)
        if(res?.data?.status===true){
            console.log("create data",res)
            toast.success(res?.data?.message)
        }else{
          toast.error("Product creation failed!")
        }
        return res?.data
    }catch(error){
        console.log("Product creation error",error)
        throw error
    }
}