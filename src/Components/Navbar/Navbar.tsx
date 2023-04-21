import React,{useState} from 'react'
import Image from 'next/image'
import logo from '../../utils/Beazy-Logo-image.svg'
import styles from '@/styles/Navbar.module.scss'
import Buttons from './Buttons'
import Link from 'next/link'
interface btnType{
    type:String
}
const btn_type:btnType[]=[
    {
        type:"Create account"
    },
    {
        type:"Login"
    }
]
export default function Navbar() {
    const [isNavClicked, setisNavClicked] = useState<Boolean>(false);    
  return (
    <>
    <ul className={styles.Navbar}>
        <li className={styles.Navbar_left}>
            <Link href={"/"}><Image src={logo} alt="none" className={styles.logoImg}/></Link>
            <h1 className={styles.branding}>Welcome to Beazy Promotions !!</h1>
        </li>
        <li className={styles.Navbar_right}>
            {
                btn_type.map(({type}:btnType,count)=>(<Buttons key={count} btn_type={type}/>))
            }
        </li>
        <li className={styles.MobileNavbar_right}>
            <ol className={styles.MobileNavbar_icon} style={isNavClicked?{bottom:"4px"}:{}} onClick={()=>setisNavClicked(!isNavClicked)}>
                <li style={isNavClicked?{transform:'rotate(45deg)',bottom:'-6px'}:{transitionDuration:"0.2s"}} className={styles.MobileNavbar_icon_li}></li>
                <li style={isNavClicked?{display:"none"}:{}} className={styles.MobileNavbar_icon_li}></li>
                <li style={isNavClicked?{transform:"rotate(-45deg)",top:"0px",transitionDuration:"0.2s"}:{transitionDuration:"0.2s"}} className={styles.MobileNavbar_icon_li}></li>
            </ol>
        </li>
        {/* <li className={styles.MobileNavbar_right_items}>
            <ol className={styles.MobileNavbar_right_items_list}>
                <li className={styles.MobileNavbar_right_item}>
                    sdklas;lskdfkl
                </li>
            </ol>
        </li> */}
    </ul>
    <ul className={styles.navbar_right_item_list} style={isNavClicked?{width:"15rem",right:"0",transitionDuration:"1s"}:{width:0,right:"0",transitionDuration:"1s"}}>
        <Link href="/"><li className={styles.navbar_right_item}>Home</li></Link>
        <Link href="/newpromo"><li className={styles.navbar_right_item}>Create Coupons</li></Link>
        <Link href="/promolist"><li className={styles.navbar_right_item}>Coupons List</li></Link>
    </ul>
    </>
  )
}
