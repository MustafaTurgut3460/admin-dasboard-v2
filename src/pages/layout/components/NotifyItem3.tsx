import { faClose, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button, Col, Row } from "antd";
import React from "react";

const NotifyItem3 = () => {
  return (
    <Row align={"top"} justify={"space-between"}>
      <Col>
        <img src={require("../../../assets/images/completed-task.png")} alt="" style={{width: 36, padding: 5, backgroundColor: "var(--color-light)", borderRadius: 40}}/>
      </Col>
      <Col style={{ marginLeft: "1rem" }}>
        <p style={{ padding: 0, marginBottom: "-0.2rem" }}>
          Henüz bitmemiş 5 adet göreviniz bulunmakta
        </p>
        <p style={{ fontSize: "0.75rem", opacity: 0.5 }}>Şimdi</p>
      </Col>
      <Col style={{ marginLeft: "2rem" }}>
        <Button type="text" shape="circle">
          <FontAwesomeIcon icon={faClose} style={{ color: "gray" }} />
        </Button>
      </Col>
    </Row>
  );
};

export default NotifyItem3;
