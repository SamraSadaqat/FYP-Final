import { InfoCircleTwoTone } from "@ant-design/icons";
// import { ExportTableButton } from "ant-table-extensions";
import { Col, Row } from "antd";
// import { ExcelSheetIcon } from "assets/svg-icons";
import AppSpinner from "elements/AppLoader/Spinner";
import Table from "elements/DataTable/DataTable";
import { filterByValue } from "elements/DataTable/DataTableUtils";
import styles from "elements/DataTable/SearchableTable.module.scss";
import IconPopover from "elements/IconPopover/IconPopover";
import CustomSearch from "elements/Search/Search";
import Space from "elements/Spacer/Spacer";
import Typography from "elements/Title/Title";
import { PropTypes } from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchableTable = (props) => {
  const {
    columns,
    data,
    tableTitle,
    linkTitle,
    toLink,
    pageTitle,
    popover,
    popoverTip,
    search,
    filter,
    dropDownPreview,
    dropDownElement,
    filterElement,
    action,
    actionElement,
    // exportable,
    // fileName,
    loading,
    // exportableColumns,
    customElement,
  } = props;
  const [searchVal, setSearchVal] = useState("");
  const onSearch = (e) => {
    setSearchVal(e.target.value);
  };
  const tableLoading = {
    spinning: loading,
    indicator: <AppSpinner size="large" />,
  };
  return (
    <>
      {pageTitle && (
        <div className={styles.centerHeadings}>
          <Space key="1" direction="horizontal" size={10}>
            {action && <>{actionElement}</>}
            {toLink && <Link to={toLink}>{linkTitle}</Link>}
          </Space>
        </div>
      )}

      <div className={styles.bodyDiv}>
        <Space key="2" direction="vertical" size={10} className={`spacer`}>
          {dropDownPreview ? (
            <>
              <Row>
                {tableTitle && (
                  <Col xs={24} sm={14} md={14} lg={18}>
                    <div className={styles.PopOverhead}>
                      <Typography type="title" level={4} title={tableTitle} />
                      {popover && (
                        <IconPopover content={popoverTip}>
                          <InfoCircleTwoTone />
                        </IconPopover>
                      )}
                    </div>
                  </Col>
                )}
              </Row>
              <Row>
                <Col xs={24} sm={10} md={10} lg={4}>
                  {/* dropDownElement section */}
                  {dropDownElement}
                </Col>
                <Col xs={24} sm={10} md={10} lg={14} />
                <Col xs={24} sm={10} md={10} lg={6}>
                  {search &&
                    (filter ? (
                      <Row gutter={16}>
                        <Col xs={24} sm={12} md={12} lg={12}>
                          <CustomSearch
                            placeholder={"Search Here"}
                            allowClear={true}
                            onChange={onSearch}
                          />
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12}>
                          {filterElement}
                        </Col>
                      </Row>
                    ) : (
                      <Col xs={24} sm={10} md={10} lg={6}>
                        <CustomSearch
                          placeholder={"Search Here"}
                          allowClear={true}
                          onChange={onSearch}
                        />
                      </Col>
                    ))}
                </Col>
              </Row>
            </>
          ) : (
            <>
              <Row>
                {tableTitle && (
                  <Col
                    xs={24}
                    sm={14}
                    md={14}
                    lg={19}
                    className={styles.justSpaceBetween}
                  >
                    <div className={styles.PopOverhead}>
                      <Typography type="title" level={4} title={tableTitle} />
                      {popover && (
                        <IconPopover content={popoverTip}>
                          <InfoCircleTwoTone />
                        </IconPopover>
                      )}
                    </div>
                    {customElement && <>{customElement}</>}
                  </Col>
                )}

                {search &&
                  (filter ? (
                    <>
                      <Col
                        xs={24}
                        sm={10}
                        md={10}
                        lg={5}
                        className={styles.d_flex1}
                      >
                        <Space
                          direction="horizontal"
                          size={10}
                          className="spacer"
                        >
                          <CustomSearch
                            placeholder={"Search Here"}
                            allowClear={true}
                            onChange={onSearch}
                          />
                          {filterElement}
                        </Space>
                      </Col>
                    </>
                  ) : (
                    <Col xs={24} sm={10} md={10} lg={5}>
                      <CustomSearch
                        placeholder={"Search Here"}
                        allowClear={true}
                        onChange={onSearch}
                      />
                    </Col>
                  ))}
              </Row>
            </>
          )}

          <Row>
            {/* {exportable && (
              <Space direction="vertical" size={10}>
                <Col span={24}>
                  <ExportTableButton
                    dataSource={data}
                    columns={exportableColumns ? exportableColumns : columns}
                    btnProps={{
                      icon: <ExcelSheetIcon />,
                      className: styles.exportBtn,
                      type: "ghost ",
                    }}
                    fileName={fileName}
                    showColumnPicker
                  >
                    Export
                  </ExportTableButton>
                </Col>
                <Col span={24} />
              </Space>
            )} */}
            <Col span={24}>
              <div className="tblFixed">
                <Table
                  className={styles.tableFonts}
                  columns={columns}
                  loading={loading ? tableLoading : false}
                  dataSource={searchVal ? filterByValue(data, searchVal) : data}
                  {...props}
                />
              </div>
            </Col>
          </Row>
        </Space>
      </div>
    </>
  );
};

export default SearchableTable;
SearchableTable.propTypes = {
  className: PropTypes.string,
  /**
   * data table columns to be rendered
   */
  columns: PropTypes.arrayOf(PropTypes.object),
  exportableColumns: PropTypes.arrayOf(PropTypes.object),
  /**
   * data to be rendered inside table
   */
  data: PropTypes.arrayOf(PropTypes.object),
  /**
   * data table's title
   */
  tableTitle: PropTypes.string,
  /**
   * link's title if any
   */
  linkTitle: PropTypes.string,
  /**
   * link to redirect
   */
  toLink: PropTypes.string,
  /**
   * if rendering on a page, page's title
   */
  pageTitle: PropTypes.string,
  /**
   * whether to show popover with table title or not
   */
  popover: PropTypes.bool,
  /**
   * whether to show search box or not
   */
  search: PropTypes.bool,
  /**
   * name of file to be exported
   */
  fileName: PropTypes.string,
  /**
   * content to be placed inside of a popover
   */
  popoverTip: PropTypes.string,
  /**
   * to preview filter modal or not
   */
  filter: PropTypes.bool,
  /**
   * to render a drop down or not
   */
  dropDownPreview: PropTypes.bool,
  /**
   * to render a drop down
   */
  exportable: PropTypes.bool,
  /**
   * to export data or not
   */
  dropDownElement: PropTypes.element,
  /**
   * to render a filter component
   */
  filterElement: PropTypes.element,
  /**
   * to render a custom component
   */
  customElement: PropTypes.element,
  /**
   * to render any other component or not
   */
  action: PropTypes.bool,
  loading: PropTypes.bool,
  /**
   * to render any other component with the title
   */
  actionElement: PropTypes.element,
};
