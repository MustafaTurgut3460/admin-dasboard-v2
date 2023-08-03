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
import { useDispatch } from "react-redux";
import { setPage } from "../../../actions/pageAction";

const SidebarMenu = () => {

  const [selectedKey, setSelectedKey] = useState("1");

  const dispatch = useDispatch();

  const { width } = useWindowDimensions();


  const getStyle = (key: string): React.CSSProperties | undefined => {
    return selectedKey === key
      ? {
          color: "var(--color-primary)",
        }
      : {
          color: "var(--color-light-text)",
        };
  };

  const handleNavClick = (key: string, path: string) => {
    setSelectedKey(key);

    dispatch(setPage({path: path}));
  }

  return (
    <Menu
      defaultSelectedKeys={[selectedKey]}
      mode="inline"
      style={{ height: "100vh" }}
      inlineCollapsed={width < 1600}
    >
      {!(width < 1600) ? (
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
            style={{ width: 36, height: "auto", backgroundColor: "white" }}
            alt="Logo"
          />
          <div style={{ marginLeft: "0.5rem" }}>
            <p>BAYKAR</p>
            <p style={{ marginTop: "1rem", fontSize: "0.66rem", opacity: 0.5 }}>
              Production
            </p>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {/* Menü Öğeleri */}
      <Menu.Item
        key="1"
        icon={<FontAwesomeIcon icon={faGauge} style={getStyle("1")} />}
      >
        <Link to="/" onClick={() => {handleNavClick("1", "Dashboard")}} style={getStyle("1")}>
          Dashboard
        </Link>
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={<FontAwesomeIcon icon={faTable} style={getStyle("2")} />}
      >
        <Link
          to="/tables"
          style={getStyle("2")}
          onClick={() => {handleNavClick("2", "Tables")}}
        >
          Tables
        </Link>
      </Menu.Item>
      <Menu.SubMenu
        key="3"
        icon={<FontAwesomeIcon icon={faChartSimple} style={getStyle("3")} />}
        title={<p style={getStyle("3")}>Charts</p>}
      >
        <Menu.Item key="31">
          <Link
            to="/charts/line"
            style={getStyle("31")}
            onClick={() => {handleNavClick("31", "Charts/Line Chart")}}
          >
            <FontAwesomeIcon
              icon={faChartLine}
              style={{ ...getStyle("31"), marginRight: "0.5rem" }}
            />
            Line Chart
          </Link>
        </Menu.Item>
        <Menu.Item key="32">
          <Link
            to="/charts/area"
            style={getStyle("32")}
            onClick={() => {handleNavClick("32", "Charts/Area Chart")}}
          >
            <FontAwesomeIcon
              icon={faChartArea}
              style={{ ...getStyle("32"), marginRight: "0.5rem" }}
            />
            Area Chart
          </Link>
        </Menu.Item>
        <Menu.Item key="33">
          <Link
            to="/charts/bar"
            style={getStyle("33")}
            onClick={() => {handleNavClick("33", "Charts/Bar Chart")}}
          >
            <FontAwesomeIcon
              icon={faChartSimple}
              style={{ ...getStyle("33"), marginRight: "0.5rem" }}
            />
            Bar Chart
          </Link>
        </Menu.Item>
        <Menu.Item key="34">
          <Link
            to="/charts/pie"
            style={getStyle("34")}
            onClick={() => {handleNavClick("34", "Charts/Pie Chart")}}
          >
            <FontAwesomeIcon
              icon={faChartPie}
              style={{ ...getStyle("34"), marginRight: "0.5rem" }}
            />
            Pie Chart
          </Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item
        key="4"
        icon={<FontAwesomeIcon icon={faIdCard} style={getStyle("4")} />}
      >
        <Link
          to="/cards"
          style={getStyle("4")}
          onClick={() => {handleNavClick("4", "Cards")}}
        >
          Cards
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default SidebarMenu;
