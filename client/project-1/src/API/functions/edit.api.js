import toast from "react-hot-toast"
import { Endpoints } from "../End_points"
import { axiosInstance } from "../Instance/axiosInstance"

export const editProduct=async(id,data)=>{
  try{
  const res=await axiosInstance.put(`${Endpoints.productEnd.edit}/${id}`,data)
  if(res?.data?.status===true){
    console.log("edited data",res)
    toast.success("Product edited successfully!")
  }else{
    toast.error("Product editing failed!")
  }
  return res?.data
}catch(error){
    console.log("editing error:",error)
    throw error
}
}