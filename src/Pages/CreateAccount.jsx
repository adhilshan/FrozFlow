import React from 'react'
import '../styles/auth.css';
import { Link } from 'react-router-dom';
import '../styles/bubble-anim.css';

function CreateAccount() {
  document.title = 'Create Account';

  return (
    <div>
      <div className="layout">
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
        <div className='frostview' style={{textAlign:"center"}}>
          <h1
            className="light-300 line-no-gap size-large no-zone"
          >
            Get Started With
            <br />
            <b className="size-larger">FrozFlow</b>
          </h1>
          <p className='light-100' style={{ opacity: "0.8", margin: "15px 0" }}>Welcome to a space where efficient meets innovation</p>
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
              <input
                type="password"
                placeholder="Confirm Password"
                id="edittext-confirm-password"
                className="smooth"
              />
              <label htmlFor="edittext-password"
                className='light-100'
                style={{ color: "white", fontSize: "13px" }}
              >
                Remember the password , helpfull when login next time</label>
              <button className="btn-primary smooth pointer" style={{ marginTop: 20 }}>
                Create Account
              </button>
              <Link to='/auth/login'>
                <button
                  className="btn-secondary smooth pointer"
                  style={{ background: "transparent" }}
                >
                  Already Have Account?
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
