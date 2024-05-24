import React from "react";
import UserForm from "../components/user-data/UserForm";
import Logout from "./../components/logout/Logout";
import TextEditor from "../components/editor/TextEditor";
import { useSelector } from "react-redux";

// user page
const UserData = () => {
  // Fetching user data from Redux store
  const user = useSelector((state) => state.user);

  return (
    <>
      <Logout />
      <h1 className="text-3xl font-bold my-4 underline flex justify-center items-center">
        User data
      </h1>
      <div className="flex justify-between">
        <UserForm />
      </div>
      <TextEditor user={user} />
    </>
  );
};

export default UserData;
