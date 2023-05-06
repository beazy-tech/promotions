import React from 'react';
import styles from '@/styles/Input.module.scss'
interface initprops{
    Lable:string,
    Type:string
    Placeholder:string,
    required:boolean,
    dispatch:Function,
    value:string,
    width:string,
}
export default function ProfileInput({Lable,Type,Placeholder,required,dispatch,value,width}:initprops) { 
  const handleChange=(e:any)=>{
    if(Lable==="Business Name")
    {
      if(e.target.value.length<=30)
      {
        dispatch({type:"NAME",payload:e.target.value})
      }
    }
    else if(Lable==="Business Address")
    {
      dispatch({type:"ADDRESS",payload:e.target.value})
    }
    else if(Lable==="City")
    {
      dispatch({type:"CITY",payload:e.target.value})
    }
    else if(Lable==="State")
    {
      dispatch({type:"STATE",payload:e.target.value})
    }
    else if(Lable==="Pin Code")
    {
      dispatch({type:"ZIPCODE",payload:e.target.value})
    }
  }
  
  return(
      <>
        <div className={styles.inputTags}>
            <label className={styles.InputLable} htmlFor={Lable}>
              {Lable+":"}
            </label>
            <input style={{width}} required={required} id={Lable} className={Type==="text"?styles.CustomerInputText:styles.CustomInputNumber} type={Type} placeholder={Placeholder} onChange={handleChange} value={value}/>
        </div>
    </>
  ) 
}
