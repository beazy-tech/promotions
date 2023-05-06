import { useState , useEffect } from 'react'
import styles from '@/styles/welcomePage.module.scss'
import GrowImg from '../utils/iStock-1094465844lg.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import promoterInfo from '@/handlers/promoterInfo'
export default function WelcomePage() {
  const [promoterData,setPromoterData]=useState({name:""});
  const userId=useSelector((state:{rootReducer:{storeData:{userId:string}}})=>state.rootReducer.storeData.userId);
  const businessDetails=useSelector((state:{rootReducer:{storeData:{businessDetails:any}}})=>state.rootReducer.storeData.businessDetails)
  useEffect(()=>{
    if(userId.length>0)
    {
      promoterInfo(userId,setPromoterData);
    }
  },[userId])
  return (
    <>
    <div className={styles.welcomePage}>
        <h3 className={styles.business_Name}>Welcome <b className={styles.businessName_in_Bold}>{businessDetails.name}</b></h3>
        <div className={styles.welcomePage_body}>
            <div className={styles.product_promotion}>
                <p className={styles.text}>Ready to reach new customers with Beazy Promotions?</p>
                <Link href="/newpromo"><button className={styles.CreatePromotionbtn}>Click Here To Create Promotion</button></Link>
            </div>
            <Image src={GrowImg} alt="none" className={styles.promotional_image}></Image>
        </div>
    </div>
    </>
  )
}
