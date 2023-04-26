interface initalInfo{
    userId:string,
    statusPopUp:{
        isShow:boolean,
        type:string
    }
}
const initailState:initalInfo={
    userId:"",
    statusPopUp:{
        isShow:false,
        type:""
    }
}
const storeData=(state:any=initailState,action:any)=>{
    switch (action.type){
        case "USERID":
            return {...state,userId:action.payload.userId};
        case "SHOWPOPUP":
            return {...state,statusPopUp:{isShow:action.payload.isOpen,type:action.payload.type}};
        default:
            return state;
    }
}
export default storeData;