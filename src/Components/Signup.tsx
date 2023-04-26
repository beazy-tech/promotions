import React, { useReducer,useEffect, useState } from 'react'
import styles from '../styles/signup.module.scss'
import { TextField, InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import logoImg from '../utils/Screenshot_from_2023-04-18_15-30-38-removebg-preview.png'
import Image from 'next/image';
import SigninPopUp from '@/Components/SigninPopUp';
import createPromoterAccount from '../handlers/createPromoterAccount';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import promoterInfo from '@/handlers/promoterInfo';
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
  const [image, setImage] = useState<string>("");
  const [showPopUp,setShowPopUp]=useState(true);
  const [value, setValue] = useState("");
  const userId=useSelector((state:{rootReducer:{storeData:{userId:string}}})=>state.rootReducer.storeData.userId);
  const route = useRouter();
  const [userData,setUserData]=useState<initalData>(initalData);
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

    const createPromoter=()=>{
      createPromoterAccount(state,userId,dispatcher);
      route.push("/")
    }

    const uploadImage = (e: any) => {
      setImage(URL.createObjectURL(e.target.files[0]))
    }

    const handleSubmit=(e:any)=>{
      e.preventDefault();
      if(state.type==="Other" && customType.length>0)
      {
        dispatch({type:"TYPE",payload:customType})
      }
      createPromoter();
    }
    useEffect(()=>{
      if(!showPopUp){
        dispatch({type:"MOBILE",payload:value.slice(3)})
      }
    },[showPopUp])
    useEffect(()=>{
      if(userId.length>0)
      {
        promoterInfo(userId,setUserData)
      }
    },[userId])
    useEffect(()=>{
      if(userData?.address?.length>0 && userData?.type?.length>0)
      {
        dispatch({type:"ADDRESS",payload:userData?.address})
        dispatch({type:"CITY",payload:userData?.city})
        dispatch({type:"LOGO",payload:userData?.logo})
        dispatch({type:"MOBILE",payload:userData?.mobile})
        dispatch({type:"NAME",payload:userData?.name})
        dispatch({type:"STATE",payload:userData?.state})
        dispatch({type:"TYPE",payload:userData?.type})
        dispatch({type:"ZIPCODE",payload:userData?.zipcode})
        route.push("/mypromos")
      }
    },[userData])
    return (
    <>
      <div className={styles.createAccount}>
        {showPopUp?<SigninPopUp value={value} setValue={setValue} setShowPopUp={setShowPopUp}/>:<></>}
        <div className={styles.createAccount_left}>
          <h2 className={styles.createAccount_heading}>Let's Get Started ...</h2>
          <p className={styles.createAccount_desc}>Please provide your business details. The information will be used in the promotion banner</p>
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
                <input className={styles.input_image} id="image_uploader" type="file" onChange={uploadImage} />
                <Image src={image} alt="" width={40} height={40} />
              </div>
            </div>
            <button className={styles.submit_btn}>Continue</button>
          </form>
        </div>
        <Image src={logoImg} alt="none" className={styles.signUp_img} height={300} />
      </div>
    </>
  )
}
