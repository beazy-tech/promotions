import '@/styles/globals.scss';
import {useEffect,useState} from 'react';
import type { AppProps } from 'next/app'
import Navbar from '../Components/Navbar/Navbar'
import { checkUserAuth } from '@/handlers/handleAuth'
import { Provider, useDispatch, useSelector } from 'react-redux';
import configureStore from '../../store';
import StatusPopup from '@/Components/StatusPopup';
import Toster from '@/Components/Toster/Toster';
function App({ Component, pageProps }: AppProps) {
  const [ShowStatusPopup,setShowStatusPopup]=useState<{isShow:boolean,type:string}>({isShow:false,type:""});
  const [showToster,setShowToster]=useState(false);
  console.log(showToster);
  
  return (
    <Provider store={configureStore}>
      {ShowStatusPopup.isShow?<StatusPopup />:<></>}
      <Navbar setShowToster={setShowToster} showToaster={showToster}/>
      {showToster?<Toster/>:<></>}
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;