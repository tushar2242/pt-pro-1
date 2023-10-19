import '@/styles/globals.css';
import '@/styles/login.css';
import '@/styles/main.css';
import Head from 'next/head';



export default function App({ Component, pageProps }) {
  return (
    <>
     
      <Component {...pageProps} />
    </>

  )


}
