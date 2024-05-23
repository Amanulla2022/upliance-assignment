import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { saveUserData } from "../../store/store";
import { useDispatch } from "react-redux";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // Use Firebase authentication service to create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(saveUserData({ email, name })); // Save user details to Redux store
      console.log("Sign up user", user);
      // Navigate to sign-in page upon successful sign-up
      navigate("/signin");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      dispatch(saveUserData({ email: user.email, name: user.displayName }));
      console.log("Sign in with Google user", user);
      // Navigate to user page
      navigate("/user");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="form-parent">
      <div className="form-child">
        <h1 className="form-h1">Create new account</h1>
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
        <div className="mb-4">
          <label
            htmlFor="name"
            className="form-card-label underline"
            style={{ textDecorationColor: "green" }}
          >
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
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
        <button className="sign-btn" onClick={handleSignUp}>
          Sign Up
        </button>

        <div
          onClick={handleSignInWithGoogle}
          className="flex gap-4 items-center justify-center cursor-pointer bg-gray-200 p-1 mb-2"
        >
          <FcGoogle className="h-8 w-8" />
          <p>signin with google account</p>
        </div>
        <p>
          already have an account?
          <Link to="/signin" className="text-red-500 ml-1 underline">
            signin
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
