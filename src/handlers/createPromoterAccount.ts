import { doc, setDoc, getDoc,updateDoc } from '@firebase/firestore';
import {db} from '../firebaseConfig/config';
import { showPopUp } from '../../action';
import { getStorage, ref } from "firebase/storage";
const createPromoterAccount = async (testData:any = {},id:string,dispatch:Function) => {
  const readDoc = doc(db, `promoter/${id}`);
  const writeDoc = doc(db, `promoter`,id);
  try {
    const data = await getDoc(readDoc);
    if (data.exists()) {
      // let data = await updateDoc(writeDoc, { ...testData,mobile:testData?.mobile?.split("+91")?.length===1?testData?.mobile[0]:testData?.mobile[1] })
      // dispatch(showPopUp([true,"Success"]))
    }
    else if (testData.mobile) {
      
      let data = await setDoc(writeDoc, { ...testData, id ,mobile:testData?.mobile?.split("+91")?.length===1?testData?.mobile[0]:testData?.mobile[1] })
      dispatch(showPopUp([true,"Success"]))
    }
    else {
      return;
    }
  }
  catch (err) {
    console.log(err);
  }
}
export default createPromoterAccount;    