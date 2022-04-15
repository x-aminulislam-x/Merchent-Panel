import { Fragment } from "react";
import Header from "@layouts/Header/Header";
import Sidebar from "@layouts/Sidebar/Sidebar";

import "./Layout.scss";

const Layout = (props: any) => {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <div className="wx__app_wrapper">
        <div className="wx__app_inner">
          {props.children}
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
