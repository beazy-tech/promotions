import { doc, setDoc, getDoc } from '@firebase/firestore';
import db from '../firebaseConfig/config';
const createPromoterAccount = async (testData = {},id) => {
  const readDoc = doc(db, `promoter/${id}`);
  const writeDoc = doc(db, `promoter`,id);
  try {
    const data = await getDoc(readDoc);
    if (data.exists()) {
      console.log("customer already avilable");
    }
    else if (testData.mobile) {
      let data = await setDoc(writeDoc, { ...testData, id })
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