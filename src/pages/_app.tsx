import '@/styles/globals.scss';
import {useEffect} from 'react';
import type { AppProps } from 'next/app'
import Navbar from '../Components/Navbar/Navbar'
import { checkUserAuth } from '@/handlers/handleAuth'
import { wrapper } from "../../store/store";
import { useDispatch } from 'react-redux';
function App({ Component, pageProps }: AppProps) {
  const dispatch=useDispatch();
  useEffect(()=>{
    checkUserAuth(dispatch);
  })
  return <>
    <Navbar/>
    <Component {...pageProps} />
  </>
}
export default wrapper.withRedux(App);
