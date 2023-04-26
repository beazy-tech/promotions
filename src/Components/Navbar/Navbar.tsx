import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import logo from '../../utils/Beazy-Logo-image.svg'
import styles from '@/styles/Navbar.module.scss'
import Buttons from './Buttons'
import Link from 'next/link'
import {useDispatch, useSelector} from 'react-redux'
import LoginIcon from '@mui/icons-material/Login';
import { signOutUser } from '@/handlers/handleAuth'
import LogoutIcon from '@mui/icons-material/Logout';
import { checkUserAuth } from '@/handlers/handleAuth'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
interface btnType{
    type:String,
}
const btn_type:btnType[]=[
    {
        type:"Sign Up / Login"
    }
]
interface propstype{
    setShowStatusPopup:Function
}
export default function Navbar(props:propstype) {
    const [isNavClicked, setisNavClicked] = useState<Boolean>(false);
    const showStatusPopUp=useSelector((state:{rootReducer:{storeData:{statusPopUp:{isShow:boolean,type:string}}}})=>state.rootReducer.storeData.statusPopUp)
    const userId=useSelector((state:{rootReducer:{storeData:{userId:string}}})=>state.rootReducer.storeData.userId);
    const dispatch=useDispatch();
    const logout=()=>{
        setisNavClicked(!isNavClicked);
        signOutUser(dispatch);
    }
    useEffect(()=>{
        checkUserAuth(dispatch);
    },[])
    useEffect(()=>{
        props.setShowStatusPopup(showStatusPopUp)
    },[showStatusPopUp.isShow])
    
  return (
    <>
    <ul className={styles.Navbar}>
        <li className={styles.Navbar_left}>
            <Link href={"/"}><Image src={logo} alt="none" className={styles.logoImg}/></Link>
            <h1 className={styles.branding}>Welcome to Beazy Promotions !!</h1>
        </li>
        <li className={styles.Navbar_right}>
            {
                userId.length>0?
                    <>
                <ul className={styles.Navbar_right_list}>
                    <Link href="/"><li className={styles.Navbar_right_list_item}>Home</li></Link>
                    <Link href="/newpromo"><li className={styles.Navbar_right_list_item}>Create Promotion</li></Link>
                    <Link href="/mypromos"><li className={styles.Navbar_right_list_item}>My Promotions</li></Link>
                    <Link href="/"><li onClick={logout} className={styles.Navbar_right_list_item}>Log Out</li></Link>
                </ul>
                </>:
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
        <Link href="/"><li onClick={()=>setisNavClicked(!isNavClicked)} className={styles.navbar_right_item}><HomeIcon sx={{color:'white'}}/> Home</li></Link>
        {userId.length>0?
        <>
            <Link href="/newpromo"><li onClick={()=>setisNavClicked(!isNavClicked)} className={styles.navbar_right_item}><CreateIcon sx={{color:'white'}}/> Create Promotion</li></Link>
            <Link href="/mypromos"><li onClick={()=>setisNavClicked(!isNavClicked)} className={styles.navbar_right_item}><FormatListBulletedIcon sx={{color:'white'}}/>Promotion List</li></Link>
            <Link href="/"></Link><li className={styles.navbar_right_item_list_logout_btn} onClick={logout}><LogoutIcon sx={{color:'white'}}/> <p>Logout</p></li>
        </>:
        <>
            <Link href="/signup"><li onClick={()=>setisNavClicked(!isNavClicked)} className={styles.navbar_right_item}> <AccountCircleIcon sx={{color:'white'}}/> SignIn/Login</li></Link>
        </>}
    </ul>
    </>
  )
}
