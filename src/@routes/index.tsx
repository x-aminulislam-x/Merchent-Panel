import AutoLogin from "@pages/auth/AutoLogin";
import AuthProvider from "context/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminRouter } from "./routes";

export default function () {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="admin/login" element={<AutoLogin />} />
          <Route path="/admin/*" element={<AdminRouter />} />
          <Route path="/" element={<AutoLogin />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
