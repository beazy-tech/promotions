import React from 'react'
import styles from '@/styles/welcomePage.module.scss'
import GrowImg from '../utils/iStock-1094465844lg.jpg'
import Image from 'next/image'
import Link from 'next/link'
export default function WelcomePage() {
  return (
    <>
    <div className={styles.welcomePage}>
        <h3 className={styles.business_Name}>Welcome <b className={styles.businessName_in_Bold}>{" <Business Name>"}</b></h3>
        <div className={styles.welcomePage_body}>
            <div className={styles.product_promotion}>
                <p className={styles.text}>Ready to reach new customers with Beazy Promotions?</p>
                <Link href="/newpromo"><button className={styles.CreatePromotionbtn}>Click Here To Create Your First Promotion</button></Link>
            </div>
            <Image src={GrowImg} alt="none" className={styles.promotional_image}></Image>
        </div>
    </div>
    </>
  )
}
