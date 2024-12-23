import { Col } from "antd";
import SearchableTable from "elements/DataTable/SearchableTable";
import { EMPLOYEES_TABLE_COLUMNS } from "modules/admin/constants/tables-columns/employees";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "redux/modules/admin/actions/employeesAction";

const EmployeesGrid = () => {
  const dispatch = useDispatch();
  const { list, error, loading, isError } = useSelector(
    (store) => store.admin.employees
  );

  function getRowKey(record) {
    return record.id;
  }
  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <Col span={24}>
      {isError && <span>{JSON.stringify(error, null, 2)}</span>}
      <SearchableTable
        columns={EMPLOYEES_TABLE_COLUMNS}
        tableTitle={"All Employees"}
        data={list}
        error={error}
        loading={loading}
        search={true}
        rowKey={getRowKey}
      />
    </Col>
  );
};

export default EmployeesGrid;
