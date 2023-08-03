import { Col, MenuProps, Row } from "antd";
import React from "react";
import SidebarMenu from "./components/SidebarMenu";
import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";
import useWindowDimensions from "../../hooks/window-dimention";

const Layout = () => {
  const {width} = useWindowDimensions();


  return (
    <Row>
      {/* sidebar menu */}
      <Col xs={0} md={3}>
        <div style={{ position: "fixed", width: "15rem" }}>
          <SidebarMenu />
        </div>
      </Col>
      {/* body */}
      <Col offset={width < 1600 ? (width < 576 ? 0 : 2 ) : 3 } xs={24} md={22} lg={21} style={{ padding: "2rem" }}>
        <Topbar />
        <Outlet />
      </Col>
    </Row>
  );
};

export default Layout;
