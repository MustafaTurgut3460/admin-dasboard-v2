import React, { useState } from "react";
import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faTable,
  faChartSimple,
  faIdCard,
  faChartLine,
  faChartArea,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import useWindowDimensions from "../../../hooks/window-dimention";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { width } = useWindowDimensions();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Menu
      defaultSelectedKeys={["1"]}
      mode="inline"
      style={{ height: "100vh" }}
      inlineCollapsed={width < 1600}
    >
      {/* Logo */}
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "3rem",
        }}
      >
        <img
          src={require("../../../assets/images/BaykarLogo.png")}
          style={{ width: 36, height: "auto" }}
          alt="Logo"
        />
        <div style={{ marginLeft: "0.5rem" }}>
          <p>BAYKAR</p>
          <p style={{ marginTop: "1rem", fontSize: "0.66rem", opacity: 0.5 }}>
            Production
          </p>
        </div>
      </div>

      {/* Menü Öğeleri */}
      <Menu.Item key="1" icon={<FontAwesomeIcon icon={faGauge} />}>
        <Link to="/">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<FontAwesomeIcon icon={faTable} />}>
        <Link to="/tables">Tables</Link>
      </Menu.Item>
      <Menu.SubMenu
        key="3"
        icon={<FontAwesomeIcon icon={faChartSimple} />}
        title="Charts"
      >
        <Menu.Item key="31">
          <Link to="/charts/line">
            <FontAwesomeIcon
              icon={faChartLine}
              style={{ marginRight: "0.5rem" }}
            />
            Line Chart
          </Link>
        </Menu.Item>
        <Menu.Item key="32">
          <Link to="/charts/area">
            <FontAwesomeIcon
              icon={faChartArea}
              style={{ marginRight: "0.5rem" }}
            />
            Area Chart
          </Link>
        </Menu.Item>
        <Menu.Item key="33">
          <Link to="/charts/bar">
            <FontAwesomeIcon
              icon={faChartSimple}
              style={{ marginRight: "0.5rem" }}
            />
            Bar Chart
          </Link>
        </Menu.Item>
        <Menu.Item key="34">
          <Link to="/charts/pie">
            <FontAwesomeIcon
              icon={faChartPie}
              style={{ marginRight: "0.5rem" }}
            />
            Pie Chart
          </Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="4" icon={<FontAwesomeIcon icon={faIdCard} />}>
        <Link to="/cards">Tables</Link>
      </Menu.Item>
    </Menu>
  );
};

export default SidebarMenu;
