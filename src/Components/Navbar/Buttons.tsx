import React from 'react'
import styles from '@/styles/NavbarBtns.module.scss'
import Link from 'next/link'
interface IProps{
  btn_type:String,
}
export default function Buttons({btn_type}:IProps) {
  return (
    <>
    <div className={styles.button}>
      {
        <Link href={'/signup'}>
          {btn_type}
        </Link>
      }
    </div>
    </>
  )
}
