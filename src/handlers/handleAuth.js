import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signOut } from "firebase/auth";
import {app} from "../firebaseConfig/config"
import {businessDetails,  contactNumber,  DoesUserExists,  isLoggedIn,  userId } from "../../action";
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
const onOTPVerify = (otp, setShowPopUp,dispatch) => {
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
        dispatch(contactNumber(user.phoneNumber.slice(3)))
        dispatch(userId(user?.uid))
        dispatch(isLoggedIn(true))
      }
      else{
        console.log("User is logged in")
      }
    });
};
const signOutUser = (dispatch) => {
    signOut(auth).then(() => {
        dispatch(userId(""))
        dispatch(isLoggedIn(false));
        dispatch(businessDetails({
            address:"",
            city:"",
            id:"",
            logo:"",
            mobile:"",
            name:"",
            state:"",
            type:"",
            zipcode:""
          }))
    }).catch((error) => {
    });

}
export { onSingup, onOTPVerify, credentials, onLoginVerification, checkUserAuth, signOutUser };