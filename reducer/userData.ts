interface initalState{
    userId:string
}
const initalState:initalState={
    userId:""
}
const userData=(state:any=initalState,action:{payload:any,type:string})=>{
    switch(action.type)
    {
        case "USERID":
            return {...state,userId:action.payload.userId};
        default:
            return state;
    }
}
export default userData;