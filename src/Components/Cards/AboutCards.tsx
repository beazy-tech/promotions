import React from 'react'
import styles from '@/styles/accountCards.module.scss'
import Image from 'next/image'

interface AboutCardsProps{
  image:any,
  heading:string,
  description:string
}
export default function AboutCards({image,heading,description}:AboutCardsProps) {
  return (
    <>
    <div className={styles.aboutCard}>
        <Image src={image} alt="none" className={styles.aboutCardImg}/>
        <div className={styles.acountCard_body}>
            <h3 className={styles.accountCard_heading}>{heading}</h3>
            <p className={styles.accountCard_description}>{description}
            </p>
        </div>
    </div>
    </>
  )
}
