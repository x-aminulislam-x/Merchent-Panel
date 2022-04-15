import { useEffect, useContext } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { AuthService } from "@services/api/Auth.service";
import { setUserInfo } from "store/reducers/userReducer";
import { LocalStorageService } from "@services/utils/localstorage.service";
import { AuthContext } from "context/auth";

const AutoLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get("token");
  const uid = searchParams.get("uid");
  const { authenticate, isAuthenticated, logout } = useContext(AuthContext);
  
  if (isAuthenticated) return <Navigate to="/admin/dashboard" replace />;

  const { from } = (location.state as any) || {
    from: { pathname: "/admin/dashboard" },
  };

  useEffect(() => {
    if (accessToken && uid) {
      LocalStorageService.set('accessToken', accessToken)
      LocalStorageService.set('uid', uid)
      AuthService.checkToken()
        .then((resp: any) => {
          const user_data = resp.body;
          LocalStorageService.set("user_data", user_data);
          dispatch(setUserInfo({ accessToken, user_data }));
          authenticate(
            { accessToken: accessToken },
            () => {
              navigate(from);
            }
          )
        })
        .catch((err) => {
          logout();
        });
    } else logout();
  }, []);

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <strong className="mt-4 text-primary">
        Checking user Information ...
      </strong>
    </div>
  );
};

export default AutoLogin;
