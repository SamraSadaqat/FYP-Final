import { Layout } from "antd";
import styles from "modules/common/components/layout/LayoutWrapper.module.scss";
import { PropTypes } from "prop-types";
import React from "react";

const { Content } = Layout;

function LayoutWrapper(props) {
  return (
    <Layout className={styles.layoutView}>
      <Layout>
        <Content>
          <div className="container">{props.children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutWrapper;

LayoutWrapper.propTypes = {
  children: PropTypes.array,
};
