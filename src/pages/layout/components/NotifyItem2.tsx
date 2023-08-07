import { faClose, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Col, Row } from "antd";
import React from "react";

const NotifyItem2 = () => {
  return (
    <Row align={"top"} justify={"space-between"}>
      <Col>
        <Row>
          <Col>
            <Avatar
              src={require("../../../assets/images/avatar2.png")}
              size={"large"}
            />
          </Col>
          <Col style={{ marginLeft: "1rem" }}>
            <p style={{ padding: 0, marginBottom: "-0.2rem" }}>
              Mustafa Turgut seni takımına davet etti
            </p>
            <Row>
              <Col>
                <FontAwesomeIcon icon={faLaptopCode} color="#1677ff" />
              </Col>
              <Col style={{ marginLeft: "0.3rem" }}>
                <p style={{ fontSize: "0.8rem", color: "#1677ff" }}>
                  React Development
                </p>
              </Col>
            </Row>
            <p style={{ fontSize: "0.75rem", opacity: 0.5 }}>1 hafta önce</p>
            <Row style={{ marginTop: "1rem" }}>
              <Col>
                <Button type="primary" style={{ fontSize: "0.8rem" }}>
                  Kabul Et
                </Button>
              </Col>
              <Col style={{ marginLeft: "0.5rem" }}>
                <Button danger>Reddet</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col style={{ marginLeft: "2rem" }}>
        <Button type="text" shape="circle">
          <FontAwesomeIcon icon={faClose} style={{ color: "gray" }} />
        </Button>
      </Col>
    </Row>
  );
};

export default NotifyItem2;
