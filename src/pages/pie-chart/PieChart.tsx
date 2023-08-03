import { Col, Row } from "antd";
import React from "react";
import GroupedBarChart from "../bar-chart/components/GroupedBarChart";
import StackedBarChart from "../bar-chart/components/StackedBarChart";
import BasicPieChart from "./components/BasicPieChart";
import BasicDonutChart from "./components/BasicDonutChart";
import GradientDonutChart from "./components/GradientDonutChart";
import SemiDonutChart from "./components/SemiDonutChart";
import BasicRadarChart from "./components/BasicRadarChart";
import MultipleRadarChart from "./components/MultipleRadarChart";

const PieChart = () => {
  return (
    <div>
      <Row>
        <Col xs={24} xl={8}>
          <div className="card">
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Basic Pie Chart
            </p>
            <BasicPieChart />
          </div>
        </Col>
        <Col xs={24} xl={8}>
          <div className="card" style={{ marginLeft: "1rem" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Basic Donut Chart
            </p>
            <BasicDonutChart />
          </div>
        </Col>
        <Col xs={24} xl={8}>
          <div className="card" style={{ marginLeft: "1rem" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Gradient Donut Chart
            </p>
            <GradientDonutChart />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={24} xl={8}>
          <div className="card">
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Semi Donut Chart
            </p>
            <SemiDonutChart />
          </div>
        </Col>
        <Col xs={24} xl={8}>
          <div className="card" style={{ marginLeft: "1rem" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Basic Radar Chart
            </p>
            <BasicRadarChart />
          </div>
        </Col>
        <Col xs={24} xl={8}>
          <div className="card" style={{ marginLeft: "1rem" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Multiple Radar Chart
            </p>
            <MultipleRadarChart />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PieChart;
