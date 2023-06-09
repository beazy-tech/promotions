import { doc, runTransaction,collection } from "firebase/firestore";
import { db } from '../firebaseConfig/config'
import { toster } from "../../action";
const validateCoupon = async (uid:string,promotionId:string,couponCode:string,setIsRedeemed:Function,dispatch:Function) => {
    const readDoc =  doc(db, "promoter", uid , "promotion" , promotionId);
    try {
        const newPopulation = await runTransaction(db, async (transaction) => {
            const sfDoc = await transaction.get(readDoc);
            if (!sfDoc.exists()) {
                throw "Document does not exist!";
            }
            let data=sfDoc.data();
            let coupons=data.coupons;
            let totalRedeemedCoupon=data.totalRedeemedCoupon;
            if(coupons.length>0)
            {
                let newCouponList:any=[];
                coupons.map((item:any)=>{
                    item.couponId===couponCode?newCouponList.push({...item,redeemed:true}):newCouponList.push(item);
                })
                transaction.update(readDoc, {coupons:newCouponList,totalRedeemedCoupon:totalRedeemedCoupon+1});
                setIsRedeemed(true);
                dispatch(toster({msg:"Coupon Code Verified",type:"Success",showPopUp:true}))
                return
            }
            else{
                dispatch(toster({msg:"Coupon Code is Invalid",type:"Failure",showPopUp:true}))
                console.log("No Coupon Code Avilable")
            }
        });
    } catch (e) {
        // This will be a "population is too big" error.
        console.error(e);
        dispatch(toster({msg:"Some error Occured",type:"Failure",showPopUp:true}))
    }
}
export default validateCoupon;