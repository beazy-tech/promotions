import React, { useReducer,useEffect, useState } from 'react'
import styles from '../styles/signup.module.scss'
import { TextField, InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import logoImg from '../utils/Screenshot from 2023-04-18 15-30-38.png'
import Image from 'next/image';
import SigninPopUp from '@/Components/SigninPopUp';
import createPromoterAccount from '../handlers/createPromoterAccount.js';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
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
  const userId=useSelector((state:{userId:{userId:string}})=>state.userId.userId);
  const route = useRouter();
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
    const [customType,setCustomType]=useState("");

    const createPromoter=()=>{
      // store data to firebase
      createPromoterAccount(state,userId);
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
        route.push("/")
      }
    },[userId])
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
            <TextField inputProps={{ style: { fontSize: 12 } }} className={styles.form_input} id="standard-basic" label="Address *" variant="standard" onChange={e=>dispatch({type:"ADDRESS",payload:e.target.value})}/>
            <TextField inputProps={{ style: { fontSize: 12 } }} className={styles.form_input} id="standard-basic" label="City *" variant="standard" onChange={e=>dispatch({type:"CITY",payload:e.target.value})}/>
            <TextField inputProps={{ style: { fontSize: 12 } }} className={styles.form_input} id="standard-basic" label="State *" variant="standard" onChange={e=>dispatch({type:"STATE",payload:e.target.value})}/>
            <TextField inputProps={{ style: { fontSize: 12 } }} className={styles.form_input} id="standard-basic" label="ZIP *" variant="standard" onChange={e=>dispatch({type:"ZIPCODE",payload:e.target.value})}/>
            <div className={styles.insertLogo}>
              <label htmlFor="image_uploader"> upload business logo</label>
              <div className={styles.image_input}>
                <input className={styles.input_image} id="image_uploader" type="file" onChange={uploadImage} />
                <Image src={image} alt="" width={40} height={40} />
              </div>
            </div>
            <button className={styles.submit_btn}>Submit Details</button>
          </form>
        </div>
        <Image src={logoImg} alt="none" className={styles.signUp_img} height={300} />
      </div>
    </>
  )
}
