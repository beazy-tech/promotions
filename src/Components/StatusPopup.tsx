import {useState,useEffect} from 'react'
import styles from '@/styles/statusPopup.module.scss'
import Image from 'next/image'
import successLogo from '../utils/35f323bc5b41dc4269001529e3ff1278.gif'
import ProgressBar from "@ramonak/react-progress-bar";
import { useDispatch } from 'react-redux';
import { showPopUp } from '../../action';
export default function StatusPopup() {
  const [completed,setCompleted]=useState(100);
  const dispatch=useDispatch();
  let count=100;
  useEffect(()=>{
    const interval = setInterval(() => {
      count-=5;
      setCompleted(count-5)
      if(count == 0) {
        dispatch(showPopUp([false,""]))
        clearInterval(interval);
      }
  }, 100);
  return ()=>clearInterval(interval)
  },[])
  return (
    <>
    <div className={styles.statuspopup}>
      <div className={styles.statuspopup_body}>
        <Image className={styles.status_logo} src={successLogo} alt="none"/>
        <p className={styles.status_type}>Success</p>
      <ProgressBar completed={completed} className={styles.progressBar} isLabelVisible={false} height="4px" borderRadius="10px" transitionDuration='none'/>
      </div>
    </div>
    </>
  )
}
