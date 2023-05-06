import React from 'react'
import styles from '@/styles/toster.module.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch, useSelector } from 'react-redux';
import { toster } from '../../../action';
export default function Toster() {
  const tosterData=useSelector((state:{rootReducer:{storeData:{toster:any}}})=>state.rootReducer.storeData.toster)
  const dispatch=useDispatch()
  const tosterLs=()=>{
    dispatch(toster({msg:"Successfully Logged In",type:"Success",showPopUp:!tosterData.showPopUp}))
  }
  return (
    <>
        <div onClick={tosterLs} className={styles.toster_Main} style={tosterData.showPopUp?tosterData.type==="Success"?{backgroundColor:"green",padding:"0 2rem"}:{backgroundColor:"red",padding:"0 2rem"}:{width:"0px"}}>
            { tosterData.type==="Success"?
              <CheckCircleIcon className={styles.tosterSuccessIcon} style={tosterData.showPopUp?{display:"block"}:{display:"none"}} />:
              <CancelIcon className={styles.tosterFailedIcons} style={tosterData.showPopUp?{display:"block"}:{display:"none"}}/>                
            }
            <div className={styles.toster_body}>
                <h3 className={styles.toster_heading}>{tosterData.type}</h3>
                <p className={styles.toster_description}>{tosterData.msg}</p>
            </div>
        </div>
    </>
  )
}
