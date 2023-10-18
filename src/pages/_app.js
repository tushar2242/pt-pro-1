import '@/styles/globals.css';
import '@/styles/login.css';
import '@/styles/main.css';
import Head from 'next/head';



export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/d90ef4704f.js" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </>

  )


}
