import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetUserData, setAuthState } from "../../store/store";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(resetUserData());
      dispatch(setAuthState(false));
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="fixed top-4 right-4 bg-red-500 text-white border-none py-2.5 px-5 text-center cursor-pointer"
    >
      Logout
    </button>
  );
};

export default Logout;
