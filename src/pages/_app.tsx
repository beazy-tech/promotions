import '@/styles/globals.scss';
import {useEffect,useState} from 'react';
import type { AppProps } from 'next/app'
import Navbar from '../Components/Navbar/Navbar'
import { checkUserAuth } from '@/handlers/handleAuth'
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../../store';
import StatusPopup from '@/Components/StatusPopup';
import Toster from '@/Components/Toster/Toster';
import BusinessProfile from '@/Components/BusinessProfile';
import { doesNotMatch } from 'assert';
import { Router } from 'next/router';
function App({ Component, pageProps }: AppProps) {
  const [ShowStatusPopup,setShowStatusPopup]=useState<{isShow:boolean,type:string}>({isShow:false,type:""});
  const [showToster,setShowToster]=useState(false);
  const [showProfile,setShowProfile]=useState(false);
  return (
    <Provider store={store}>
      {ShowStatusPopup.isShow?<StatusPopup />:<></>}
      <Navbar setShowToster={setShowToster} showToaster={showToster} setShowProfile={setShowProfile}/>
      {showToster?<Toster/>:<></>}
      <Component {...pageProps}/>
      <Toster/>
      {showProfile?<BusinessProfile/>:<></>}
    </Provider>
  );
}

export default App;