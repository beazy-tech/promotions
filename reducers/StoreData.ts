type promotion={
        category: string,
        coupons: Array<any>;
        eventTimeStamp: string;
        eventTimeStampId: string;
        id: string;
        message: string;
        retailers: Array<any>,
        totalRedeemedCoupon: number,
        type: string,
        validFrom: string,
        validTo: string,
        value: string;
}
interface initalInfo{
    userId:string,
    businessDetails:{
        address:string,
        city:string,
        id:string,
        logo:string,
        mobile:string,
        name:string,
        state:string,
        type:string,
        zipcode:string
    },
    toster:{
        msg:string,
        type:string
        showPopUp:boolean
    },
    DoesUserExists:boolean,
    isLoggedIn:boolean,
    showProfile:boolean,
    contactNumber:string
    promotionInfo:Array<any>
}
const initailState:initalInfo={
    userId:"",
    businessDetails:{
        address:"",
        city:"",
        id:"",
        logo:"",
        mobile:"",
        name:"",
        state:"",
        type:"",
        zipcode:""
    },
    promotionInfo: [],
    toster:{
        msg:"",
        type:"",
        showPopUp:false,
    },
    DoesUserExists:true,
    isLoggedIn:false,
    showProfile:false,
    contactNumber:""
}
const storeData=(state:any=initailState,action:any)=>{
    switch (action.type){
        case "USERID":
            return {...state,userId:action.payload.userId};
        case "BUSINESSDETAILS":
            return {...state,businessDetails:action.payload.businessDetails}
        case "TOSTERDATA":
            return {...state,toster:action.payload.toster}
        case "DOESUSEREXISTS":
            return {...state,DoesUserExists:action.payload.DoesUserExists}
        case "ISLOGGEDIN":
            return {...state,isLoggedIn:action.payload.isLoggedIn}
        case "SHOWPROFILE":
            return {...state,showProfile:action.payload.showProfile}
        case "CONTACT":
            return {...state,contactNumber:action.payload.contactNumber}
        case "PROMOTIONDATA":
            return {...state,promotionInfo:action.payload.promotionData}
        default:
            return state;
    }
}
export default storeData;