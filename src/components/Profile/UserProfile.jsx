import { Button } from "@mui/material";
import React from "react";

const UserProfile = () => {
  const handleLogout = () => {};

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="py-5 text-2xl font-semibold">Delivery Food</h1>
        <p>Email: manh@gmail.com</p>
        <Button
          onClick={handleLogout}
          variant="contained"
          sx={{ margin: "2rem 0rem" }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
