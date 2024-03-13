import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../components/AdminComponent/Admin/Admin";
import CreateRestaurantForm from "../components/AdminComponent/CreateRestaurantForm/CreateRestaurantForm";

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={true ? <Admin /> : <CreateRestaurantForm />}
        />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
