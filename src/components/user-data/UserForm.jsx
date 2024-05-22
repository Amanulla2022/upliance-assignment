import React, { useState } from "react";
import BasicDetailsForm from "./BasicDetailsForm";
import FullForm from "./FullForm";

// Main UserForm component that combines BasicDetailsForm and FullNameForm
const UserForm = () => {
  const [basicDetailsFilled, setBasicDetailsFilled] = useState(false); // State to indicate if basic details are filled

  return (
    <div className="flex justify-around w-full">
      <FullForm basicDetailsFilled={basicDetailsFilled} />
      <BasicDetailsForm setBasicDetailsFilled={setBasicDetailsFilled} />
    </div>
  );
};

export default UserForm;
