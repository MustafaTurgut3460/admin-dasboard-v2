import { Col, Row } from "antd";
import React, { useState } from "react";
import BasicTable from "./components/BasicTable";
import CustomPaginationTable from "./components/CustomPaginationTable";
import FullTable from "./components/FullTable";
import { columns, datas } from "./values/data";
import FullAntdTable from "./components/FullAntdTable";

const Tables = () => {
  const [fullTableColumns, setFullTableColumns] = useState(columns);

  return (
    <>
      <Row>
        <Col span={24} style={{marginTop: "5rem"}}>
          <FullAntdTable />
        </Col>
      </Row>
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
          <FullTable
            datas={datas}
            columns={fullTableColumns}
            height={500}
            initPageSize={5}
            pageSizeOptions={[5, 10, 20, 50, 100]}
          />
        </Col>
      </Row>
    </>
  );
};

export default Tables;
