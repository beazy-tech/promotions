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
    }
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
    toster:{
        msg:"",
        type:"",
        showPopUp:false,
    }
}
const storeData=(state:any=initailState,action:any)=>{
    switch (action.type){
        case "USERID":
            return {...state,userId:action.payload.userId};
        case "BUSINESSDETAILS":
            return {...state,businessDetails:action.payload.businessDetails}
        case "TOSTERDATA":
            return {...state,toster:action.payload.toster}
        default:
            return state;
    }
}
export default storeData;