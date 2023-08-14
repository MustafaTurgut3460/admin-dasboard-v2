import {
  faBell,
  faGear,
  faMoon,
  faSliders,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Badge,
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
import NotifyItem1 from "./NotifyItem1";
import NotifyItem2 from "./NotifyItem2";
import NotifyItem3 from "./NotifyItem3";
import { setThemeToLocalStorage } from "../../../services/local-storage-service";
import { useNavigate } from "react-router-dom";
import { setPage } from "../../../actions/pageAction";
import { Icon } from "@iconify/react";
import { showDrawer } from "../../../actions/menuAction";
import useWindowDimensions from "../../../hooks/window-dimention";

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

const profileItems: MenuProps["items"] = [
  {
    label: "Profilim",
    key: "0",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    label: "Ayarlar",
    key: "1",
    icon: <FontAwesomeIcon icon={faGear} />,
  },
  {
    label: "Çıkış Yap",
    key: "2",
    icon: <Icon icon="majesticons:logout" />,
  },
];

const notificationItems: MenuProps["items"] = [
  {
    label: <NotifyItem1 />,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <NotifyItem2 />,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: <NotifyItem3 />,
    key: "2",
  },
];

const Topbar = () => {
  const theme = useSelector((state: any) => state.theme);
  const drawer = useSelector((state: any) => state.menu).drawer;
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(theme.theme === Themes.Light);
  const navigate = useNavigate();

  const {width} = useWindowDimensions();

  const pagePath = useSelector((state: any) => state.page).path;

  let pages: { title: string }[] = [];
  pagePath.split("/").forEach((path: any) => {
    pages.push({ title: path });
  });

  useEffect(() => {
    dispatch(
      setTheme(theme.theme === Themes.Dark ? Themes.Light : Themes.Dark)
    );
    setThemeToLocalStorage(checked ? "light" : "dark");
    document.body.classList.toggle("dark-mode-variables");
  }, [checked]);

  const profileOnClick = (info: any) => {
    console.log(info);

    if (info.key === "0") {
      navigate("/profile");
      dispatch(setPage({ path: "Profilim" }));
    } else if (info.key === "2") {
      navigate("/login");
    }
  };

  const handleMenuCollapseClick = () => {
    dispatch(showDrawer(!drawer));
  };

  return (
    <Row style={{ paddingRight: "1rem" }}>
      <Col span={24}>
        <Row justify={"space-between"}>
          {/* title */}
          <Col>
            <Breadcrumb items={[{ title: "Home" }, ...pages]} />
            <h1> {pages[pages.length - 1].title} </h1>
          </Col>
          {/* option icons */}
          <Col>
            <Row style={{ alignItems: "center" }}>
              {/* icons */}
              <Space size={10}>
                { width < 768 && (
                  <Col>
                    <Button
                      type="text"
                      shape="circle"
                      onClick={handleMenuCollapseClick}
                    >
                      <Icon icon="ion:menu" fontSize={24} />
                    </Button>
                  </Col>
                )}
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
                  <Dropdown
                    menu={{ items: notificationItems }}
                    trigger={["click"]}
                    placement="bottomRight"
                  >
                    <Button type="text" shape="circle">
                      <Badge count={3} size="small" style={{ color: "white" }}>
                        <img
                          src={require("../../../assets/images/bell.png")}
                          alt=""
                          style={{ width: 24 }}
                        />
                      </Badge>
                    </Button>
                  </Dropdown>
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
                  <Dropdown
                    menu={{ items: profileItems, onClick: profileOnClick }}
                    trigger={["click"]}
                    placement="bottomRight"
                  >
                    <a>
                      <Avatar
                        src={require("../../../assets/images/avatar1.png")}
                      />
                    </a>
                  </Dropdown>
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
