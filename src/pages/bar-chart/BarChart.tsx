import { Col, Row } from "antd";
import React from "react";
import BasicColumnBarChart from "./components/BasicColumnBarChart";
import SplineAreaChart from "../area-chart/components/SplineAreaChart";
import WithDataLabelsColumnBarChart from "./components/WithDataLabelsColumnBarChart";
import StackedColumnBarChart from "./components/StackedColumnBarChart";
import NegativeColumnBarChart from "./components/NegativeColumnBarChart";
import DumbbellColumnBarChart from "./components/DumbbellColumnBarChart";
import BasicBarChart from "./components/BasicBarChart";
import GroupedBarChart from "./components/GroupedBarChart";
import StackedBarChart from "./components/StackedBarChart";
import NegativeBarChar from "./components/NegativeBarChar";

const BarChart = () => {
  return (
    <div>
      <Row>
        <Col xs={24} xl={12}>
          <div className="card">
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Basic Column Bar Chart
            </p>
            <BasicColumnBarChart />
          </div>
        </Col>
        <Col xs={24} xl={12}>
          <div className="card" style={{ marginLeft: "1rem" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              With Data Label Column Bar Chart
            </p>
            <WithDataLabelsColumnBarChart />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={24} xl={12}>
          <div className="card">
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Stacked Column Bar Chart
            </p>
            <StackedColumnBarChart />
          </div>
        </Col>
        <Col xs={24} xl={12}>
          <div className="card" style={{ marginLeft: "1rem" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              With Negative Value Column Bar Chart
            </p>
            <NegativeColumnBarChart />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={24} xl={12}>
          <div className="card">
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Dumbbell Column Bar Chart
            </p>
            <DumbbellColumnBarChart />
          </div>
        </Col>
        <Col xs={24} xl={12}>
          <div className="card" style={{ marginLeft: "1rem" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Basic Bar Chart
            </p>
            <BasicBarChart />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={24} xl={12}>
          <div className="card">
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Grouped Bar Chart
            </p>
            <GroupedBarChart />
          </div>
        </Col>
        <Col xs={24} xl={12}>
          <div className="card" style={{ marginLeft: "1rem" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Stacked Bar Chart
            </p>
            <StackedBarChart />
          </div>
        </Col>
      </Row>

      <Row justify={'center'}>
        <Col xs={24} xl={16}>
          <div className="card">
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Negative Bar Chart
            </p>
            <NegativeBarChar />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BarChart;
