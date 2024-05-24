import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardButton = () => {
  const navigate = useNavigate();

  const goToDashBoard = () => {
    navigate("/counter");
  };
  return (
    <div>
      <button
        onClick={goToDashBoard}
        className="fixed top-4 left-4 bg-green-500 text-white border-none py-2.5 px-5 text-center cursor-pointer"
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default DashboardButton;
