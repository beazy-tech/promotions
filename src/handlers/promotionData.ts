import { doc, getDocs,collection } from '@firebase/firestore';
import {db} from '../firebaseConfig/config';
const promotionData = async (uid:string,setPromotionInfo:Function) => {
  const readDoc = collection(db, `promoter/${uid}/promotion`);
  try {
    const docsSnap = await getDocs(readDoc);
    let data:Array<object>=[]
    docsSnap.forEach(async doc => {
        data.push(doc.data());
    })
    setPromotionInfo(data)
        
  }
  catch (err) {
    console.log(err);
  }
}
export default promotionData;

// import db from '../firebaseConfig/config';
// import {useCollectionData} from 'react-firebase-hooks/firestore'
// import { collection } from '@firebase/firestore';
// const promotionData=(uid:string)=>{
//     const query=collection(db,`promoter/${uid}/promotion`)
//     return useCollectionData(query);
// }
// export default promotionData;