import React from 'react'
import '../styles/auth.css';
import '../styles/bubble-anim.css'
import { Link } from 'react-router-dom';

function CreateAccount() {
  document.title = 'Login';

  return (
    <div>
      <div className="layout" style={{textAlign:"center"}}>
        <div className="bubbles">
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
        </div>
        <div className='frostview'>
          <h1
            className="light-300 line-no-gap size-large no-zone"
          >
            Already Have <br/> An Acoount?
            <br />
          </h1>
          <p className='light-100' style={{ opacity: "0.8", margin: "15px 0" }}>Welcome back to the space where efficient meets innovation</p>
          <div className='form-cont'>
            <div className="flex-col justify form" style={{ width: "100%" }}>
              <input
                type="email"
                placeholder="Email"
                id="edittext-email"
                className="smooth"
              />
              <input
                type="password"
                placeholder="Password"
                id="edittext-password"
                className="smooth"
              />
              <button className="btn-primary smooth pointer" style={{ marginTop: 20 }}>
                Login
              </button>
              <Link to='/auth/create-account'>
                <button
                  className="btn-secondary smooth pointer"
                  style={{ background: "transparent" }}
                >
                  New to FrozFlow?
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>


  )
}

export default CreateAccount
