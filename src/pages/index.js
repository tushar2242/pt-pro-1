import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import logo from '../images/logo.jpg'
import axios from 'axios';
import { useRouter } from 'next/router';
import Loader from '../helpers/Loader';
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })
var url = process.env.PUBLIC_URL





export default function Home() {
  // console.log(logo)
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}

      </Head>
      <Login />
    </>
  )
}


const Login = () => {

  const [username, setUsername] = useState('alok.sahu@newworldtrending.com');
  const [password, setPassword] = useState('q~y,sc(QQ@nS');

  const [isLoad, setLoad] = useState(false)
  const route = useRouter()

  async function handleLogin(e) {
    e.preventDefault();
    const formdata = {
      'email':username,
      'password':password
    }


    try {
      const loginRes = await axios.post('https://api.newworldtrending.com/blog/auth/login', formdata)
       console.log(loginRes.data)

      if (loginRes.data.message === 'Login Successful') {
        // console.log(loginRes)
        sessionStorage.setItem("email",loginRes.data.userEmail)
        sessionStorage.setItem("userId",loginRes.data.userId)
        setLoad(true)
        route.push('/blog/new-blog')
      }
    }
    catch (err) {
      console.log(err)
    }

  }


  return (
    <>

      {isLoad &&
        <Loader />}

      <div className="login-container mt-4">


        <div className="rown" style={{ overflow: 'hidden' }}>
          <div className="col-md-12 d-flex flex-column align-items-center justify-content-center" style={{ padding: '10px !important' }}>


            <div className="card mb-3">

              <div className="card-body">

                <div className=" d-flex justify-content-center">

                  <Image src={logo} alt="Logo" width={150} height={150} />


                </div>
                <div className="pt-4 pb-2">
                  <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                  <p className="text-center" >Enter your username & password to login</p>
                </div>

                <form onSubmit={handleLogin} method='post' className="row g-3 needs-validation" >

                  <div className="col-12">
                    <label htmlFor="yourUsername" className="form-label">Username</label>
                    <div className=" has-validation">
                      {/* <span className="input-group-text" id="inputGroupPrepend"><i className="bi bi-person"></i></span> */}
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        id="yourUsername"
                        required
                        value={username}
                        onChange={(e) => { setUsername(e.target.value) }}
                      />
                      <div className="invalid-feedback">Please enter your username.</div>
                    </div>
                  </div>

                  <div className="col-12 mb-4 ">
                    <label htmlFor="yourPassword" className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="yourPassword"
                      required
                      value={password}
                      onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <div className="invalid-feedback">Please enter your password!</div>
                  </div>
                  <br />

                  <div className="w-100">
                    <button className="btn btn-primary login-btn" type="submit">Login</button>
                  </div>
                  {/* <div className="col-12">
                        <p className="small mb-0">Don't have account? <Link to="/signup">Create an account</Link></p>
                      </div> */}
                </form>

              </div>
            </div>

            {/* <div className="credits">
                    Designed by <Link to="#"> DMJ Admin </Link>
                  </div> */}

          </div>
        </div>
      </div>

    </>
  )
}