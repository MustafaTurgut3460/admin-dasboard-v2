import { Col, Row } from "antd";
import React from "react";
import BasicTable from "./components/BasicTable";
import CustomPaginationTable from "./components/CustomPaginationTable";
import FullTable from "./components/FullTable";

const Tables = () => {
  return (
    <>
      <Row justify={"space-between"}>
        <Col xs={24} lg={10} className="card">
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            Basic Table
          </p>
          <BasicTable />
        </Col>
        <Col xs={24} lg={13} className="card">
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            Custom Pagination Table
          </p>
          <CustomPaginationTable />
        </Col>
      </Row>
      <Row>
        <Col span={24} className="card">
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Full Table</p>
          <FullTable />
        </Col>
      </Row>
    </>
  );
};

export default Tables;
