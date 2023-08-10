import { Avatar, Button, Col, Divider, Row, Tabs, TabsProps, Tag } from "antd";
import React from "react";
import avatar from "../../assets/images/avatar2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCheck,
  faCircleInfo,
  faEnvelope,
  faGlobe,
  faPhone,
  faShield,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import ProfileAccount from "./components/ProfileAccount";
import ProfileSecurity from "./components/ProfileSecurity";
import ProfileNotification from "./components/ProfileNotification";
import useWindowDimensions from "../../hooks/window-dimention";
import ProfilePlan from "./components/ProfilePlan";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: (
      <div>
        <FontAwesomeIcon icon={faUser} /> Hesap
      </div>
    ),
    children: <ProfileAccount />,
  },
  {
    key: "2",
    label: (
      <div>
        <FontAwesomeIcon icon={faShield} /> Güvenlik
      </div>
    ),
    children: <ProfileSecurity />,
  },
  {
    key: "3",
    label: (
      <div>
        <FontAwesomeIcon icon={faBell} /> Bildirimler
      </div>
    ),
    children: <ProfileNotification />,
  },
];

const Profile = () => {
  const { width, height } = useWindowDimensions();

  return (
    <Row
      style={{
        marginLeft: width < 576 ? "0rem" : "2rem",
        marginBottom: "1rem",
      }}
    >
      <Col xs={23} xl={8}>
        <div className="card">
          <Row>
            <Avatar
              src={avatar}
              style={{ width: "5rem", height: "5rem", margin: "auto" }}
            />
          </Row>
          <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
            Mustafa Turgut
          </p>
          <Row justify={"center"} style={{ marginTop: "1rem" }}>
            <Tag color="geekblue">
              <span>Admin</span>
            </Tag>
          </Row>
          <Row style={{ marginTop: "2rem" }} justify={"space-evenly"}>
            <Col>
              <Row>
                <Col>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{
                      color: "#5161ce",
                      padding: "10px",
                      borderRadius: "6px",
                      backgroundColor: "#5161ce30",
                      marginTop: "2px",
                    }}
                  />
                </Col>
                <Col style={{ marginLeft: "1rem", alignItems: "center" }}>
                  <p style={{}}>1,234</p>
                  <p style={{ opacity: 0.7, fontSize: "0.65rem" }}>
                    Görev Tamamlandı
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    style={{
                      color: "#5161ce",
                      padding: "10px",
                      borderRadius: "6px",
                      backgroundColor: "#5161ce30",
                      marginTop: "2px",
                    }}
                  />
                </Col>
                <Col style={{ marginLeft: "1rem", alignItems: "center" }}>
                  <p style={{}}>541</p>
                  <p style={{ opacity: 0.7, fontSize: "0.65rem" }}>
                    Proje Tamamlandı
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider />
          <Row>
            <span style={{ opacity: 0.5 }}>Detaylar</span>
          </Row>
          <Row style={{ marginTop: "1rem", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faUser}
              style={{
                marginTop: "2px",
                borderRadius: "4px",
                padding: "8px",
                backgroundColor: "#5161ce20",
                color: "#5161ce",
              }}
            />
            <span style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
              Kullanıcı Adı:{" "}
              <span style={{ fontWeight: "normal", opacity: 0.7 }}>
                Mustafaturgut3460
              </span>
            </span>
          </Row>

          <Row style={{ marginTop: "1rem", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{
                marginTop: "2px",
                borderRadius: "4px",
                padding: "8px",
                backgroundColor: "#5161ce20",
                color: "#5161ce",
              }}
            />
            <span style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
              Email:{" "}
              <span style={{ fontWeight: "normal", opacity: 0.7 }}>
                mustafa.turgut@gmail.com
              </span>
            </span>
          </Row>

          <Row style={{ marginTop: "1rem", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faCircleInfo}
              style={{
                marginTop: "2px",
                borderRadius: "4px",
                padding: "8px",
                backgroundColor: "#5161ce20",
                color: "#5161ce",
              }}
            />
            <span style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
              Durum:{" "}
              <Tag color="geekblue">
                <span>Aktif</span>
              </Tag>
            </span>
          </Row>

          <Row style={{ marginTop: "1rem", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faPhone}
              style={{
                marginTop: "2px",
                borderRadius: "4px",
                padding: "8px",
                backgroundColor: "#5161ce20",
                color: "#5161ce",
              }}
            />
            <span style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
              İletişim:{" "}
              <span style={{ fontWeight: "normal", opacity: 0.7 }}>
                +90 (551) 1760790
              </span>
            </span>
          </Row>

          <Row style={{ marginTop: "1rem", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faGlobe}
              style={{
                marginTop: "2px",
                borderRadius: "4px",
                padding: "8px",
                backgroundColor: "#5161ce20",
                color: "#5161ce",
              }}
            />
            <span style={{ fontWeight: "bold", marginLeft: "0.5rem" }}>
              Ülke:{" "}
              <span style={{ fontWeight: "normal", opacity: 0.7 }}>
                Türkiye
              </span>
            </span>
          </Row>

          <Row justify={"center"} style={{ marginTop: "2rem" }}>
            <Button>Düzenle</Button>
          </Row>
        </div>
        <ProfilePlan />
      </Col>
      <Col xs={23} xl={15} style={{ marginLeft: width < 576 ? "0rem" : "1rem" }}>
        <Tabs defaultActiveKey="1" items={items} />
      </Col>
    </Row>
  );
};

export default Profile;
