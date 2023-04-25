import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import img from '../utils/Screenshot_from_2023-04-18_15-30-38-removebg-preview.png'
import Image from 'next/image'
export default function Home() {
  return (
    <>
    <div className={styles.Home}>
      <div className={styles.Home_left}>
        <h1 className={styles.home_body_tag}>Promotions made  easy with Beazy</h1>
        <Link href='/signup' >
          <button className={styles.create_account_btn}>
            Create Account
          </button>
        </Link>
      </div>
      <div className={styles.Home_right}>
        <Image src={img} alt="none" className={styles.Home_right_images}/>
      </div>
    </div>
    </>
  )
}
