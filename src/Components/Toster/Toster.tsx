import React from 'react'
import styles from '@/styles/toster.module.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function Toster() {
  return (
    <>
        <div className={styles.toster_Main}>
            {
                <CheckCircleIcon className={styles.tosterIcon}/>                
            }
            <div className={styles.toster_body}>
                <h3 className={styles.toster_heading}>Success</h3>
                <p className={styles.toster_description}>LogIn Success</p>
            </div>
        </div>
    </>
  )
}
