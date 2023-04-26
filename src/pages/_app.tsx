import '@/styles/globals.scss';
import {useEffect,useState} from 'react';
import type { AppProps } from 'next/app'
import Navbar from '../Components/Navbar/Navbar'
import { checkUserAuth } from '@/handlers/handleAuth'
import { Provider, useDispatch, useSelector } from 'react-redux';
import configureStore from '../../store';
import StatusPopup from '@/Components/StatusPopup';
function App({ Component, pageProps }: AppProps) {
  const [ShowStatusPopup,setShowStatusPopup]=useState<{isShow:boolean,type:string}>({isShow:false,type:""});
  return (
    <Provider store={configureStore}>
      {ShowStatusPopup.isShow?<StatusPopup />:<></>}
      <Navbar setShowStatusPopup={setShowStatusPopup}/>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;