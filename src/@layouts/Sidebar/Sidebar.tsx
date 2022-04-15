import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import nav_links from "./nav-links";

import "./Sidebar.scss";


const Sidebar = () => {
  const [open, setOpen] = useState('')
  const { pathname } = useLocation();

  // useEffect(() => {
  //   const navChild = document.querySelector(".wx__single_side_nav_childrens");
  //   const navChildrens = navChild.querySelector(".active");
  //   if (navChildrens) {
  //     navChild.style.maxHeight = navChild.scrollHeight + "px";
  //     navChild.style.overflow = "unset";
  //     navChild.style.opacity = 1;
  //   }
  // }, []);


  return (
    <div className="wx__sidebar">
      <div className="wx__sidebar__container">
        <div className="wx__side__nav">
          {nav_links.map((nav) => (
            <Fragment key={nav.link}>
              <Link
                to={nav.link}
                onClick={() => setOpen(nav.link)}
                className={`wx__single__side__nav ${
                  pathname === nav.link ? "active" : ""
                }`}
              >
                <span className="material-icons-round">{nav.icon}</span>
                <div className="wx__side__navigation__text">
                  <span>{nav.label}</span>
                </div>
              </Link>
              {nav.childrens && (
                <div
                  className={`wx__single_side_nav_childrens ${
                    (open === nav.link) && "wx__show_subChildrens"
                  }`}
                >
                  {nav.childrens.map((child) => (
                    <Link
                      to={child.link}
                      key={child.link}
                      className={`wx__single_side_nav_single_childrens ${
                        pathname === child.link ? "active" : ""
                      }`}
                    >
                      {/* <span className="material-icons-round">{child.icon}</span> */}
                      <div className="wx__side__childrens__text">
                        <span>{child.label}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </Fragment>
          ))}

          <p className="_caption wx__sales__channels">Sales Channels</p>
          <div className="wx__single__side__nav">
            <span className="material-icons-round">storefront</span>
            <div className="wx__side__navigation__text">
              <span>Online Store</span>
            </div>
          </div>
          <div className="wx__single__side__nav">
            <span className="material-icons-round">point_of_sale</span>
            <div className="wx__side__navigation__text">
              <span>Points of Sale</span>
            </div>
          </div>
        </div>
      </div>
      <div className="wx__sidebar__bottom">
        <div className="wx__single__side__nav">
          <span className="material-icons-round">settings</span>
          <div className="wx__side__navigation__text">
            <span>Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
