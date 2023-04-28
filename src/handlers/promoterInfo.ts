import { doc, setDoc, getDoc } from '@firebase/firestore';
import {db} from '../firebaseConfig/config';
import { businessDetails } from '../../action';
const promoterInfo = async (uid:string,dispatch:Function) => {
  const readDoc = doc(db, `promoter/${uid}`);  
  try {
    const data = await getDoc(readDoc);
    if (data.exists()) {
      dispatch(businessDetails(data.data()));
    }
    else {
      console.log("some error occured");
    }
  }
  catch (err) {
    console.log(err);
  }
}
export default promoterInfo;    