import { doc, setDoc, getDoc } from '@firebase/firestore';
import db from '../firebaseConfig/config';
import generateRandomId from './generateRandomId';
const createNewPromotion = async (testData = {},id="") => {
  const writeDoc = doc(db, `promoter/mWRZ4y4oraOL2QuW6fG9/promotion`,id);
  try {
      let data = await setDoc(writeDoc, { ...testData })
      console.log(data);
  }
  catch (err) {
    console.log(err);
  }
}
export default createNewPromotion;    