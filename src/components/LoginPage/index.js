import {Component} from 'react'

import { Link } from "react-router-dom";

import './index.css'

class LoginPage extends Component {
 

  render() {
   
    return (
      <div className="container">
         <div className="welcome">
                <h1>Welcome</h1>
         </div>
         <div>
          <p className="para"> Please Enter your Email & Password to sign on.</p>
          <hr
        style={{
         
          color: '#454545',
          borderColor: '#ffffff',
          height: '2px',
        }}
      />
         </div>

         <div className="container-login"> {/* Apply the container class */}
      <div className="conatiner-Email">
        <label htmlFor="email" className="email">
          Email:
        </label>
       
        <input
          type="email"
          id="email"
          placeholder="Enter your email" className="EmailC"
        />
        
      </div>
      <div className="pass">
        <label htmlFor="password" className="email">
          <i className="fa fa-lock"></i> Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password" className="EmailC"
        />
      </div>
    </div>
  
       <div className="Remmber-container">
        <div>
       <input
          type="checkbox"
          id="password"
          
        />
       <label htmlFor="password" className="Remember1">
          <i className="fa fa-lock"></i> Remember me
        </label>
        <p className="FF">Forgot Password</p>
        
       </div>
       </div>

       <hr
        style={{
         
          color: '#454545',
          borderColor: '#ffffff',
          height: '2px',
        }}
      />

      <div className="bt-container">
      <button className="SignBt">    <Link  to="/SinupPage">SinupPage</Link></button>
      </div>

    </div>
  
      
    )
  }
}

export default LoginPage