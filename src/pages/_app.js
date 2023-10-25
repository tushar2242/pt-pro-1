import '@/styles/globals.css';
import '@/styles/login.css';
import '@/styles/main.css';
import Head from 'next/head';
import '@/styles/newitem.css';
import '@/styles/datatable.css'



export default function App({ Component, pageProps }) {
  return (
    <>
     
      <Component {...pageProps} />
    </>

  )


}
