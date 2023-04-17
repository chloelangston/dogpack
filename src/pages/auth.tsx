import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import { db, auth } from "../../firebase/clientApp";
import { GoogleAuthProvider } from "firebase/auth";

console.log("GoogleAuthProvider: ", GoogleAuthProvider)
const uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [GoogleAuthProvider],
}

const SignInScreen = () => {
  return (
    <div
      style={{
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Dogpack Login</h1>
      <p>Please sign-in</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  )
}

export default SignInScreen;
