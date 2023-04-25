import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
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
        {/* <Image src={Img} alt="none"/> */}
      </div>
    </div>
    </>
  )
}
