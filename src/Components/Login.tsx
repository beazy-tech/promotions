import {useState,useEffect} from 'react'
import SigninPopUp from './SigninPopUp';
import { useSelector } from 'react-redux';
import promoterInfo from '@/handlers/promoterInfo';
import {useRouter} from 'next/router';
export default function Login() {
    const [value,setValue]=useState("");
    const [showPopUp,setShowPopUp]=useState(true);
    const userId=useSelector((state:{userId:{userId:string}})=>state.userId.userId)
    const [PromoterData,setPromoterData]:[any,Function]=useState({})
    const route=useRouter();
    useEffect(()=>{
        if(userId.length>0)
        {
            promoterInfo(userId,setPromoterData);
        }
    },[userId])
    useEffect(()=>{
        if(userId.length>0){
            if(PromoterData?.id===userId)
            {
                route.push("/")
            }
            else{
                route.push("/signup")
            }
        }
    },[promoterInfo,userId])
    
  return (
    <>
    {showPopUp?<SigninPopUp value={value} setValue={setValue} setShowPopUp={setShowPopUp}/>:<></>}
    </>
  )
}
