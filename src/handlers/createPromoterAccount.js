import { doc, setDoc, getDoc } from '@firebase/firestore';
import db from '../firebaseConfig/config';
import generateRandomId from './generateRandomId';
const createPromoterAccount = async (testData = {},) => {
  const uid = generateRandomId();
  const readDoc = doc(db, `promoter/${uid}`);
  const writeDoc = doc(db, `promoter`,uid);
  try {
    const data = await getDoc(readDoc);
    if (data.exists()) {
      console.log("customer already avilable");
    }
    else if (testData.mobile) {
      let data = await setDoc(writeDoc, { ...testData, id: uid })
      console.log(data);
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