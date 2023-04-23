import React from 'react'
import styles from '@/styles/selectionInput.module.scss'
interface props{
    Label:string,
    Name:string,
    types:Array<string>,
    dispatch:Function,
    State:any
}
export default function SelectionInput({Label,Name,types,dispatch,State}:props) {
  return (
    <>
    <div className={styles.selectInput}>
        <label className={styles.label} htmlFor={Label+"-select"}>{Label}</label>
        <select required  name={Name} id={Label+"-select"} onChange={e=>dispatch(Name==="Promotion_category"?{type:"Promotion Categories",payload:e.target.value}:{type:"Promotion Type",payload:e.target.value})} className={styles.selectType}>
          {State?.promotionCategorie==="Brand promotion" ?
              <option className={styles.option} value="">Not Avilable</option>:
            <>
              <option className={styles.option} value="">--Please choose an option--</option>
              {types?.map((item,count)=><option key={count} className={styles.option} value={item}>{item}</option>)}
            </>
          }
        </select>
    </div>
    </>
  )
}
