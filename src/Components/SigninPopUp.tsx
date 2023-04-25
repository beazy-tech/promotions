import { useState } from 'react'
import styles from '@/styles/SigninPopUp.module.scss'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import OtpInput from 'react-otp-input';
import { onLoginVerification,onOTPVerify } from '../handlers/handleAuth'
import EditIcon from '@mui/icons-material/Edit';
interface initprops {
    setShowPopUp: Function,
    value:string,
    setValue:any
}
export default function SigninPopUp({ setShowPopUp,value,setValue }: initprops) {
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [otp, setOtp] = useState('');
    const route = useRouter();
    const handelCross = () => {
        setShowPopUp(false);
        route.push("/")
    }
    const signUp = () => {
        onLoginVerification(value, setIsOtpSent);
    }
    const onOtpVerify=()=>{
        onOTPVerify(otp,setShowPopUp)
    }
    return (
        <>
            <div className={styles.signInPopup}>
                <div className={styles.signInPopup_body}>
                    <form className={styles.login_singup_form} style={isOtpSent?{right:"50rem",transitionDuration:"1s"}:{transitionDuration:"1s"}} onSubmit={e => e.preventDefault()}>
                        <div className={styles.phone_input_block}> 
                            <label className={styles.inputLabel} htmlFor="phone_number">Enter your Phone number</label>
                            <div className={styles.phone_number_input_box}>
                                <PhoneInput id="phone_number" placeholder="Enter here..." value={value} onChange={setValue} country="IN" defaultCountry='IN' />
                            </div>
                        </div>
                        <button id="sign_up_button" onClick={signUp} className={styles.sign_up_btn}>Sign up</button>
                    </form>
                    <form onSubmit={e=>e.preventDefault()} className={styles.otp_verification_code_form} style={isOtpSent?{transitionDuration:"1s"}:{left:"50rem",transitionDuration:"1s"}}>
                        <div className={styles.otp_box}>
                            <div className={styles.otp_head}>
                                <p className={styles.otp_label}>Enter Otp send on:</p>
                                <div className={styles.otp_sent_number}>
                                    <b className={styles.contact_number}>+91-{value?.split("+91")}</b>
                                    <button className={styles.phone_Number_change_btn}><EditIcon sx={{fontSize:12,color:"green"}}/></button>
                                </div>
                            </div>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                inputType='text'
                                containerStyle={{justifyContent:"space-evenly",height:"fit-content"}}
                                renderSeparator={<span>-</span>}
                                renderInput={(props) => <input {...props}
                                />}/>
                            <button onClick={onOtpVerify} className={styles.verify_otp}>Verify Otp</button>
                        </div>
                    </form>

                <button className={styles.crossBtn} onClick={handelCross}>
                    <CloseIcon/>
                </button>
                {/* <div className={styles.re_btns}>
                    <p className={styles.resend_otp} onClick={(e)=>onSingup(value,)} >Resend Otp</p>
                </div> */}
            </div>
        </div >
    </>
  )
}
