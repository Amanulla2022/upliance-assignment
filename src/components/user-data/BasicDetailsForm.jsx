import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUserData } from "../../store/store";
import { v4 as uuidv4 } from "uuid";

// Component to handle basic user details form
const BasicDetailsForm = ({ setBasicDetailsFilled }) => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const user = useSelector((state) => state.user); // Get user data from the Redux store

  // Local state to manage form inputs
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  // Handler for the left form submission
  const handleLeftFormSubmit = (e) => {
    e.preventDefault();
    const uid = uuidv4(); // Generate a unique ID for the user
    dispatch(saveUserData({ ...user, address, email, phoneNo, uid })); // Save user data to Redux store
    setBasicDetailsFilled(true); // Indicator for basic details filled or not
  };

  return (
    <form onSubmit={handleLeftFormSubmit} className="form-card">
      <div className="form-card-div">
        <label className="form-card-label">Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="form-card-input"
          required
        />
      </div>
      <div className="form-card-div">
        <label className="form-card-label">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-card-input"
          required
        />
      </div>
      <div className="form-card-div">
        <label className="form-card-label">Phone Number:</label>
        <input
          type="tel"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          className="form-card-input"
          required
        />
      </div>
      <button type="submit" className="form-buttons">
        Save
      </button>
    </form>
  );
};

export default BasicDetailsForm;
