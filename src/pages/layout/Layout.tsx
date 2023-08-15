import { Col, MenuProps, Row } from "antd";
import React from "react";
import SidebarMenu from "./components/SidebarMenu";
import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";
import useWindowDimensions from "../../hooks/window-dimention";
import { routes } from "./values/routes";
import { useSelector } from "react-redux";

const Layout = () => {
  const { width } = useWindowDimensions();

  const collapsed = useSelector((state: any) => state.menu).collapsed

  return (
    <Row>
      {/* sidebar menu */}
      <Col xs={0} md={2}>
        <div style={{ position: "fixed", width: `${width/125}rem`, overflowY: "auto", msOverflowStyle: "none", scrollbarWidth: "none"}} className="sidebarmenu">
          <SidebarMenu menuItems={routes} />
        </div>
      </Col>
      {/* body */}
      <Col
        offset={width < 1600 ? (width < 768 ? (width < 576 ? 0 : (!collapsed ? 1 : 0)) : (!collapsed ? 2 : 1)) : (!collapsed ? 3 : 2)}
        xs={24}
        md={collapsed ? 23 : 22}
        lg={collapsed ? 22: 21}
        style={{ padding: "1rem 2rem", marginLeft: collapsed ? "6rem" : ""}}
      >
        <Topbar/>
        <Outlet />
      </Col>
    </Row>
  );
};

export default Layout;
