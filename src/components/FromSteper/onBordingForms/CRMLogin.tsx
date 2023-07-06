import React, { useState } from "react";
import CustomTextInput from "../../Common/CustomTextInput";

type Props = {};

const CRMLogin = (props: Props) => {
  const [userName, setUserName] = useState<string>("");
  const handleUserName = (e: any) => {
    setUserName(e.target.value);
  };
  return (
    <div>
      <div className="text-white border-b border-gray-700 pb-4">
        <h1 className="text-lg">CRM Login Credentials</h1>
      </div>
      <div className="pt-4 border-b border-gray-700">
        <div className="mb-4">
          <CustomTextInput
            label="Username/Email"
            placeholder="Enter username"
            value={userName}
            onChange={handleUserName}
          />
        </div>
        <div className="mb-4">
          <CustomTextInput
            label="API Key"
            placeholder="Enter API"
            value={userName}
            onChange={handleUserName}
          />
        </div>
      </div>
    </div>
  );
};

export default CRMLogin;
