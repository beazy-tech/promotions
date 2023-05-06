import { useState,useEffect } from 'react';
import styles from '@/styles/mypromos.module.scss';
import Image from 'next/image';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import promoterInfo from '@/handlers/promoterInfo';
import promotionData from '@/handlers/promotionData';
import CouponVerification from './CouponVerification';
import AddIcon from '@mui/icons-material/Add';
import { isPast} from 'date-fns';
import { showProfile } from '../../action';
interface data{
    datas:any,
    loading:boolean,
    error:object
}
interface promoterInfo{
    category:string,
    coupons: Array<any>,
    eventTimeStamp:string, 
    eventTimeStampId:string,
    id:string,
    message:string,
    retailers:Array<any>,
    totalRedeemedCoupon:number,
    type:string,
    validFrom:string,
    validTo:string,
    value:string,
}

export default function Mypromos() {
    const [IsActiivePromoActive, setIsActiivePromoActive] = useState(true);
    const [PromotionsInfo,setPromotionsInfo]:[Array<any>,Function]=useState([])
    const [TableData,setTableData]:[Array<any>,Function]=useState([]);
    const userId=useSelector((state:{rootReducer:{storeData:{userId:string}}})=>state.rootReducer.storeData.userId);
    const [showVerificationComponent,setshowVerificationComponent]=useState(false);
    const [promotionId,setpromotionId]=useState("")
    const [showTableData,setShowTableData]:[Array<any>,Function]=useState([])
    const businessDetails=useSelector((state:{rootReducer:{storeData:{businessDetails:any}}})=>state.rootReducer.storeData.businessDetails)
    const dispatch=useDispatch()    
    function createData( PromoDate: string, Name: string ,validFrom:string,validTo:string,promotionId:string,message:string) {
        return {PromoDate, Name, validFrom,validTo,promotionId,message};
    }
    useEffect(()=>{
        
        let rows:Array<{Name:string}>=[]
        if(PromotionsInfo?.length>0)
        {
            showTableData.map((promotiondata:promoterInfo,count:number)=>{                
                let strArr:Array<string>=promotiondata?.category?.split("_");                
                let name=strArr?.length===3?`${strArr[0]} ${promotiondata?.value?.split("*")[0]} ${strArr[1]} ${promotiondata?.value?.split("*")[1]}`:strArr.length===2?promotiondata.category!=="_days free trial"?`${strArr[0]} ${promotiondata?.value}${strArr[1]}`:`${promotiondata?.value} ${strArr[1]}`:promotiondata?.category
                rows.push(createData(promotiondata?.eventTimeStamp,name ,promotiondata.validFrom,promotiondata?.validTo,promotiondata.id,promotiondata.message))
            })
        }
        setTableData(rows);
    },[showTableData])
    useEffect(()=>{
        if(userId.length>0)
        {
            promotionData(userId,setPromotionsInfo)
        }
    },[userId])
    
    const selectPromotion=(promotionId:string)=>{
        setshowVerificationComponent(!showVerificationComponent)
        setpromotionId(promotionId)
    }
    
    useEffect(()=>{
        let data:Array<any>=[];
        if(IsActiivePromoActive)
        {
            PromotionsInfo.map((promoData:any,count:number)=>{
                let ValidDate=promoData.validTo.split("/");
                ValidDate=new Date(ValidDate[2]+"-"+ValidDate[1]+"-"+ValidDate[0]);
                if(!isPast(ValidDate))
                {
                    data.push(promoData);
                }
            })
            console.log(data)
        }
        else{
            PromotionsInfo.map((promoData:any,count:number)=>{
                let ValidDate=promoData.validTo.split("/");
                ValidDate=new Date(ValidDate[2]+"-"+ValidDate[1]+"-"+ValidDate[0]);
                if(isPast(ValidDate))
                {
                    data.push(promoData);
                }
            })
            console.log(data);
            
        }
        setShowTableData(data)
    },[PromotionsInfo,IsActiivePromoActive])
    const profilePage=()=>{
        dispatch(showProfile(true));
    }
    return (
        <>
            <div className={styles.mypromos}>
                {showVerificationComponent?<CouponVerification promotionId={promotionId} setshowVerificationComponent={setshowVerificationComponent} showVerificationComponent={showVerificationComponent} />:<></>}
                <div className={styles.mypromos_head}>
                    <h1 className={styles.myPromos_head_heading}>My Promotions</h1>
                    <ol className={styles.myPromos_head_right}>
                        <li className={styles.myPromos_head_right_item}>
                            <Link href="/newpromo"><button className={styles.myPromos_head_right_btn}><AddIcon/>Create new promotion</button></Link>
                        </li>
                        <li className={styles.myPromos_head_right_item}>
                            <button className={styles.business_Profile_btn} onClick={profilePage}><Image className={styles.myPromos_head_img} src={businessDetails.logo} alt="none" width={100} height={100} /></button>
                        </li>
                    </ol>
                </div>
                <div className={styles.mypromos_body}>
                    <div className={styles.mypromos_body_head}>
                        <button onClick={() => setIsActiivePromoActive(true)} className={IsActiivePromoActive ? styles.mypromos_body_head_btn_active : styles.mypromos_body_head_btn}>Active Promotions</button>
                        <button onClick={() => setIsActiivePromoActive(false)} className={!IsActiivePromoActive ? styles.mypromos_body_head_btn_active : styles.mypromos_body_head_btn}>Past Promotions</button>
                    </div>
                    <div className={styles.mypromos_body_main}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow sx={{fontWeight:"800"}}>
                                        <TableCell sx={{fontWeight:"900"}}>Name</TableCell>
                                        <TableCell sx={{fontWeight:"900"}} align="center">Promo date</TableCell>
                                        <TableCell sx={{fontWeight:"900"}} align="center">Promo Validity</TableCell>
                                        <TableCell sx={{fontWeight:"900"}} align="center">Performance</TableCell>
                                        <TableCell sx={{fontWeight:"900"}} align="center">Validate</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {TableData.map((row,count) => (
                                        <TableRow
                                            key={count}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.message.length>0?row.message:row.Name}
                                                {/* {row.Name} */}
                                            </TableCell>
                                            <TableCell align="center">{row.PromoDate}</TableCell>
                                            <TableCell align="center">{row.validTo} - {row.validFrom}</TableCell>
                                            <TableCell align="center" sx={{paddingRight:'45px'}}><button className={styles.validate_info_graph}><TrendingUpIcon/></button></TableCell>
                                            <TableCell align="center"><button onClick={()=>selectPromotion(row.promotionId)}  className={styles.validate_info}>Click Here</button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </>
    )
}   