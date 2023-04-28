import { useState,useEffect } from 'react'
import styles from '@/styles/CouponVerification.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import validateCoupon from '@/handlers/validateCoupon';
import verifiedImg from '../utils/verification-icon-8.jpg'
import Image from 'next/image';
interface props {
    showVerificationComponent: boolean,
    setshowVerificationComponent: Function,
    promotionId: string
}
export default function CouponVerification({ showVerificationComponent, setshowVerificationComponent, promotionId }: props) {
    const [couponCode, setCouponCode] = useState("");
    const [isRedeemed, setIsRedeemed] = useState(false);
    const userId=useSelector((state:{rootReducer:{storeData:{userId:string}}})=>state.rootReducer.storeData.userId);
    const validateCouponCode = () => {
        if (userId.length > 0) {
            validateCoupon(userId, promotionId, couponCode, setIsRedeemed);
        }
        }
        // usx
    return (
        <>
            <div className={styles.couponcode_verification}>
                {!isRedeemed ? <div className={styles.couponcode_verifications_body}>
                    <div className={styles.couponcodeverify}>
                        <h3 className={styles.validation_home}>Verify Coupon</h3>
                        <form onSubmit={e => e.preventDefault()} className={styles.couponcodeverify_form}>
                            <label className={styles.couponcodeverify_form_label} htmlFor="Coupon_code">Enter Coupon Code:</label>
                            <input className={styles.couponcodeverify_form_input} value={couponCode} type="text" id="Coupon_code" name="Coupon_code" onChange={(e) => setCouponCode(e.target.value)} />
                            <button onClick={validateCouponCode} className={styles.otp_verification}>Verify Coupon</button>
                        </form>
                    </div>
                    <button onClick={() => setshowVerificationComponent(!showVerificationComponent)} className={styles.closeBtn}><CloseIcon sx={{ fontSize: "1rem", color: "gray" }} /></button>
                </div> : <>
                    <div className={styles.otp_verified}>
                        <Image src={verifiedImg} alt="none" className={styles.otp_verified_image}/>
                        <p className={styles.Code_Verified_text}>Coupon Redeemed</p>
                    </div>
                </>}
            </div>
        </>
    )
}
