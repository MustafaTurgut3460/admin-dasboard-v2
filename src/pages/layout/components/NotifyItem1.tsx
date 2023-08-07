import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Col, Row } from "antd";
import React from "react";

const NotifyItem1 = () => {
  return (
    <Row align={"top"} justify={"space-between"}>
      <Col>
        <Row>
          <Col>
            <Avatar
              src={require("../../../assets/images/avatar1.png")}
              size={"large"}
            />
          </Col>
          <Col style={{marginLeft: "1rem"}}>
            <p style={{ padding: 0, marginBottom: "-0.5rem" }}>
              Mustafa Turgut sana yeni bir iş atadı
            </p>
            <Button style={{ padding: 0, fontSize: "0.8rem" }} type="link">
              Remote React / React Developer
            </Button>
            <p
              style={{
                fontSize: "0.75rem",
                opacity: 0.5,
                marginTop: "-0.5rem",
              }}
            >
              1 hafta önce
            </p>
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

export default NotifyItem1;
