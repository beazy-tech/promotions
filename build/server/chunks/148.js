exports.id = 148;
exports.ids = [148];
exports.modules = {

/***/ 4409:
/***/ ((module) => {

// Exports
module.exports = {
	"signInPopup": "SigninPopUp_signInPopup__nyyod",
	"signInPopup_body": "SigninPopUp_signInPopup_body__DlwIQ",
	"login_singup_form": "SigninPopUp_login_singup_form__SztFh",
	"phone_input_block": "SigninPopUp_phone_input_block__q_EUl",
	"inputLabel": "SigninPopUp_inputLabel__Jr2ft",
	"phone_number_input_box": "SigninPopUp_phone_number_input_box__U7NFa",
	"sign_up_btn": "SigninPopUp_sign_up_btn__Wc2Rc",
	"crossBtn": "SigninPopUp_crossBtn__VolD6",
	"re_btns": "SigninPopUp_re_btns__1NGD3",
	"resend_otp": "SigninPopUp_resend_otp__ZF6Z_",
	"otp_verification_code_form": "SigninPopUp_otp_verification_code_form__uiX00",
	"otp_box": "SigninPopUp_otp_box__EQxNb",
	"otp_head": "SigninPopUp_otp_head__CxLCO",
	"otp_label": "SigninPopUp_otp_label__sCz9w",
	"otp_sent_number": "SigninPopUp_otp_sent_number__QCKVj",
	"contact_number": "SigninPopUp_contact_number__QhfLq",
	"phone_Number_change_btn": "SigninPopUp_phone_Number_change_btn__FXw9q",
	"verify_otp": "SigninPopUp_verify_otp__w5elJ"
};


/***/ }),

/***/ 3148:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SigninPopUp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4409);
/* harmony import */ var _styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(483);
/* harmony import */ var react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_phone_number_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8680);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4173);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4254);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _handlers_handleAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8393);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6902);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_phone_number_input__WEBPACK_IMPORTED_MODULE_3__, _handlers_handleAuth__WEBPACK_IMPORTED_MODULE_7__]);
([react_phone_number_input__WEBPACK_IMPORTED_MODULE_3__, _handlers_handleAuth__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function SigninPopUp({ setShowPopUp , value , setValue  }) {
    const [isOtpSent, setIsOtpSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [otp, setOtp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const handelCross = ()=>{
        setShowPopUp(false);
        route.push("/");
    };
    const signUp = ()=>{
        (0,_handlers_handleAuth__WEBPACK_IMPORTED_MODULE_7__/* .onLoginVerification */ .uv)(value, setIsOtpSent);
    };
    const onOtpVerify = ()=>{
        (0,_handlers_handleAuth__WEBPACK_IMPORTED_MODULE_7__/* .onOTPVerify */ .Am)(otp, setShowPopUp);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default().signInPopup),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default().signInPopup_body),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: (_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default().login_singup_form),
                        style: isOtpSent ? {
                            right: "35rem",
                            transitionDuration: "1s"
                        } : {
                            transitionDuration: "1s"
                        },
                        onSubmit: (e)=>e.preventDefault(),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default().phone_input_block),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: (_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default().inputLabel),
                                        htmlFor: "phone_number",
                                        children: "Enter your Phone number"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default().phone_number_input_box),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_phone_number_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            id: "phone_number",
                                            placeholder: "Enter here...",
                                            value: value,
                                            onChange: setValue,
                                            defaultCountry: "IN"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                id: "sign_up_button",
                                onClick: signUp,
                                className: (_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default().sign_up_btn),
                                children: "Sign up"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                        onSubmit: (e)=>e.preventDefault(),
                        className: (_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default().otp_verification_code_form),
                        style: isOtpSent ? {
                            transitionDuration: "1s"
                        } : {
                            left: "35rem",
                            transitionDuration: "1s"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default().otp_box),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default().otp_head),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default().otp_label),
                                            children: "Enter Otp send on:"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default().otp_sent_number),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                    className: (_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contact_number),
                                                    children: "+91-9536586259"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: (_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default().phone_Number_change_btn),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                        sx: {
                                                            fontSize: 10,
                                                            color: "green"
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_otp_input__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    value: otp,
                                    onChange: setOtp,
                                    numInputs: 6,
                                    inputType: "text",
                                    containerStyle: {
                                        justifyContent: "space-evenly",
                                        height: "fit-content"
                                    },
                                    renderSeparator: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "-"
                                    }),
                                    renderInput: (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ...props
                                        })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: onOtpVerify,
                                    className: (_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default().verify_otp),
                                    children: "Verify Otp"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_styles_SigninPopUp_module_scss__WEBPACK_IMPORTED_MODULE_9___default().crossBtn),
                        onClick: handelCross,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_4___default()), {})
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 483:
/***/ (() => {



/***/ })

};
;