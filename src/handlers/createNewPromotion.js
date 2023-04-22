import { doc, setDoc, getDoc } from '@firebase/firestore';
import db from '../firebaseConfig/config';
const createNewPromotion = async (testData = {},id="",uid="") => {
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