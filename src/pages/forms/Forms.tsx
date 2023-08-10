import React from "react";
import LoginForm1 from "./components/LoginForm1";
import { Col, Row } from "antd";
import FullForm from "./components/FullForm";
import DynamicForm from "./components/DynamicForm";
import BasicLoginForm from "./components/BasicLoginForm";
import BasicRegisterForm from "./components/BasicRegisterForm";
import SteppedForm from "./components/SteppedForm";

const Forms = () => {
  return (
    <div>
      <Row style={{ marginTop: "2rem" }} justify={"space-between"}>
        <Col xs={24} lg={10}>
          <Row>
            <Col className="card" span={24}>
              <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>
                Basic Login Form
              </p>
              <BasicLoginForm />
            </Col>
          </Row>

          <Row>
            <Col className="card" span={24}>
              <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>
                Basic Register Form
              </p>
              <BasicRegisterForm />
            </Col>
          </Row>

          <Row>
            <Col className="card" span={24}>
              <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>
                Dynamic Form
              </p>
              <DynamicForm />
            </Col>
          </Row>
        </Col>
        <Col xs={24} lg={13} className="card">
          <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>Full Form</p>
          <FullForm />
        </Col>
      </Row>
      <p
        style={{
          marginTop: "2rem",
          marginBottom: "-1rem",
          fontSize: "1.1rem",
          fontWeight: "bold",
        }}
      >
        Login Form #1
      </p>
      <LoginForm1 />

      <Row>
        <Col className="card" span={24}>
          <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>
            Stepped Form
          </p>
          <SteppedForm />
        </Col>
      </Row>
    </div>
  );
};

export default Forms;
