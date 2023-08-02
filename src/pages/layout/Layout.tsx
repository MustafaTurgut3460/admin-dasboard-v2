import { Col, MenuProps, Row } from "antd";
import React from "react";
import SidebarMenu from "./components/SidebarMenu";
import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";

const Layout = () => {
  return (
    <Row>
      {/* sidebar menu */}
      <Col xs={0} md={3}>
        <div style={{ position: "fixed", width: "15rem" }}>
          <SidebarMenu />
        </div>
      </Col>
      {/* body */}
      <Col offset={3} xs={24} lg={21} style={{ padding: "2rem" }}>
        <Topbar />
        <Outlet />
      </Col>
    </Row>
  );
};

export default Layout;
