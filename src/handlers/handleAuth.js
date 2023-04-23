import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signOut } from "firebase/auth";
import {db,app} from "../firebaseConfig/config"
import { setUserData } from "../../store/userData";
const auth = getAuth(app);
auth.useDeviceLanguage();
const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier('sign_up_button', {
            'size': 'invisible',
            'callback': (response) => {
                onSingup();
            }
        }, auth);
        window.recaptchaVerifier.render().then((widgetId) => {
            window.recaptchaWidgetId = widgetId;
        });
    }
}
const onSingup = (contact, setIsOtpSent,resend=false) => {
  if (!resend) {
    onCaptchVerify();
  }
  const appVerifier = window.recaptchaVerifier;
  let recaptchaResponse;
  if (resend) {
    signInWithPhoneNumber(auth, contact, appVerifier)
      .then((confirm) => {
        window.confirmationResult = confirm;
        setIsOtpSent(true);
        console.warn("OTP Re-sent Successfully");
      })
      .catch((err) => {
        setIsOtpSent(false);
        console.log(err);
      });
  } else {
    signInWithPhoneNumber(auth, contact, appVerifier)
      .then((confirm) => {
        recaptchaResponse = grecaptcha.getResponse(recaptchaWidgetId);
        window.confirmationResult = confirm;
        setIsOtpSent(true);
        console.warn("OTP Sent Successfully");
      })
      .catch((err) => {
        window.recaptchaVerifier
          .render()
          .then(function (widgetId) {
            grecaptcha.reset(widgetId);
          });
          console.log(err);
      });
  }
};
var credentials = "";
const onOTPVerify = (otp, setShowPopUp) => {
    window.confirmationResult.confirm(otp).then((res) => {
        setShowPopUp(false);
    }).catch(err => console.log("error---> ", err))
}
const onLoginVerification = async (contact,setIsOtpSent) => {
    onSingup(contact,setIsOtpSent);
}

const checkUserAuth = (dispatch) => {
    auth.onAuthStateChanged((user)=>{
      if(user){
        dispatch(setUserData(user?.uid))
      }
      else{
        console.log("User is logged in")
      }
    });
};
const signOutUser = (dispatch) => {
    signOut(auth).then(() => {
        dispatch(setUserData(""))
    }).catch((error) => {
    });

}
export { onSingup, onOTPVerify, credentials, onLoginVerification, checkUserAuth, signOutUser };