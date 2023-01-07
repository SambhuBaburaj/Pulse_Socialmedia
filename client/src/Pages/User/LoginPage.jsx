import React, { useState } from "react";
import * as Components from "../../components/User/LoginPage/Components.js";
import "../../Assets/LoginPage/Style.css";
import UserInstance from "../../config/Axios.js";
function LoginPage() {
  const [signIn, toggle] = React.useState(true);
const [userName,setUserName]=useState('');
const [Email,setEmail]=useState('');
const [password,setPassword]=useState('');


const handleSignUp=(event)=>
{
  event.preventDefault()

UserInstance.post('/signup',{userName,Email,password}).then((data)=>
{
  console.log('vfedfhvi');
})

}
const handleReset=()=>{
  setEmail('')
  setPassword('')
  setUserName('')
}


  return (
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input  value={userName} onChange={(e)=>{setUserName(e.target.value)}} type="text" placeholder="Name" />
          <Components.Input value={Email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" />
          <Components.Input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
          <Components.Button onClick={handleSignUp}>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" />
          <Components.Input  type="password" placeholder="Password" />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          {/* <Components.Title className='text-emerald-300  italic  text-2xl align-text-top '>Pulse</Components.Title> */}

          <Components.Title className="text-emerald-300  italic  text-4xl align-text-top  pl-28 pt-8 animate-pulse">
            Pulse
          </Components.Title>

          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => {toggle(true);handleReset()} }>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title className="text-emerald-300  italic  text-4xl align-text-top animate-pulse">
              Pulse
            </Components.Title>

            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default LoginPage;
