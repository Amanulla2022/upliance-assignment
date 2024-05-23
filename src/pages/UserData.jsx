import React from "react";
import UserForm from "../components/user-data/UserForm";
import Logout from "./../components/logout/Logout";

// user page
const UserData = () => {
  return (
    <>
      <Logout />
      <h1 className="text-3xl font-bold my-4 underline flex justify-center items-center">
        User data
      </h1>
      <div className="flex justify-between">
        <UserForm />
      </div>
    </>
  );
};

export default UserData;
