import { Table as DataTable } from "antd";
import AppSpinner from "elements/AppLoader/Spinner";
import styles from "elements/DataTable/DataTable.module.scss";
import { PropTypes } from "prop-types";
import React from "react";

const Table = (props) => {
  //vars
  const { columns, loading } = props;
  const tableLoading = {
    spinning: loading,
    indicator: <AppSpinner />,
  };
  return (
    <DataTable
      className={styles.tableFonts}
      columns={columns}
      {...props}
      loading={loading ? tableLoading : false}
    />
  );
};

export default Table;

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};
