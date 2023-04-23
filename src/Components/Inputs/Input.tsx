import React from 'react';
import styles from '@/styles/Input.module.scss'
interface initprops{
    Lable:string,
    Type:string
    Placeholder:string,
    required:boolean,
    dispatch:Function,
    value:string
}
export default function Input({Lable,Type,Placeholder,required,dispatch,value}:initprops) { 
  const handleChange=(e:any)=>{
    if(Lable==="Discount")
    {
      dispatch({type:"VALUE",payload:e.target.value})
    }
    else if(Lable==="Discount (in Rs)")
    {
      dispatch({type:"DISCOUNT_OFF",payload:e.target.value})
      dispatch({type:"VALUE",payload:""})
    }
    else{
      dispatch({type:"ABOVE_RS",payload:e.target.value})
    }
  }
  return(

      <>
        <div className={styles.inputTags}>
            <label className={styles.InputLable} htmlFor={Lable}>
              {Lable+":"}
            </label>
            <input required={required} id={Lable} className={Type==="text"?styles.CustomerInputText:styles.CustomInputNumber} type={Type} placeholder={Placeholder} onChange={handleChange}/>
        </div>
    </>
  ) 
}
