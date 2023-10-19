import '@/styles/globals.css';
import '@/styles/login.css';
import '@/styles/main.css';
import Head from 'next/head';



export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.16.0/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <script src="https://kit.fontawesome.com/d90ef4704f.js" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </>

  )


}
