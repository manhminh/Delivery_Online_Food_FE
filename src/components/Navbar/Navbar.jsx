import { Avatar, Badge, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { pink } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5 z-50 sticky top-0 left-0 right-0 py-[0.8rem] bg-[#e91e63]  lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center spacce-x-4">
        <li className="logo font-semibold text-2xl text-gray-300">
          Delivery Food
        </li>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <div>
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>

        <div>
          {false ? (
            <Avatar sx={{ bgcolor: "white", color: pink.A400 }}>M</Avatar>
          ) : (
            <IconButton onClick={() => navigate("/account/login")}>
              <PersonIcon />
            </IconButton>
          )}
        </div>

        <div>
          <IconButton>
            <Badge color="black" badgeContent={4}>
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
