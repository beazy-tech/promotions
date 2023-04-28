import React from 'react'
import styles from '@/styles/messageInput.module.scss'
interface initalprops{
  placeholder:string,
  dispatch:Function,
  messageValue:string
}
export default function MessageInput(props:initalprops) {    
  const messageInput=(e:any)=>{
    if(e.target.value.length<=50)
    {
      props.dispatch({type:"MESSAGE",payload:e.target.value});
      props.dispatch({type:"VALUE",payload:""})
    }
  }
  return (
    <>
    <div className={styles.input_message}>
        <label htmlFor="input_text" className={styles.input_label}>Message</label>
        <textarea id="input_text" cols={40} rows={3} placeholder={props.placeholder} className={styles.textarea_input} value={props.messageValue} onChange={messageInput}/>
    </div>
    </>
  )
}
