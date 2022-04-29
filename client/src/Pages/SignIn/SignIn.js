import React from 'react'
import "./SignIn.css";
function SignIn() {
  return (
    <div className='signin-ctn'>
        <form className='signIn-login'>
            <label>Username</label>
            <input type="text" name="username" id="username" />
            <label>Password</label>
            <input type="password" name="password" id="password" />
            <button>Sign In</button>
        </form>
        <div className='signIn-signup'>
            <label>First Name</label>
            <input type='text'/>
            <label>Last Name</label>
            <input type='text'/>
            <label>Password</label>
            <input type='text'/>
            <label>Confirm Password</label>
            <input type='text'/>
            <label>Desired Username</label>
            <input type='text'/>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default SignIn