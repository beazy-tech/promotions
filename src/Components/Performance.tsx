type promotion= {
  category: string,
  coupons: Array<any>;
  eventTimeStamp: string;
  eventTimeStampId: string;
  id: string;
  message: string;
  retailers: Array<any>,
  totalRedeemedCoupon: number,
  type: string,
  validFrom: string,
  validTo: string,
  value: string;
}
import {useState,useEffect} from "react";
import styles from "../styles/performance.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
interface props{
  setShowPromotion:Function,
  showPromotion:{
    show:boolean,
    id:string
  }
}
let initailData:promotion={
    category: "",
    coupons: [],
    eventTimeStamp: "",
    eventTimeStampId: "",
    id: "",
    message: "",
    retailers: [],
    totalRedeemedCoupon: 0,
    type: "",
    validFrom: "",
    validTo: "",
    value: ""
}
export default function Performance({showPromotion,setShowPromotion}:props) {
  const PromotionsInfo=useSelector((state:{rootReducer:{storeData:{promotionInfo:any}}})=>state.rootReducer.storeData.promotionInfo);
  const [performanceData,setPreformanceData]=useState<Array<promotion>>([])
  useEffect(()=>{
    if(PromotionsInfo.length>0)
    {
      setPreformanceData(PromotionsInfo.filter((item:promotion)=>item.id===showPromotion.id))
    }
  },[PromotionsInfo])  
  return (
    <>
      <div className={styles.performancePage}>
        <div className={styles.performancePage_body}>
          <h2 className={styles.performancePage_heading}>Performance</h2>
          <ul className={styles.performancePage_Items}>
            <li>
              Number of Stores running this promotions: <b>{performanceData[0]?.retailers?.length}</b>
            </li>
            <li>
              Recipts with promotion printed: <b>{performanceData[0]?.coupons?.length}</b>
            </li>
            <li>
              Coupon code redeemed: <b>{performanceData[0]?.totalRedeemedCoupon}</b>
            </li>
          </ul>
          <button onClick={()=>setShowPromotion({show:false,id:""})} className={styles.prefomancePage_close}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </>
  );
}
