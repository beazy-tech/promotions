import { useState, useReducer, useEffect } from 'react';
import Input from './Inputs/Input'
import styles from '@/styles/newPromotion.module.scss'
import SelectionInput from '@/Components/Inputs/SelectionInput';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import createNewPromotion from '../handlers/createNewPromotion'
import generateRandomId from '@/handlers/generateRandomId';
import { useDispatch, useSelector } from 'react-redux';
import img from '../utils/Screenshot_from_2023-04-18_15-30-38-removebg-preview.png'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { toster } from '../../action';
import MessageInput from './Inputs/MessageInput';
const categories = [
  "Flat Rs_ Off", "Flat _% discount", "Rs_ off on purchases above Rs_", "_ days free trial", "Custom message", "Brand promotion"
]
const promtionType = [
  "One-time valid", "unlimited validity"
]
interface initalstate {
  category: string,
  type: string,
  value: string,
  discount_of: string,
  above_rs: string,
  validFrom: string,
  validTo: string,
  message: string
}
interface data {
  category: string,
  type: string,
  validFrom: string,
  validTo: string,
  id: string,
  message: string,
  value: string,
  eventTimeStamp: string,
  eventTimeStampId: string,
  retailers: Array<any>,
  coupons: Array<any>
}
const initalState: initalstate = {
  category: "",
  type: "",
  value: "",
  discount_of: "",
  above_rs: "",
  message: "",
  validFrom: format(new Date(), 'dd/MM/yyyy'),
  validTo: format(new Date(), 'dd/MM/yyyy')
}
export default function Createpromo() {
  const [values, onChangeValue] = useState([new Date(), new Date()]);
  const userId = useSelector((state: { rootReducer: { storeData: { userId: string } } }) => state.rootReducer.storeData.userId);
  const [isPromotionCreated, setIsPromotionCreated] = useState(false);
  const tosterData=useSelector((state:{rootReducer:{storeData:{toster:any}}})=>state.rootReducer.storeData.toster);
  const dispatcher = useDispatch()
  const route = useRouter();
  const reducer = (state: initalstate, action: any) => {
    switch (action.type) {
      case "Promotion Categories":
        return { ...state, category: action.payload };
      case "Promotion Type":
        return { ...state, type: action.payload };
      case "VALUE":
        return { ...state, value: action.payload };
      case "DISCOUNT_OFF":
        return { ...state, discount_of: action.payload };
      case "ABOVE_RS":
        return { ...state, above_rs: action.payload };
      case "ValidFrom":
        return { ...state, validFrom: action.payload };
      case "MESSAGE":
        return { ...state, message: action.payload };
      case "ValidTo":
        return { ...state, validTo: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initalState);
  useEffect(() => {
    dispatch({ type: "ValidFrom", payload: format(values[0], 'dd/MM/yyyy') })
    dispatch({ type: "ValidTo", payload: format(values[1], 'dd/MM/yyyy') })
  }, [values])
  const handleSelect = (value: any) => {
    onChangeValue(value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const dt = new Date();
    const padL = (nr: any, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
    let time = `${padL(dt.getDate())}/${padL(dt.getMonth() + 1)}/${dt.getFullYear()} ${padL(dt.getHours() > 12 ? dt.getHours() % 12 : dt.getHours())}:${padL(dt.getMinutes())}:${padL(dt.getSeconds())} ${padL(dt.getHours() > 12 ? "pm" : "am")}`;
    let data = {
      category: state.category,
      type: state.type,
      validFrom: state.validFrom,
      validTo: state.validTo,
      id: generateRandomId(),
      message: state.message,
      value: state.category === "Rs_ off on purchases above Rs_" ? state.discount_of + "*" + state.above_rs : state.value,
      eventTimeStamp: time,
      totalRedeemedCoupon: 0,
      eventTimeStampId: Date.now().toString(),
      retailers: [],
      coupons: []
    };
    createNewPromotion(data, data.id, userId, dispatcher, setIsPromotionCreated);
  }
  useEffect(() => {
    if (isPromotionCreated) {
      route.push("/mypromos")
    }
  }, [route,isPromotionCreated])
  useEffect(()=>{
    if(tosterData.showPopUp)
    {
      setTimeout(()=>{        
        dispatch(toster({msg:"",type:"",showPopUp:false}))
      },2000)
    }
  },[tosterData.showPopUp])
  return (
    <>
      <div className={styles.newPromotion}>
        <h1 className={styles.newPromotion_heading}>Create New Promotion</h1>
        <div className={styles.newPromotion_body}>
          <form onSubmit={handleSubmit} className={styles.promotionForm}>
            <SelectionInput Label="Promotion Category" Name="Promotion_category" types={categories} dispatch={dispatch} State={""} />
            {state.category!=="Brand promotion"?
            <>
              <SelectionInput Label="Promotion Type" Name="Promotion_type" types={promtionType} dispatch={dispatch} State={state} />
              {state.category.length>0?state.category!=="Custom message"?state.category!=="_ days free trial"?state?.category !== "Rs_ off on purchases above Rs_" ?
                <Input required={true} Lable="Discount" Type="number" Placeholder={state?.category === "Flat Rs_ Off" ? "Discount(in Rs)" : state?.category === "Flat _% discount" ? "Discount(in %)" : "Discount Price"} dispatch={dispatch} value={state.value} /> :
                <div className={styles.discount_off_onn}>
                  <Input required={true} Lable="Discount (in Rs)" Type="number" Placeholder={"discount of (in rs)"} dispatch={dispatch} value={state.value} />
                  <Input required={true} Lable="Above (in Rs)" Type="number" Placeholder={"Above (in rs)"} dispatch={dispatch} value={state.value} />
                </div>:
                <Input required={true} Lable="Number of Days" Type="number" Placeholder={"type here"} dispatch={dispatch} value={state.value} />:<MessageInput dispatch={dispatch} placeholder='Enter your Message (less then 200 characters)' messageValue={state.message}/>:<></>
              }
            </>:
            <MessageInput dispatch={dispatch} placeholder='Enter your Message (less then 50 characters only)' messageValue={state.message}/>  }
            <div className={styles.date_rangePicker}>
              <p className={styles.validate_picker_label}>Validity</p>
              <DateRangePicker onChange={handleSelect} minDate={new Date()} format='dd/MM/yyyy' className={styles.daterangePicker} required={true} clearIcon={null} value={[values[0], values[1]]} />
            </div>
            <button className={styles.savePromotion}>Save Promotion</button>
          </form>
          <Image src={img} alt="none" />
        </div>
      </div>
    </>
  )
}
