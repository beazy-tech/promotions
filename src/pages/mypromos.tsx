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
import { userIdInfo } from '../../store/userData';
import promoterInfo from '@/handlers/promoterInfo';
import promotionData from '@/handlers/promotionData';
import db from '@/firebaseConfig/config';
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { collection } from '@firebase/firestore';
interface data{
    datas:any,
    loading:boolean,
    error:object
}
export default function mypromos() {
    const [isActivePromoActive, setIsActivePromoActive] = useState(true);
    const [promoterData,setPromoterData]:[any,Function]=useState({})
    const [promotionInfo,setPromotionInfo]:[Array<{eventTimeStamp:string,validTo:string}>,Function]=useState([])
    const [tableData,setTableData]:[Array<any>,Function]=useState([]);
    const userId:string=useSelector(state=>state?.userId?.userId);
    function createData( PromoDate: string, Name: string ,Validity:string) {
        return {PromoDate, Name, Validity};
    }
    useEffect(()=>{
        let rows:Array<{Name:string}>=[]
        if(promotionInfo.length>0)
        {
            promotionInfo.map((promotiondata)=>{
                rows.push(createData(promotiondata?.eventTimeStamp,promoterData?.name , promotiondata?.validTo))
            })
        }
        setTableData(rows);
    },[promotionInfo])
    useEffect(()=>{
        if(userId.length>0)
        {
            promoterInfo(userId,setPromoterData);
            setPromoterData(promotionData(userId,setPromotionInfo))
        }
    },[userId])
    
    return (
        <>
            <div className={styles.mypromos}>
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
                        <button onClick={() => setIsActivePromoActive(true)} className={isActivePromoActive ? styles.mypromos_body_head_btn_active : styles.mypromos_body_head_btn}>Active Promotions</button>
                        <button onClick={() => setIsActivePromoActive(false)} className={!isActivePromoActive ? styles.mypromos_body_head_btn_active : styles.mypromos_body_head_btn}>Past Promotions</button>
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
                                    {tableData.map((row) => (
                                        <TableRow
                                            key={row.Name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.Name}
                                            </TableCell>
                                            <TableCell align="right">{row.PromoDate}</TableCell>
                                            <TableCell align="right">{row.Validity}</TableCell>
                                            <TableCell align="right" sx={{paddingRight:'45px'}}><button className={styles.validate_info_graph}><TrendingUpIcon/></button></TableCell>
                                            <TableCell align="right"><button className={styles.validate_info}>Click Here</button></TableCell>
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
