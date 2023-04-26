import { doc, setDoc, getDoc } from '@firebase/firestore';
import {db} from '../firebaseConfig/config';
const promoterInfo = async (uid:string,setPromoterData:Function) => {
  const readDoc = doc(db, `promoter/${uid}`);
  try {
    const data = await getDoc(readDoc);
    if (data.exists()) {
      setPromoterData(data.data());
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