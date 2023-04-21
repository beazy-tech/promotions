import React from 'react'
import styles from '@/styles/about.module.scss'
import AboutCards from './Cards/AboutCards'
import maxyourReach from '../utils/Wavy_Bus-37_Single-02.jpg';
import Affordable from '../utils/37Z_2105.w007.n001.25C.p6.25.jpg'
import BoostSale from '../utils/20945469.jpg'
import Easysetup from '../utils/5208993.jpg'
interface AboutCardData{
    image:Object,
    heading:string,
    description:string;
}
const AboutCardData:AboutCardData[]=[{
    image:maxyourReach,
    heading:"Maximize Your Reach",
    description:"Say goodbye to traditional promotional methods that may go unnoticed. With PromoReceipts, your promotions are printed on every receipt, ensuring maximum visibility to your customers. Every time a customer checks out, they'll see your promotions, leading to increased brand exposure and repeat business."
},
{
    image:BoostSale,
    heading:"Boost sales",
    description:"Need a sales boost? PromoReceipts can help! Our platform allows you to create attractive promotions that incentivize customers to make additional purchases, redeem discounts, or take advantage of special offers. You can easily customize promotions based on your business needs, and watch your sales soar."
},{
    image:Easysetup,
    heading:"Easy setup",
    description:"Beazy Promotions makes it easy for businesses to customize and manage promotions. Our platform allows you to start quickly with minimal effort and maximize the reach of your business. With our services, you can track the progress of your promotions so that you can accurately monitor your goals."
},{
    image:Affordable,
    heading:"Affordable & flexible",
    description:"We understand that every business has unique needs and budgets. That's why PromoReceipts offers flexible pricing plans that cater to businesses of all sizes, from small startups to established enterprises."
}
]
export default function About() {
  return (
    <>
    <div className={styles.about_body}>
        <div className={styles.about_head}>
            <h2 className={styles.about_heading}>REACH MORE CUSTOMER WITH BEAZY PROMOTIONS.</h2>
            <p className={styles.about_description}>Beazy PromoReceipts is the ultimate platform for businesses to <b>unlock the power</b> of promotional marketing. Imagine having your promotions printed directly `on customer receipts - a highly effective and proven strategy to <b>boost sales, increase customer loyalty, and grow your business</b>. With <b> Beazy PromoReceipts </b>, it's now possible!</p>
        </div>
        <div className={styles.about_body}>
            {AboutCardData.map(({image,heading,description}:AboutCardData,count)=>(<AboutCards key={count} image={image} heading={heading} description={description}/>))}
        </div>
    </div>
    </>
  )
}
