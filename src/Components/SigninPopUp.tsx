import { useState } from 'react'
import styles from '@/styles/SigninPopUp.module.scss'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { onLoginVerification, onSingup } from '../handlers/handleAuth'
interface initprops {
    setShowPopUp: Function
}
export default function SigninPopUp({ setShowPopUp }: initprops) {
    const [value, setValue] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const route = useRouter();
    const handelCross = () => {
        setShowPopUp(false);
        route.push("/")
    }
    const signUp = () => {
        onLoginVerification(value, setIsOtpSent);
    }
    console.log(isOtpSent);
    
    return (
        <>
            <div className={styles.signInPopup}>
                <div className={styles.signInPopup_body}>
                    <form className={styles.login_singup_form} onSubmit={e => e.preventDefault()}>
                        <div style={!isOtpSent ? { position: "relative", transitionDuration:"2s",right:"100"}:{position:"relative",transitionDuration:"4s",right:"400px"}} className={styles.phone_input_block}>
                            <label className={styles.inputLabel} htmlFor="phone_number">Enter your Phone number</label>
                            <div className={styles.phone_number_input_box}>
                                <PhoneInput id="phone_number" placeholder="Enter here..." value={value} onChange={setValue} defaultCountry="IN" />
                            </div>
                        </div>
                        <button id="sign_up_button" onClick={signUp} className={styles.sign_up_btn}>Sign up</button>
                </form>
                <button className={styles.crossBtn} onClick={handelCross}>
                    <CloseIcon sx={{ color: "gray" }} />
                </button>
                {/* <div className={styles.re_btns}>
                    <p className={styles.resend_otp} onClick={(e)=>onSingup(value,)} >Resend Otp</p>
                </div> */}
            </div>
        </div >
    </>
  )
}
