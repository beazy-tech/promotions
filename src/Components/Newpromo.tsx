import { useState, useReducer,useEffect } from 'react';
import Input from './Inputs/Input'
import styles from '@/styles/newPromotion.module.scss'
import SelectionInput from '@/Components/Inputs/SelectionInput';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import createNewPromotion from '../handlers/createNewPromotion'
import generateRandomId from '@/handlers/generateRandomId';
import { useSelector } from 'react-redux';
import { userIdInfo } from '../../store/userData';
import { EnumType } from 'typescript';
const categories=[
  "Flat Rs_ Off","Flat_ % discount","Rs _ off on purchases above Rs_","days free trial","Custom message","Brand promotion"
]
const promtionType=[
  "One-time valid","unlimited validity"
]
interface initalstate{
  category:string,
  type:string,
  value:string,
  discount_of:string,
  above_rs:string,
  validFrom:string,
  validTo:string
}
interface data{
  category:string,
  type:string,
  validFrom:string,
  validTo:string,
  id:string,
  message:string,
  value:string,
  eventTimeStamp:string,
  eventTimeStampId:string,
  retailers:Array<any>,
  coupons:Array<any>
}
const initalState:initalstate={
  category:"",
  type:"",
  value:"",
  discount_of:"",
  above_rs:"",
  validFrom:format(new Date(), 'dd/MM/yyyy'),
  validTo:format(new Date(), 'dd/MM/yyyy')
}
export default function Createpromo() {
  const [values, onChangeValue]= useState<[Date | number, Date | number]>([new Date(),new Date()]);
  const userId=useSelector(userIdInfo);
  const reducer=(state:initalstate,action:any)=>{
    switch(action.type)
    {
      case "Promotion Categories":
        return {...state,category:action.payload};
      case "Promotion Type":
        return {...state,type:action.payload};
      case "VALUE":
        return {...state,value:action.payload};
      case "DISCOUNT_OFF":
        return {...state,discount_of:action.payload};
      case "ABOVE_RS":
        return {...state,above_rs:action.payload}
      case "ValidFrom":
        return {...state,validFrom:action.payload};
      case "ValidTo":
        return {...state,validTo:action.payload};
      default:
        return state;
    }
  }
  
  const [state, dispatch] = useReducer(reducer,initalState);
  useEffect(() => {
    dispatch({type:"ValidFrom",payload:format(values[0], 'dd/MM/yyyy')})
    dispatch({type:"ValidTo",payload:format(values[1], 'dd/MM/yyyy')})
  }, [values])
  const handleSelect = (value: [ Date | number, Date | number]) => {
    onChangeValue(value);
  };
  const handleSubmit=(e:any)=>{
    e.preventDefault();
    const dt = new Date();
    const padL = (nr:any, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
    let time = `${padL(dt.getDate())}/${padL(dt.getMonth() + 1)}/${dt.getFullYear()} ${padL(dt.getHours() > 12 ? dt.getHours() % 12 : dt.getHours())}:${padL(dt.getMinutes())}:${padL(dt.getSeconds())} ${padL(dt.getHours() > 12 ? "pm" : "am")}`;
    let data={
      category:state.category,
      type:state.type,
      validFrom:state.validFrom,
      validTo:state.validTo,
      id:generateRandomId(),
      message:"",
      value:state.category==="Rs _ off on purchases above Rs_"?state.discount_of+"*"+state.above_rs:state.value,
      eventTimeStamp:time,
      eventTimeStampId:Date.now(),
      retailers:[],
      coupons:[]
    };
    createNewPromotion(data,data.id,userId)
  }  
  return (
    <>
    <div className={styles.newPromotion}>
        <h1 className={styles.newPromotion_heading}>Create new promtion</h1>
        <div className={styles.newPromotion_body}>
          <form onSubmit={handleSubmit} className={styles.promotionForm}>
            <SelectionInput Label="Promotion Category" Name="Promotion_category" types={categories} dispatch={dispatch} State={""}/>
            <SelectionInput Label="Promotion Type" Name="Promotion_type" types={promtionType} dispatch={dispatch} State={state}/>
            {state?.category!=="Rs _ off on purchases above Rs_"?
              <Input required={true} Lable="Discount" Type="number"  Placeholder={state?.category==="Flat Rs_ Off"?"Discount(in Rs)":state?.category==="Flat_ % discount"?"Discount(in %)":"Discount Price"} dispatch={dispatch} value={state.value}/>:
              <div className={styles.discount_off_onn}>
                <Input required={true} Lable="Discount (in Rs)" Type="number"  Placeholder={"discount of (in rs)"} dispatch={dispatch} value={state.value}/>
                <Input required={true} Lable="Above (in Rs)" Type="number"  Placeholder={"Above (in rs)"} dispatch={dispatch} value={state.value}/>
              </div>
              }
              <div className={styles.date_rangePicker}>
                <p className={styles.validate_picker_label}>Validatity</p>
                <DateRangePicker onChange={handleSelect} minDate={new Date()} format='dd/MM/yyyy' className={styles.daterangePicker} required={true} clearIcon={null} value={[values[0].toLocaleString(), values[1].toLocaleString()]} />
              </div>
              <button className={styles.savePromotion}>Save Promotion</button>
          </form>
        </div>
    </div>
    </>
  )
}
