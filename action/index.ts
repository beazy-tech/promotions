const userId=(data:string)=>{
    return {
        type:"USERID",
        payload:{
            userId:data
        }
    }
}
export {userId};