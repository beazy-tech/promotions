import { useState,useEffect } from 'react';
import styles from '@/styles/mypromos.module.scss';
import Logo from '@/utils/Beazy-Logo-image.svg'
import Image from 'next/image';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useSelector } from 'react-redux';
import promoterInfo from '@/handlers/promoterInfo';
import promotionData from '@/handlers/promotionData';
import CouponVerification from './CouponVerification';
interface data{
    datas:any,
    loading:boolean,
    error:object
}
export default function Mypromos() {
    const [IsActiivePromoActive, setIsActiivePromoActive] = useState(true);
    const [PromoterData,setPromoterData]:[any,Function]=useState({})
    const [PromotionsInfo,setPromotionsInfo]:[Array<{eventTimeStamp:string,validTo:string}>,Function]=useState([])
    const [TableData,setTableData]:[Array<any>,Function]=useState([]);
    const userId:string=useSelector((state:{userId:{userId:string}})=>state?.userId?.userId);
    const [showVerificationComponent,setshowVerificationComponent]=useState(false);
    const [promotionId,setpromotionId]=useState("")
    function createData( PromoDate: string, Name: string ,Validity:string,promotionId:string) {
        return {PromoDate, Name, Validity,promotionId};
    }
    useEffect(()=>{
        let rows:Array<{Name:string}>=[]
        if(PromotionsInfo.length>0)
        {
            PromotionsInfo.map((promotiondata:any)=>{
                console.log(promotiondata.id);
                rows.push(createData(promotiondata?.eventTimeStamp,PromoterData?.name , promotiondata?.validTo,promotiondata.id))
            })
        }
        setTableData(rows);
    },[PromotionsInfo])
    useEffect(()=>{
        if(userId.length>0)
        {
            promoterInfo(userId,setPromoterData);
            promotionData(userId,setPromotionsInfo)
        }
    },[userId])
    const selectPromotion=(promotionId:string)=>{
        setshowVerificationComponent(!showVerificationComponent)
        setpromotionId(promotionId)
        
    }
    
    return (
        <>
            <div className={styles.mypromos}>
                {showVerificationComponent?<CouponVerification promotionId={promotionId} setshowVerificationComponent={setshowVerificationComponent} showVerificationComponent={showVerificationComponent} />:<></>}
                <div className={styles.mypromos_head}>
                    <h1 className={styles.myPromos_head_heading}>My Promotions</h1>
                    <ol className={styles.myPromos_head_right}>
                        <li className={styles.myPromos_head_right_item}>
                            <button className={styles.myPromos_head_right_btn}>Create new promotion</button>
                        </li>
                        <li className={styles.myPromos_head_right_item}>
                            <Image className={styles.myPromos_head_img} src={Logo} alt="none" />
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
                                        <TableCell sx={{fontWeight:"900"}} align="right">Promo date</TableCell>
                                        <TableCell sx={{fontWeight:"900"}} align="right">Validity</TableCell>
                                        <TableCell sx={{fontWeight:"900"}} align="right">Performance</TableCell>
                                        <TableCell sx={{fontWeight:"900"}} align="right">Validate</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {TableData.map((row,count) => (
                                        <TableRow
                                            key={count}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.Name}
                                            </TableCell>
                                            <TableCell align="right">{row.PromoDate}</TableCell>
                                            <TableCell align="right">{row.Validity}</TableCell>
                                            <TableCell align="right" sx={{paddingRight:'45px'}}><button className={styles.validate_info_graph}><TrendingUpIcon/></button></TableCell>
                                            <TableCell align="right"><button onClick={()=>selectPromotion(row.promotionId)}  className={styles.validate_info}>Click Here</button></TableCell>
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
