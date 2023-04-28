// interface businessDetails{
//     address:string,
//     city:string,
//     id:string,
//     logo:string,
//     mobile:string,
//     name:string,
//     state:string,
//     type:string,
//     zipcode:string
// }
const userId=(data:string)=>{
    return {
        type:"USERID",
        payload:{
            userId:data,
        }
    }
}
const businessDetails=(data:any)=>{
    return {
        type:"BUSINESSDETAILS",
        payload:{
            businessDetails:data
        }
    }
}
const toster=(data:{msg:string,type:string,showPopUp:boolean})=>
{
    return {
        type:"TOSTERDATA",
        payload:{
            msg:data.msg,
            type:data.type,
            showPopUp:data.showPopUp
        }
    }
}
export {userId,businessDetails,toster}