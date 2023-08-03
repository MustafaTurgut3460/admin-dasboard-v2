import React from "react";
import BasicLineChart from "./components/BasicLineChart";
import WithDataLabelsLineChart from "./components/WithDataLabelsLineChart";
import { Col, Row } from "antd";
import GradientLineChart from "./components/GradientLineChart";
import SteplineLineChart from "./components/SteplineLineChart";

const LineChart = () => {
  return (
    // BASIC LINE CHART
    <>
      <Row>
        <Col xs={24} xl={12}>
          <div className="card">
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Basic Line Chart
            </p>
            <BasicLineChart />
          </div>
        </Col>
        <Col xs={24} xl={12}>
          <div className="card"  style={{marginLeft: "1rem"}}>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              With Data Labels Line Chart
            </p>
            <WithDataLabelsLineChart />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={24} xl={12}>
          <div className="card">
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Gradient Line Chart
            </p>
            <GradientLineChart />
          </div>
        </Col>
        <Col xs={24} xl={12}>
          <div className="card"  style={{marginLeft: "1rem"}}>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Stepline Line Chart
            </p>
            <SteplineLineChart />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LineChart;
