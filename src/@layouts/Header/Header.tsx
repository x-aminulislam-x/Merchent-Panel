import { useContext, useEffect, useState } from "react";
import { useAppSelector } from "store/hooks";
import { AuthContext } from "context/auth";
import {ReactComponent as HeaderLogo} from "assets/svg/header-logo.svg";
import Ellipse from "assets/images/Ellipse1.png";

import "./Header.scss";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const { user_data } = useAppSelector((data) => data.user);
  const { logout } = useContext(AuthContext);

  useEffect(()=>{
    setMenu(false)
  },[])


  return (
    <div className="wx__header d-flex justify-content-between">
      <div className="wx__header__logo">
        <HeaderLogo/>
        <span className="_body__medium">{user_data?.store_name || 'Webx Global'}</span>
      </div>
      <div className="wx__header__right__part d-flex align-items-center">
        <div className="wx__avatar__img">
          <img src={Ellipse} alt="" />
        </div>
        <div style={{ position: "relative" }}>
          <span
            role="button"
            className="_sub__semibold"
            onClick={() => setMenu(!menu)}
          >
            {user_data?.email}
          </span>
          <div
            className={`bg-white shadow mt-2 ${!!menu ? "" : "d-none"}`}
            style={{ position: "absolute", right: 0, width: 100 }}
          >
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item list-group-item-action"
                role="button"
                onClick={() => logout()}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
