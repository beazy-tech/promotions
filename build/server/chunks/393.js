"use strict";
exports.id = 393;
exports.ids = [393];
exports.modules = {

/***/ 8393:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Am": () => (/* binding */ onOTPVerify),
/* harmony export */   "Mx": () => (/* binding */ signOutUser),
/* harmony export */   "Sk": () => (/* binding */ checkUserAuth),
/* harmony export */   "uv": () => (/* binding */ onLoginVerification)
/* harmony export */ });
/* unused harmony exports onSingup, credentials */
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);
/* harmony import */ var _firebaseConfig_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(434);
/* harmony import */ var _store_userData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8775);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _firebaseConfig_config__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _firebaseConfig_config__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(_firebaseConfig_config__WEBPACK_IMPORTED_MODULE_1__/* .app */ .l);
auth.useDeviceLanguage();
const onCaptchVerify = ()=>{
    if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new firebase_auth__WEBPACK_IMPORTED_MODULE_0__.RecaptchaVerifier("sign_up_button", {
            "size": "invisible",
            "callback": (response)=>{
                onSingup();
            }
        }, auth);
        window.recaptchaVerifier.render().then((widgetId)=>{
            window.recaptchaWidgetId = widgetId;
        });
    }
};
const onSingup = (contact, setIsOtpSent, resend = false)=>{
    if (!resend) {
        onCaptchVerify();
    }
    const appVerifier = window.recaptchaVerifier;
    let recaptchaResponse;
    if (resend) {
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPhoneNumber)(auth, contact, appVerifier).then((confirm)=>{
            window.confirmationResult = confirm;
            setIsOtpSent(true);
            console.warn("OTP Re-sent Successfully");
        }).catch((err)=>{
            setIsOtpSent(false);
            console.log(err);
        });
    } else {
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPhoneNumber)(auth, contact, appVerifier).then((confirm)=>{
            recaptchaResponse = grecaptcha.getResponse(recaptchaWidgetId);
            window.confirmationResult = confirm;
            setIsOtpSent(true);
            console.warn("OTP Sent Successfully");
        }).catch((err)=>{
            window.recaptchaVerifier.render().then(function(widgetId) {
                grecaptcha.reset(widgetId);
            });
            console.log(err);
        });
    }
};
var credentials = "";
const onOTPVerify = (otp, setShowPopUp)=>{
    window.confirmationResult.confirm(otp).then((res)=>{
        setShowPopUp(false);
    }).catch((err)=>console.log("error---> ", err));
};
const onLoginVerification = async (contact, setIsOtpSent)=>{
    onSingup(contact, setIsOtpSent);
};
const checkUserAuth = (dispatch)=>{
    auth.onAuthStateChanged((user)=>{
        if (user) {
            dispatch((0,_store_userData__WEBPACK_IMPORTED_MODULE_2__/* .setUserData */ .M)(user?.uid));
        } else {
            console.log("User is logged in");
        }
    });
};
const signOutUser = (dispatch)=>{
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signOut)(auth).then(()=>{
        dispatch((0,_store_userData__WEBPACK_IMPORTED_MODULE_2__/* .setUserData */ .M)(""));
    }).catch((error)=>{});
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ setUserData),
/* harmony export */   "ZW": () => (/* binding */ userData)
/* harmony export */ });
/* unused harmony export userIdInfo */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);


// Initial state
const initialState = {
    userId: ""
};
// Actual Slice
const userData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "userId",
    initialState,
    reducers: {
        setUserData (state, action) {
            state.userId = action.payload;
        }
    },
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
        [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE]: (state, action)=>{
            return {
                ...state,
                ...action.payload.userId
            };
        }
    }
});
const { setUserData  } = userData.actions;
const userIdInfo = (state)=>state.userId.userId;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (userData.reducer);


/***/ })

};
;