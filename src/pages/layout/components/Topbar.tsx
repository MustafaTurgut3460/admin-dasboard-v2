import {
  faBell,
  faGear,
  faMoon,
  faSliders,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
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
  Switch,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Themes, setTheme } from "../../../actions/themeAction";

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
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(theme.theme === Themes.Light);

  const pagePath = useSelector((state: any) => state.page).path;

  let pages: {title: string}[] =  [];
  pagePath.split("/").forEach((path: any) => {
    pages.push({title: path})
  });
  

  useEffect(() => {
    dispatch(
      setTheme(theme.theme === Themes.Dark ? Themes.Light : Themes.Dark)
    );
    document.body.classList.toggle("dark-mode-variables");
  }, [checked]);

  return (
    <Row style={{ paddingRight: "1rem" }}>
      <Col span={24}>
        <Row justify={"space-between"}>
          {/* title */}
          <Col>
            <Breadcrumb
              items={[{title: "Home"}, ...pages] }
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
                  <Switch
                    checkedChildren={<FontAwesomeIcon icon={faSun} />}
                    unCheckedChildren={<FontAwesomeIcon icon={faMoon} />}
                    defaultChecked={checked}
                    onChange={(checked) => setChecked(checked)}
                  />
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
