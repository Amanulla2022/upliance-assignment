import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { saveUserData } from "../../store/store";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Save user details to Redux store
        dispatch(saveUserData({ email: user.email, name: user.displayName }));
        console.log("Singed in user: ", user);
        // Navigate to user page upon successful sign-in
        navigate("/user");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="form-parent">
      <div className="form-child">
        <h1 className="form-h1">Sign In Page</h1>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="form-card-label underline"
            style={{ textDecorationColor: "green" }}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="form-input"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="form-card-label underline"
            style={{ textDecorationColor: "green" }}
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a strong password"
            className="form-input"
          />
        </div>
        <button className="sign-btn" onClick={handleLogin}>
          Log In
        </button>
        <p>
          don't have an account create?
          <Link to="/" className="text-red-500 ml-1 underline">
            signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
