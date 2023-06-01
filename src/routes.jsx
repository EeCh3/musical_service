
/* eslint-disable import/prefer-default-export */
import { Routes, Route } from "react-router-dom";

import { LoginPage } from "./pages/login/loginPage";
import { mainPage } from "./pages/main/main";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<mainPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
