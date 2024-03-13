import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import CustomerRoutes from "./CustomerRoutes";

const Routers = () => {
  return (
    <Routes>
      <Route path="/*" element={<CustomerRoutes />} />
      <Route path="/admin/restaurant/*" element={<AdminRoutes />} />
    </Routes>
  );
};

export default Routers;
