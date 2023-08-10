import { Avatar, Button, Col, Progress, Row, Tag } from "antd";
import React from "react";

const ProfilePlan = () => {
  return (
    <div className="card">
      <Row justify={"space-between"}>
        <Col>
          <Tag color="#5161ce20">
            <span style={{ color: "#5161ce" }}>Popular</span>
          </Tag>
        </Col>
        <Col>
          <span style={{ fontSize: "1.75rem", color: "#5161ce" }}>
            $99
            <span
              style={{
                fontSize: "0.75rem",
                opacity: 0.5,
                color: "gray",
                marginTop: "0.5rem",
              }}
            >
              /month
            </span>
          </span>
        </Col>
      </Row>
      <Row>
        <ul style={{ marginLeft: "1rem" }}>
          <li>10 Users</li>
          <li>Up to 10 GB Storage</li>
          <li>Basic Support</li>
        </ul>
      </Row>
      <Row style={{ marginTop: "1rem" }} justify={"space-between"}>
        <Col>
          <span>Days</span>
        </Col>
        <Col>
          <span>26 of 30 Days</span>
        </Col>
      </Row>
      <Row>
        <Progress percent={76} />
      </Row>
      <Row>
        <span style={{ opacity: 0.5 }}>4 days remaining</span>
      </Row>
      <Row style={{marginTop: "3rem"}}>
        <Col>
          <Button type="primary">Upgrade Plan</Button>
        </Col>
        <Col style={{marginLeft: "1rem"}}>
          <Button>Cancel</Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePlan;
