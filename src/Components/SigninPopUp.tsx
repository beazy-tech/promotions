import { useState } from 'react'
import styles from '@/styles/SigninPopUp.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import { MuiTelInput } from 'mui-tel-input' 
import OtpInput from 'react-otp-input';
import { onLoginVerification,onOTPVerify } from '../handlers/handleAuth'
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
interface initprops {
    setShowPopUp: Function,
    value:string,
    setValue:any
}
const inputStyle = {
    height: '35px',
    width: '35px'
};
export default function SigninPopUp({ setShowPopUp,value,setValue }: initprops) {
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [otp, setOtp] = useState('');
    const route = useRouter();
    const dispatch=useDispatch();
    const handleChange=(e:any)=>{
        console.log(e.toString().length);
        if(e.toString().length<=15)
        {
            setValue(e)
        }
    }
    const handelCross = () => {
        setShowPopUp(false);
        route.push("/")
    }
    const signUp = () => {
        onLoginVerification(value, setIsOtpSent);
    }
    const onOtpVerify=()=>{
        onOTPVerify(otp,setShowPopUp,dispatch)
    }
    
    return (
        <>
            <div className={styles.signInPopup}>
                <div className={styles.signInPopup_body}>
                    <form className={styles.login_singup_form} style={isOtpSent?{right:"50rem",transitionDuration:"1s"}:{transitionDuration:"1s"}} onSubmit={e => e.preventDefault()}>
                        <div className={styles.phone_input_block}> 
                            <label className={styles.inputLabel} htmlFor="phone_number">Enter your Phone number</label>
                            <div className={styles.phone_number_input_box}>
                                <MuiTelInput value={value} onChange={handleChange} defaultCountry='IN'/>
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
                                inputType='number'
                                containerStyle={{justifyContent:"space-evenly",height:"fit-content",backgroundColor:'transparent',color:'black'}}
                                renderSeparator={<span>-</span>}
                                inputStyle={inputStyle}
                                renderInput={(props) => <input {...props}
                                />}/>
                            <button onClick={onOtpVerify} className={styles.verify_otp}>Verify Otp</button>
                        </div>
                    </form>

                <button className={styles.crossBtn} onClick={handelCross}>
                    <CloseIcon/>
                </button>
            </div>
        </div >
    </>
  )
}
