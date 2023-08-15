import React, { useState } from "react";
import { Button, Col, Divider, Drawer, Menu, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faTable,
  faChartSimple,
  faIdCard,
  faChartLine,
  faChartArea,
  faChartPie,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import useWindowDimensions from "../../../hooks/window-dimention";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../actions/pageAction";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "@iconify/react";
import { showDrawer } from "../../../actions/menuAction";
import { setCollapsed as setCollapsedAction } from "../../../actions/menuAction";

export interface MenuItem {
  key: string;
  label: string;
  to: string;
  icon?: IconProp;
  subMenu?: MenuItem[];
  path: string;
}

const SidebarMenu = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const [selectedKey, setSelectedKey] = useState(
    localStorage.getItem("key") || menuItems[0].key
  );

  const dispatch = useDispatch();
  const drawer = useSelector((state: any) => state.menu).drawer;
  const collapsed = useSelector((state: any) => state.menu).collapsed;

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
    localStorage.setItem("key", key);

    dispatch(setPage({ path: path }));
  };

  const generateDynmaicMenu = (menuData: MenuItem[]) => {
    return menuData.map((menuItem) => {
      if (menuItem.subMenu) {
        return (
          <Menu.SubMenu
            key={menuItem.key}
            title={menuItem.label}
            icon={
              menuItem.icon ? <FontAwesomeIcon icon={menuItem.icon} /> : null
            }
          >
            {generateDynmaicMenu(menuItem.subMenu)}
          </Menu.SubMenu>
        );
      } else {
        return (
          <Menu.Item
            key={menuItem.key}
            icon={
              menuItem.icon ? <FontAwesomeIcon icon={menuItem.icon} /> : null
            }
          >
            <Link
              to={menuItem.to}
              onClick={() => {
                handleNavClick(menuItem.key, menuItem.path);
              }}
              style={getStyle(menuItem.key)}
            >
              {menuItem.label}
            </Link>
          </Menu.Item>
        );
      }
    });
  };

  return (
    <>
      <Menu
        defaultSelectedKeys={[selectedKey]}
        mode="inline"
        style={{ height: "100vh"}}
        inlineCollapsed={width < 1600 || collapsed}
      >
        {!(width < 1600 || collapsed) ? (
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={require("../../../assets/images/BaykarLogo.png")}
              style={{ width: 36, height: "auto", backgroundColor: "white" }}
              alt="Logo"
            />
            <div style={{ marginLeft: "0.5rem" }}>
              <p>BAYKAR</p>
              <p
                style={{ marginTop: "1rem", fontSize: "0.66rem", opacity: 0.5 }}
              >
                Production
              </p>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <img
              src={require("../../../assets/images/BaykarLogo.png")}
              style={{ width: 36, height: "auto", backgroundColor: "white" }}
              alt="Logo"
            />
          </div>
        )}

        <Row align={"middle"}>
          <Col
            span={21}
            style={{
              marginRight: collapsed ? "" : "0.1rem",
              marginLeft: collapsed ? "" : "0.1rem",
            }}
          >
            <Divider />
          </Col>
          {width > 1600 && (
            <Col style={{ marginRight: "-3rem"}}>
              <Button
                shape="circle"
                type="ghost"
                size="small"
                onClick={() => {
                  dispatch(setCollapsedAction(!collapsed));
                }}
              >
                <Icon
                  icon="dashicons:admin-collapse"
                  fontSize={24}
                  color="gray"
                  rotate={collapsed ? 2 : 0}
                />
              </Button>
            </Col>
          )}
        </Row>

        {/* Menü Öğeleri */}
        {generateDynmaicMenu(menuItems)}
      </Menu>
      <Drawer
        title="Menü"
        placement="left"
        onClose={(e) => dispatch(showDrawer(!showDrawer))}
        open={drawer}
      >
        <Menu
          defaultSelectedKeys={[selectedKey]}
          mode="inline"
          style={{ height: "100vh", backgroundColor: "transparent" }}
        >
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
              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "0.66rem",
                  opacity: 0.5,
                }}
              >
                Production
              </p>
            </div>
          </div>

          {/* Menü Öğeleri */}
          {generateDynmaicMenu(menuItems)}
        </Menu>
      </Drawer>
    </>
  );
};

export default SidebarMenu;
