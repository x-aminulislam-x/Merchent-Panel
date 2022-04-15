import { ENV } from "@config/ENV.config";
import { LocalStorageService } from "@services/utils/localstorage.service";
import React, { useEffect, useMemo, useState } from "react";
import { isExpiredToken } from "utils/jwt";

type AuthProps = {
  isAuthenticated: boolean;
  authenticate: Function;
  logout: Function;
};

export const AuthContext = React.createContext({} as AuthProps);
// TODO need to checking valid token and expired
const isValidToken = () => {
  const accessToken = LocalStorageService.get("accessToken");

  if (!accessToken) return false;

  return !isExpiredToken(accessToken);
};

const AuthProvider = (props: any) => {
  const [isAuthenticated, makeAuthenticated] = useState<boolean>(
    isValidToken()
  );
  // every 5 seconde checking the token
  useEffect(() => {
    setInterval(() => {
      if (!isValidToken()) makeAuthenticated(isValidToken());
    }, 5000);
  }, []);

  useEffect(() => {
    makeAuthenticated(isValidToken());
  }, [isValidToken()]);

  const authenticate = ({ accessToken }: any, callBack: () => void) => {
    if (accessToken) {
      makeAuthenticated(true);
      LocalStorageService.set("accessToken", accessToken);
    }
    callBack();
  };

  const logout = () => {
    makeAuthenticated(false);
    LocalStorageService.delete("accessToken");
    LocalStorageService.clear();
    window.location.replace(ENV.LandingPageURL);
    // setTimeout(callBack, 100);
  };

  // event listener for logout
  useEffect(() => {
    const handleInvalidToken = (e) => {
      if (e.key === "accessToken" && e.oldValue && !e.newValue) logout();
    };

    window.addEventListener("storage", handleInvalidToken);

    return function cleanup() {
      window.removeEventListener("storage", handleInvalidToken);
    };
  }, [isAuthenticated]);

  const memoedProps = useMemo(
    () => ({
      authenticate,
      isAuthenticated,
      logout,
    }),
    [authenticate, isAuthenticated, logout]
  );

  // context
  return (
    <AuthContext.Provider value={memoedProps}>
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
