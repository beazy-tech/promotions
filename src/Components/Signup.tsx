import React, { useReducer,useEffect, useState } from 'react'
import styles from '../styles/signup.module.scss'
import { TextField, InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import logoImg from '../utils/Screenshot_from_2023-04-18_15-30-38-removebg-preview.png'
import Image from 'next/image';
import SigninPopUp from '@/Components/SigninPopUp';
import { useSelector,useDispatch } from 'react-redux';
import createPromoterAccount from '../handlers/createPromoterAccount';
import { useRouter } from 'next/router';
import promoterInfo from '@/handlers/promoterInfo';
import {uploadFile} from '@/handlers/uploadFiles';
interface initalData{
  address:string,
  city:string,
  logo:string,
  mobile:string,
  name:string,
  state:string,
  type:string,
  zipcode:string
}
const initalData:initalData={
  address:"",
  city:"",
  logo:"",
  mobile:"", 
  name:"",
  state:"",
  type:"",
  zipcode:""
}

export default function CreateAccount() {
  const [showPopUp,setShowPopUp]=useState(true);
  const [value, setValue] = useState("");
  const [image, setImage] = useState<File>();
  const [previewimage,setPreviewImage]=useState<string>("")
  const userId=useSelector((state:{rootReducer:{storeData:{userId:string}}})=>state.rootReducer.storeData.userId);
  const route = useRouter();
  const businessDetails=useSelector((state:{rootReducer:{storeData:{businessDetails:any}}})=>state.rootReducer.storeData.businessDetails);
  const isLoggedIn=useSelector((state:{rootReducer:{storeData:{isLoggedIn:any}}})=>state.rootReducer.storeData.isLoggedIn);
  const contactNumber=useSelector((state:{rootReducer:{storeData:{contactNumber:string}}})=>state.rootReducer.storeData.contactNumber)
  const reducer=(state:initalData,action:any)=>{
    switch(action.type){
      case "ADDRESS":
        return {...state,address:action.payload};
      case "CITY":
        return {...state,city:action.payload};
      case "LOGO":
        return {...state,logo:action.payload};
      case "MOBILE":
        return {...state,mobile:action.payload};
      case "NAME":
        return {...state,name:action.payload};
      case "STATE":
        return {...state,state:action.payload};
      case "TYPE":
        return {...state,type:action.payload};
      case "ZIPCODE":
        return {...state,zipcode:action.payload}
      default:
        return state;
      }
    }
    const [state,dispatch]=useReducer(reducer,initalData)
    const dispatcher=useDispatch()
    const [customType,setCustomType]=useState("");

    const createPromoter=async()=>{
      if(image)
      {
        createPromoterAccount(state,userId,dispatcher,await uploadFile(userId,image));
      }
      else{
        createPromoterAccount(state,userId,dispatcher,"");
      }
      route.push("/")
    }

    const uploadImage = (e: any) => {
      const file = e.target.files[0];
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
    
    const handleSubmit=(e:any)=>{
      e.preventDefault();
      if(state.type==="Other" && customType.length>0)
      {
        dispatch({type:"TYPE",payload:customType});
      }
      createPromoter();
    }
    useEffect(()=>{
      if(userId.length>0)
      {
        promoterInfo(userId,dispatcher);
      }
    },[userId])
    useEffect(()=>{      
      if(contactNumber.length > 0)
      {
        dispatch({type:"MOBILE",payload:contactNumber})
      }
    },[contactNumber])
    
    useEffect(()=>{
      if(businessDetails?.address?.length>0 && businessDetails?.type?.length>0)
      {
        dispatch({type:"ADDRESS",payload:businessDetails?.address})
        dispatch({type:"CITY",payload:businessDetails?.city})
        dispatch({type:"LOGO",payload:businessDetails?.logo})
        dispatch({type:"MOBILE",payload:businessDetails?.mobile})
        dispatch({type:"NAME",payload:businessDetails?.name})
        dispatch({type:"STATE",payload:businessDetails?.state})
        dispatch({type:"TYPE",payload:businessDetails?.type})
        dispatch({type:"ZIPCODE",payload:businessDetails?.zipcode})
        route.push("/mypromos")
      }
    },[businessDetails])
  
    useEffect(()=>{
      if(!showPopUp){
        dispatch({type:"MOBILE",payload:value.slice(3)})
      }
    },[showPopUp])
    return (
    <>
      <div className={styles.createAccount}>
        {!isLoggedIn?showPopUp?<SigninPopUp value={value} setValue={setValue} setShowPopUp={setShowPopUp}/>:<></>:<></>}
        <div className={styles.createAccount_left}>
          <h2 className={styles.createAccount_heading}>Let's Get Started ...</h2>
          <p className={styles.createAccount_desc}>Please provide your business details. The information will be used in the <b>promotion banner</b></p>
          <form className={styles.createAccount_form} onSubmit={handleSubmit}>
            <FormControl className={styles.form_input} variant="standard">
              <InputLabel className={styles.label} id="demo-simple-select-standard-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={state.type}
                onChange={(e)=>dispatch({type:"TYPE",payload:e.target.value})}
                label="Type of Business"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Restaurant"}>Restaurant</MenuItem>
                <MenuItem value={"Hotel"}>Hotel</MenuItem>
                <MenuItem value={"salon"}>Salon</MenuItem>
                <MenuItem value={"Spa"}>Spa</MenuItem>
                <MenuItem value={"Gym"}>Gym</MenuItem>
                <MenuItem value={"School"}>School</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>
            {state.type==="Other"?<TextField className={styles.form_input} inputProps={{ style: { fontSize: 12 } }} id="standard-basic" label="Enter Type of Business *" variant="standard" onChange={e=>setCustomType(e.target.value)} value={customType} />:<></>}
            <TextField className={styles.form_input} inputProps={{ style: { fontSize: 12 }}} value={state.name} id="standard-basic" label="Name *" variant="standard" onChange={e=>dispatch({type:"NAME",payload:e.target.value})}/>
            <TextField className={styles.form_input} inputProps={{ style: { fontSize: 12 } }} id="standard-basic" label="Mobile Number" variant="standard" value={state.mobile}/>
            <TextField inputProps={{ style: { fontSize: 12 } }} className={styles.form_input} id="standard-basic" label="Address *" variant="standard" value={state.address} onChange={e=>dispatch({type:"ADDRESS",payload:e.target.value})}/>
            <TextField inputProps={{ style: { fontSize: 12 } }} className={styles.form_input} id="standard-basic" label="City *" variant="standard" value={state.city} onChange={e=>dispatch({type:"CITY",payload:e.target.value})}/>
            <TextField inputProps={{ style: { fontSize: 12 } }} className={styles.form_input} id="standard-basic" label="State *" variant="standard" value={state.state} onChange={e=>dispatch({type:"STATE",payload:e.target.value})}/>
            <TextField inputProps={{ style: { fontSize: 12 } }} className={styles.form_input} id="standard-basic" label="ZIP *" variant="standard" value={state.zipcode} onChange={e=>dispatch({type:"ZIPCODE",payload:e.target.value})}/>
            <div className={styles.insertLogo}>
              <label htmlFor="image_uploader"> upload business logo</label>
              <div className={styles.image_input}>
                <input className={styles.input_image} id="image_uploader" type="File" onChange={uploadImage} />
                <Image src={previewimage} alt="" width={40} height={40} />
              </div>
            </div>
            <button className={styles.submit_btn}>Continue</button>
          </form>
        </div>
        {/* <BusinessDetailsForm/> */}
        <Image src={logoImg} alt="none" className={styles.signUp_img} height={300} />
      </div>
    </>
  )
}
