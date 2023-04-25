import { doc, runTransaction,collection } from "firebase/firestore";
import { db } from '../firebaseConfig/config.js'
const validateCoupon = async (uid:string,promotionId:string,couponCode:string,setIsRedeemed:Function) => {
    const readDoc =  doc(db, "promoter", uid , "promotion" , promotionId);
    try {
        const newPopulation = await runTransaction(db, async (transaction) => {
            const sfDoc = await transaction.get(readDoc);
            if (!sfDoc.exists()) {
                throw "Document does not exist!";
            }
            let data=sfDoc.data();
            let coupons=data.coupons;
            if(coupons.length>0)
            {
                let newCouponList:any=[];
                coupons.map((item:any)=>{
                    item.couponId===couponCode?newCouponList.push({...item,redeemed:true}):newCouponList.push(item);
                })
                transaction.update(readDoc, {coupons:newCouponList});
                setIsRedeemed(true);
                return
            }
            else{
                console.log("No Coupon Code Avilable")
            }
        });

        console.log("Population increased to ", newPopulation);
    } catch (e) {
        // This will be a "population is too big" error.
        console.error(e);
    }
}
export default validateCoupon;