import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Components from "../../components/User/LoginPage/Components.js";
import "../../Assets/LoginPage/Style.css";
import UserInstance from "../../config/Axios.js";

function LoginPage() {
  //useState

  const [signIn, toggle] = React.useState(true);
  const [userName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [UserId, setUserId] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [userIdErr, SetUserIdErr] = useState("");
  const [fillErr, setFillErr] = useState("");
  const [passworderr, setPassErr] = useState("");
  const [UserIdLength, setIdLength] = useState("");
  const [LoginErr, setLoginerr] = useState("");
  const [signin, setsignin] = useState(false);
  const Navigate = useNavigate();

  //UseEffect

  useEffect(() => {
    setIdLength("");
    SetUserIdErr("");
    setEmailErr("");
    setFillErr("");
    setPassErr("");
    setLoginerr("");
  }, [UserId, Email, password, userName]);

  useEffect(() => {
    if (Email.length > 3 && password.length > 5) {
      setsignin(true);
    } else {
      setsignin(false);
    }
  }, [Email, password]);

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setUserName("");
    setUserId("");
  };

  //handling request

  const handleSignUp = (event) => {
    event.preventDefault();

    const lastAtPos = Email.lastIndexOf("@");
    const lastDotPos = Email.lastIndexOf(".");

    if (!(UserId && password && Email && userName)) {
      setFillErr("fill the form");
    } else if (UserId.length < 5) {
      setIdLength("UserId should be at least 5 letters");
    } else if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        Email.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        Email.length - lastDotPos > 2
      )
    ) {
      setEmailErr("email id is not valid");
    } else if (password.length < 6) {
      setPassErr("password must be at least 6 letters");
    } else {
      UserInstance.post("/signup", { userName, Email, password, UserId }).then(
        (data) => {
          if (data.data.User === "UserId_failed") {
            SetUserIdErr("UserId Already Taken");
          } else if (data.data.User === "EmailId_failed") {
            setEmailErr("Email Already Taken");
          } else {
            toggle(true);
            handleReset();
          }
        }
      );
    }
  };

  const SignIn = (event) => {
    event.preventDefault();

    const lastAtPos = Email.lastIndexOf("@");
    const lastDotPos = Email.lastIndexOf(".");

    console.log(Email, password);

    if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        Email.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        Email.length - lastDotPos > 2
      )
    ) {
      console.log("enter valid email");
    } else {
      UserInstance.post("/login", { Email, password })
        .then((data) => {
          console.log(data);
          localStorage.setItem("user", JSON.stringify(data.data.User));
          localStorage.setItem('UserAccessToken',data.data.accessToken)
          Navigate("/home");
        }) 
        .catch((err) => {
          if (err.response.status === 401) {
            setLoginerr("you entered wrong email/password");
            console.log(err);
          } else if (err.response.status === 403) {
            setLoginerr("this account has been banned");
          }
        });
    }
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          {fillErr ? (
            <div className="text-red-500  text-sm animate-bounce-short">
              {fillErr}
            </div>
          ) : (
            <></>
          )}

          <Components.Input
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            placeholder="Name"
          />

          <Components.Input
            value={UserId}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            type="text"
            placeholder="UserId"
          />
          {userIdErr ? (
            <div className="text-red-500  text-sm animate-bounce-short">
              {userIdErr}
            </div>
          ) : (
            <></>
          )}

          {UserIdLength ? (
            <div className="text-red-500  text-sm animate-bounce-short">
              {UserIdLength}
            </div>
          ) : (
            <></>
          )}

          {UserIdLength ? <br /> : <></>}
          {userIdErr ? <br /> : <></>}

          <Components.Input
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          {emailErr ? (
            <div className="text-red-500  text-sm animate-bounce-short">
              {emailErr}
            </div>
          ) : (
            <></>
          )}

          {emailErr ? <br /> : <></>}

          <Components.Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          {passworderr ? (
            <div className="text-red-500  text-sm animate-bounce-short">
              {passworderr}
            </div>
          ) : (
            <></>
          )}

          <Components.Button onClick={handleSignUp}>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          {LoginErr ? (
            <div className="text-red-500  text-sm animate-login-bounce">
              {LoginErr}
            </div>
          ) : (
            <></>
          )}

          <Components.Input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <Components.Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          {signin ? (
            <Components.Button
              className="animate-bounce-short"
              onClick={SignIn}
            >
              Sign In
            </Components.Button>
          ) : (
            <></>
          )}
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
            <Components.GhostButton
              onClick={() => {
                toggle(true);
                handleReset();
              }}
            >
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
            <Components.GhostButton
              onClick={() => {
                toggle(false);
                handleReset();
              }}
            >
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default LoginPage;
