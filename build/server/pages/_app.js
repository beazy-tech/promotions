(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9460:
/***/ ((module) => {

// Exports
module.exports = {
	"Navbar": "Navbar_Navbar__n5AKE",
	"Navbar_left": "Navbar_Navbar_left__IpOut",
	"logoImg": "Navbar_logoImg__nRruz",
	"branding": "Navbar_branding__YVN9u",
	"Navbar_right": "Navbar_Navbar_right__UC13C",
	"MobileNavbar_right": "Navbar_MobileNavbar_right__CA8eF",
	"MobileNavbar_icon": "Navbar_MobileNavbar_icon__KvaJn",
	"MobileNavbar_icon_li": "Navbar_MobileNavbar_icon_li__biutG",
	"Navbar_right_list": "Navbar_Navbar_right_list__oo8W1",
	"Navbar_right_list_item": "Navbar_Navbar_right_list_item__wX__c",
	"navbar_right_item_list": "Navbar_navbar_right_item_list__MgMi5",
	"navbar_right_item": "Navbar_navbar_right_item__on1ch",
	"navbar_right_item_list_logout_btn": "Navbar_navbar_right_item_list_logout_btn__qXXVu"
};


/***/ }),

/***/ 3856:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "NavbarBtns_button__vSFGA"
};


/***/ }),

/***/ 4024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Beazy-Logo-image.1939ce32.svg","height":621,"width":621,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Buttons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_NavbarBtns_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3856);
/* harmony import */ var _styles_NavbarBtns_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_NavbarBtns_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




function Buttons({ btn_type  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_NavbarBtns_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: btn_type === "Create account" ? "/signup" : "/login",
                children: btn_type
            })
        })
    });
}


/***/ }),

/***/ 4714:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_Beazy_Logo_image_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4024);
/* harmony import */ var _styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9460);
/* harmony import */ var _styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(132);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7752);
/* harmony import */ var _mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _handlers_handleAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8393);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9801);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3467);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1883);
/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9520);
/* harmony import */ var _mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_icons_material_FormatListBulleted__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8989);
/* harmony import */ var _mui_icons_material_FormatListBulleted__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_FormatListBulleted__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_handlers_handleAuth__WEBPACK_IMPORTED_MODULE_8__]);
_handlers_handleAuth__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















const btn_type = [
    {
        type: "Create account"
    },
    {
        type: "Login"
    }
];
function Navbar() {
    const [isNavClicked, setisNavClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const userId = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.userId.userId);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const logout = ()=>{
        setisNavClicked(!isNavClicked);
        (0,_handlers_handleAuth__WEBPACK_IMPORTED_MODULE_8__/* .signOutUser */ .Mx)(dispatch);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().Navbar),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().Navbar_left),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: _utils_Beazy_Logo_image_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                    alt: "none",
                                    className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().logoImg)
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().branding),
                                children: "Welcome to Beazy Promotions !!"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().Navbar_right),
                        children: userId.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().Navbar_right_list),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().Navbar_right_list_item),
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/newpromo",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().Navbar_right_list_item),
                                            children: "Create Coupon"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/mypromos",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().Navbar_right_list_item),
                                            children: "My Promos"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            onClick: logout,
                                            className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().Navbar_right_list_item),
                                            children: "Log Out"
                                        })
                                    })
                                ]
                            })
                        }) : btn_type.map(({ type  }, count)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                btn_type: type
                            }, count))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().MobileNavbar_right),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                            className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().MobileNavbar_icon),
                            style: isNavClicked ? {
                                bottom: "4px"
                            } : {},
                            onClick: ()=>setisNavClicked(!isNavClicked),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    style: isNavClicked ? {
                                        transform: "rotate(45deg)",
                                        bottom: "-6px"
                                    } : {
                                        transitionDuration: "0.2s"
                                    },
                                    className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().MobileNavbar_icon_li)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    style: isNavClicked ? {
                                        display: "none"
                                    } : {},
                                    className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().MobileNavbar_icon_li)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    style: isNavClicked ? {
                                        transform: "rotate(-45deg)",
                                        top: "0px",
                                        transitionDuration: "0.2s"
                                    } : {
                                        transitionDuration: "0.2s"
                                    },
                                    className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().MobileNavbar_icon_li)
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().navbar_right_item_list),
                style: isNavClicked ? {
                    width: "15rem",
                    right: "0",
                    transitionDuration: "1s"
                } : {
                    width: 0,
                    right: "0",
                    transitionDuration: "1s"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            onClick: ()=>setisNavClicked(!isNavClicked),
                            className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().navbar_right_item),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    sx: {
                                        color: "white"
                                    }
                                }),
                                " Home"
                            ]
                        })
                    }),
                    userId.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/newpromo",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    onClick: ()=>setisNavClicked(!isNavClicked),
                                    className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().navbar_right_item),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Create__WEBPACK_IMPORTED_MODULE_12___default()), {
                                            sx: {
                                                color: "white"
                                            }
                                        }),
                                        " Create Coupons"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/mypromos",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    onClick: ()=>setisNavClicked(!isNavClicked),
                                    className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().navbar_right_item),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_FormatListBulleted__WEBPACK_IMPORTED_MODULE_13___default()), {
                                            sx: {
                                                color: "white"
                                            }
                                        }),
                                        "Coupons List"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().navbar_right_item_list_logout_btn),
                                onClick: logout,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        sx: {
                                            color: "white"
                                        }
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Logout"
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/signup",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    onClick: ()=>setisNavClicked(!isNavClicked),
                                    className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().navbar_right_item),
                                    children: [
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            sx: {
                                                color: "white"
                                            }
                                        }),
                                        " SignIn"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/login",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    onClick: ()=>setisNavClicked(!isNavClicked),
                                    className: (_styles_Navbar_module_scss__WEBPACK_IMPORTED_MODULE_14___default().navbar_right_item),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Login__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            sx: {
                                                color: "white"
                                            }
                                        }),
                                        " login"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6961);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4714);
/* harmony import */ var _handlers_handleAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8393);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4897);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__, _handlers_handleAuth__WEBPACK_IMPORTED_MODULE_4__]);
([_Components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__, _handlers_handleAuth__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function App({ Component , pageProps  }) {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        (0,_handlers_handleAuth__WEBPACK_IMPORTED_MODULE_4__/* .checkUserAuth */ .Sk)(dispatch);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_store__WEBPACK_IMPORTED_MODULE_5__/* .wrapper.withRedux */ .Y.withRedux(App));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ wrapper)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8775);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);



const makeStore = ()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
        reducer: {
            [_userData__WEBPACK_IMPORTED_MODULE_1__/* .userData.name */ .ZW.name]: _userData__WEBPACK_IMPORTED_MODULE_1__/* .userData.reducer */ .ZW.reducer
        },
        devTools: true
    });
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(makeStore);


/***/ }),

/***/ 6961:
/***/ (() => {



/***/ }),

/***/ 1883:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/AccountCircle");

/***/ }),

/***/ 9520:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Create");

/***/ }),

/***/ 8989:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/FormatListBulleted");

/***/ }),

/***/ 3467:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 7752:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Login");

/***/ }),

/***/ 9801:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 5648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1401:
/***/ ((module) => {

"use strict";
module.exports = import("@firebase/firestore");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664,434,393], () => (__webpack_exec__(9212)));
module.exports = __webpack_exports__;

})();