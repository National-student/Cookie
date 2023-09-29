import Cookies from "js-cookie";
import React from "react";

export const User = ({ setCookie }) => {
  const handleDelele = () => {
    Cookies.remove("token");
    setCookie(null);
  };

  return (
    <div>
      User
      <button onClick={handleDelele}>Log Out</button>
    </div>
  );
};
