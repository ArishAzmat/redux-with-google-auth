import React from 'react'
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { connect } from 'react-redux';

function googleAuth(props) {
    const login = (respoonse)=>{
        console.log(respoonse.profileObj)
        props.dispatch({
          type:'LOGIN',
          payload:respoonse.profileObj
        })
      }
      const logout =(res)=>{
        alert('logged out..',res)
        props.dispatch({
            type:'LOGIN',
            payload:''
          })
      }
    return (
        <div>
              <GoogleLogin
        clientId='686619883448-ltju3kbh1o2nmko9tco4h319b5ji7pgp.apps.googleusercontent.com'
        buttonText="Login"
        onSuccess={login}
        onFailure={login}
        cookiePolicy={'single_host_origin'}
      />
      <GoogleLogout
        clientId='686619883448-ltju3kbh1o2nmko9tco4h319b5ji7pgp.apps.googleusercontent.com'
        buttonText='logout'
        onLogoutSuccess={logout}
      />
      <h1>
        {props?.user && 
        <div>
          welcome {props.user.givenName}
          {/* <img src={props.user.imageUrl}/> */}
        </div>}
      </h1>
        </div>
    )
}

export default connect(function(state,props){
    return {
        user:state?.user
    }
  })(googleAuth);