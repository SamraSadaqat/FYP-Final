import { Layout } from "antd";
import styles from "elements/Sider/Sider.module.scss";
import { PropTypes } from "prop-types";
import React, { useState } from "react";
const { Sider } = Layout;

const Collapse = (props) => {
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider
      className={`${styles.siderFonts} dashboard-sidenav`}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      {...props}
    >
      {props.children}
    </Sider>
  );
};

export default Collapse;

Collapse.propTypes = {
  children: PropTypes.object,
};
