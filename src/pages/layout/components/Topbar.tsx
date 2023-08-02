import { faBell, faGear, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Breadcrumb,
  Button,
  Col,
  Dropdown,
  MenuProps,
  Row,
  Space,
} from "antd";
import React from "react";

const items: MenuProps["items"] = [
  {
    label: (
      <img
        src={require("../../../assets/images/turkey.png")}
        alt=""
        style={{ width: 24, height: 24 }}
      />
    ),
    key: "0",
  },
  {
    label: (
      <img
        src={require("../../../assets/images/uk.png")}
        alt=""
        style={{ width: 24, height: 24 }}
      />
    ),
    key: "1",
  },
];

const Topbar = () => {
  return (
    <Row style={{paddingRight: "1rem"}}>
      <Col span={24}>
        <Row justify={"space-between"}>
          {/* title */}
          <Col>
            <Breadcrumb
              items={[
                {
                  title: "Home",
                },
                {
                  title: <a href="">Dashboard</a>,
                },
              ]}
            />
            <h1>Dashboard</h1>
          </Col>
          {/* option icons */}
          <Col>
            <Row style={{ alignItems: "center" }}>
              {/* icons */}
              <Space size={10}>
                <Col>
                  <Dropdown menu={{ items }} trigger={["click"]}>
                    <Button type="text" shape="circle">
                      <img
                        src={require("../../../assets/images/turkey.png")}
                        alt=""
                        style={{ width: 24, height: 24 }}
                      />
                    </Button>
                  </Dropdown>
                </Col>
                <Col>
                  <Button type="text" shape="circle">
                    <FontAwesomeIcon
                      icon={faBell}
                      style={{ color: "gray", fontSize: "1.2rem" }}
                    />
                  </Button>
                </Col>
                <Col>
                  <Button type="text" shape="circle">
                    <FontAwesomeIcon
                      icon={faSliders}
                      style={{ color: "gray", fontSize: "1.2rem" }}
                    />
                  </Button>
                </Col>
                <Col>
                  <a>
                    <Avatar
                      src={require("../../../assets/images/avatar1.png")}
                    />
                  </a>
                </Col>
              </Space>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Topbar;
