import toast from "react-hot-toast"
import { axiosInstance } from "../Instance/axiosInstance"
import { Endpoints } from "../End_points"

export const deleteProduct=async(id)=>{
   if(window.confirm("Are you sure want to delete this product?")){
    try{
        const res=await axiosInstance.delete(`${Endpoints.productEnd.delete}/${id}`)
        console.log("deleted data",res)
        toast.success("Product deleted successfully!")
        return res?.data?.data
    }catch(error){
        console.log("deletation error",error)
        toast.error("Failed to delete product")
        throw error
    }
   }else{
    toast("deletation cancelled!")
    return null
   }
}