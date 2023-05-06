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
const toster=(data:any)=>
{    
    return {
        type:"TOSTERDATA",
        payload:{
            toster:{
            msg:data.msg,
            type:data.type,
            showPopUp:data.showPopUp
        }}
    }
}
const DoesUserExists=(data:boolean)=>{
    return {
        type:"DOESUSEREXISTS",
        payload:{
            DoesUserExists:data
        }
    }
}
const isLoggedIn=(data:boolean)=>{
    return {
        type:"ISLOGGEDIN",
        payload:{
            isLoggedIn:data
        }
    }
}
const showProfile=(data:boolean)=>{
    return {
        type:"SHOWPROFILE",
        payload:{
            showProfile:data
        }
    }
}
const contactNumber=(data:string)=>{
    return {
        type:"CONTACT",
        payload:{
            contactNumber:data
        }
    }
}
export {userId,businessDetails,toster,DoesUserExists,isLoggedIn,showProfile,contactNumber}