import React, { lazy, Suspense, useContext, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { LocalStorageService } from "@services/utils/localstorage.service";
import { AuthContext } from "context/auth";
import { routeList } from "./routes-lists";

const Layout = lazy(() => import("@layouts/index"));

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  
  return isAuthenticated ? children : logout();
};

export const AdminRouter = () => {
  return (
    <React.Fragment>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routeList.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  key={index}
                  element={
                    <PrivateRoute>
                      <route.component />
                    </PrivateRoute>
                  }
                />
              );
            })}
            <Route
              path="/"
              element={<Navigate to="/admin/dashboard" replace />}
            />
            <Route
              path="*"
              element={<Navigate to="/admin/notfound" replace />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </React.Fragment>
  );
};
