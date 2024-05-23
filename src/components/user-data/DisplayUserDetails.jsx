import React from "react";
import { useSelector } from "react-redux";

// Component for displaying user details
const DisplayUserDetails = ({ count }) => {
  const user = useSelector((state) => state.user); // Get user data from the Redux store
  return (
    <div className="p-4 rounded-lg shadow-md border-2 border-red-400">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <p className="mb-2">
        <span className="font-semibold">Full Name:</span> {user.name}
      </p>
      <p className="mb-2">
        <span className="font-semibold">UID:</span> {user.uid}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Phone No:</span> {user.phoneNo}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Count Value:</span> {count}
      </p>
    </div>
  );
};

export default DisplayUserDetails;
