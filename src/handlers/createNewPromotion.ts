import { doc, setDoc, getDoc } from '@firebase/firestore';
import {db} from '../firebaseConfig/config';
import { toster } from '../../action';
interface datatype{
  category:string,
      type:string,
      validFrom:string,
      validTo:string,
      id:string,
      message:string,
      value:string,
      eventTimeStamp:string,
      totalRedeemedCoupon:number,
      eventTimeStampId:string,
      retailers:Array<any>,
      coupons:Array<any>
}
const createNewPromotion = async (testData:datatype,id:string,uid:string,dispatcher:Function,setIsPromotionCreated:Function) => {
  const writeDoc = doc(db, `promoter/${uid}/promotion`,id);
  try {
      let data = await setDoc(writeDoc, { ...testData })
      // dispatcher(toster(data:{msg:"Promotion Created Successfully", type:"Success", showPopUp:true}))
      setIsPromotionCreated(true);
  }
  catch (err) {
    console.log(err);
  }
}
export default createNewPromotion;    