import { doc, setDoc, getDoc } from '@firebase/firestore';
import {db} from '../firebaseConfig/config';
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
      eventTimeStampId:number,
      retailers:Array<any>,
      coupons:Array<any>
}
const createNewPromotion = async (testData:datatype,id:string,uid:string) => {
  const writeDoc = doc(db, `promoter/${uid}/promotion`,id);
  try {
      let data = await setDoc(writeDoc, { ...testData })
      console.log(data);
  }
  catch (err) {
    console.log(err);
  }
}
export default createNewPromotion;    