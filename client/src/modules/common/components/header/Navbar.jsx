import { Drawer, Image } from "antd";
import Toggle from "assets/images/toggle-btn.svg";
import { useUserRoleBasedInfo } from "modules/common/hooks/useUserRoleBasedInfo";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { resources } from "resources/app_resources";

import SocialNav from "../socials-menu/SocialNav";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { DRAWER_ITEMS } = useUserRoleBasedInfo();

  const logoutUser = () => {
    localStorage.clear();
    // window.reload();
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };
  return (
    <>
      <div className="toggle text-right">
        <Image style={{marginTop:70}} preview={false} src={Toggle} onClick={showDrawer} width="35px" />
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <nav className="navigation-panel">
          <span className="close" onClick={onClose}>
            X
          </span>
          <div style={{ maxHeight: "90vh", overflowY: "auto" }}>
            <ul className="text-center">
              <li>
                <NavLink to={"/admin"}>{"Home"}</NavLink>
              </li>
              {React.Children.toArray(
                DRAWER_ITEMS.map(({ link, title }) => (
                  <li onClick={onClose}>
                    <NavLink to={link}>{title}</NavLink>
                  </li>
                ))
              )}
              <li>
                <NavLink onClick={logoutUser}>{resources.LOGOUT_LABEL}</NavLink>
              </li>
            </ul>
          </div>

          <div className="panel-social">
            <SocialNav />
          </div>
        </nav>
      </Drawer>
    </>
  );
};

export default Navbar;
