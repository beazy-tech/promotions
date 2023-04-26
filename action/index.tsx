const userId=(data:string)=>{
    return {
        type:"USERID",
        payload:{
            userId:data,
        }
    }
}
const showPopUp=(data:[boolean,string])=>{
    return {
        type:"SHOWPOPUP",
        payload:{
            isOpen:data[0],
            type:data[1]
        }
    }
}
export {userId,showPopUp}