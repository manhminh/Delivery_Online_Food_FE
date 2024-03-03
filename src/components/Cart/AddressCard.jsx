import { Button, Card } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";

const AddressCard = ({ showButton, item, handleSelectAddress }) => {
  return (
    <Card className="flex w-64 gap-5 p-5">
      <HomeIcon />
      <div className="space-y-3 text-gray-500">
        <h1 className="font-semibold text-lg text-white">Home</h1>

        <p>
          1234 Main Street asfsafsa savasfsacxzv afasf ascaxxx xcxxcz xczxvwr mn
        </p>

        {showButton && (
          <Button
            variant="contained"
            fullWidth
            onClick={() => handleSelectAddress()}
          >
            Select
          </Button>
        )}
      </div>
    </Card>
  );
};

export default AddressCard;
