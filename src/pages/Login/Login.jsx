import React from 'react'
import './Login.css'
import logo from '../../asset/tego.png'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <div className='container'>
            <img src={logo} alt='/'/>
            <div className='container1'>
                <h1>Welcome back to TEGO</h1>
                <p>Please enter your email address or phone number and password  to  access your account</p>

                <form>
                    <input className="input" type='email' placeholder="Email Address / Phone Number" /> <br/>

                    <input  className="input" type='password' placeholder="Password" /> <br/>
                    
                    <div className='checkbox'>
                        <label>
                            <input style={{radius: "100px"}} className="check" type="checkbox" name="remember"/> Remember me
                        </label>
                        <Link to='/signup'>
                            <span>Forgot Password</span>
                        </Link>
                    </div>
                </form>
                <button className='btn '>Login</button>
            </div>
        </div>
        
    </div>
  )
}

export default Login