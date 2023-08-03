import { Col, Row } from "antd";
import React from "react";
import BasicAreaChart from "./components/BasicAreaChart";
import SplineAreaChart from "./components/SplineAreaChart";
import StackedAreaChart from "./components/StackedAreaChart";

const AreaChart = () => {
  return (
    <div>
      <Row>
        <Col xs={24} xl={12}>
          <div className="card">
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Basic Area Chart
            </p>
            <BasicAreaChart />
          </div>
        </Col>
        <Col xs={24} xl={12}>
          <div className="card" style={{ marginLeft: "1rem" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Spline Area Chart
            </p>
            <SplineAreaChart />
          </div>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} xl={16}>
          <div className="card">
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Stacked Area Chart
            </p>
            <StackedAreaChart />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AreaChart;
