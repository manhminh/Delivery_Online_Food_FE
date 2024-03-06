import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContactsIcon from "@mui/icons-material/Contacts";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/userAction";

const ProfileNavigation = ({ open, handleClose }) => {
  const menu = [
    { title: "Orders", icon: <ShoppingBagIcon /> },
    { title: "Favorites", icon: <FavoriteIcon /> },
    { title: "Address", icon: <ContactsIcon /> },
    { title: "Payments", icon: <AccountBalanceIcon /> },
    { title: "Notification", icon: <NotificationsActiveIcon /> },
    { title: "Events", icon: <EventIcon /> },
    { title: "Logout", icon: <LogoutIcon /> },
  ];

  const isSmallerScreen = useMediaQuery("(max-width: 900px)");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleNavigate = (title) => {
    if (title === "logout") {
      dispatch(logout());
      navigate("/");
    } else {
      navigate(`/my-profile/${title}`);
    }
  };

  return (
    <div>
      <Drawer
        variant={isSmallerScreen ? "temporary" : "permanent"}
        open={isSmallerScreen ? open : true}
        onClose={handleClose}
        sx={{ zIndex: 1 }}
        anchor="left"
      >
        <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16">
          {menu.map((item, index) => (
            <>
              <div
                onClick={() => handleNavigate(item.title.toLocaleLowerCase())}
                className="px-5 flex items-center space-x-5 cursor-pointer"
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </div>

              {index !== menu.length - 1 && <Divider />}
            </>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default ProfileNavigation;
