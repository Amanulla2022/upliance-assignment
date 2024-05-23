import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUserData } from "../../store/store";
import { useNavigate } from "react-router-dom";

// Component to handle full name form
const FullForm = ({ basicDetailsFilled }) => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const user = useSelector((state) => state.user); // Get user data from the Redux store
  const navigate = useNavigate(); // Get the navigate function from react-router-dom
  const [unSavedChanges, setUnSavedChanges] = useState(false);
  // Local state to manage form inputs
  const [name, setName] = useState(user.name);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (unSavedChanges) {
        const message = "Changes you made may not be saved.";
        event.returnValue = message;
        return message;
      }
    };

    window.onbeforeunload = handleBeforeUnload;

    return () => {
      window.onbeforeunload = null;
    };
  }, [unSavedChanges]);

  // Handler for the right form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (basicDetailsFilled) {
      dispatch(
        saveUserData({
          address: user.address,
          email: user.email,
          phoneNo: user.phoneNo,
          name,
          uid: user.uid,
        })
      ); // Save user data to Redux store
      setUnSavedChanges(false); // Reset unsaved changes state after saving
      navigate("/counter"); // Navigate to the counter page
    } else {
      alert("First fill address, phone number and save"); // Show alert if basic details are not filled
    }
  };

  const handleInputChange = (e) => {
    // Track changes in the form inputs
    setName(e.target.value);
    setUnSavedChanges(true);
    // Your existing input change logic
  };

  return (
    <form onSubmit={handleFormSubmit} className="form-card">
      <div className="bg-gray-200 p-2">
        <p className="form-card-label">Email: {user.email}</p>
        <p className="form-card-label">Address: {user.address}</p>
        <p className="form-card-label">Phone Number: {user.phoneNo}</p>
      </div>
      <div className="form-card-div">
        <label className="form-card-label">Full Name:</label>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          className="form-card-input"
          required
        />
      </div>
      <p className="form-card-label bg-gray-200 p-2">Uid: {user.uid}</p>
      <button type="submit" className="form-buttons">
        Save
      </button>
    </form>
  );
};

export default FullForm;
