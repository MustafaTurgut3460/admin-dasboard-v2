import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Input, Row } from "antd";
import React from "react";
import ProfileSecurityTable from "./ProfileSecurityTable";

const ProfileSecurity = () => {
  return (
    <div>
      <Row className="card">
        <Col>
          <Row>
            <span style={{ fontSize: "1.2rem", opacity: 0.7 }}>
              Parolanı Değiştir
            </span>
          </Row>
          <Row style={{ marginTop: "1rem" }}>
            <Col>
              <Input.Password placeholder="Yeni parola..." />
            </Col>
            <Col style={{ marginLeft: "1rem" }}>
              <Input.Password placeholder="Yeni parola tekrar..." />
            </Col>
          </Row>
          <Row style={{ marginTop: "1rem" }}>
            <Button>Parola Değiştir</Button>
          </Row>
        </Col>
      </Row>

      <Row className="card">
        <Col>
          <Row>
            <Col>
              <Row>
                <p style={{ fontSize: "1.2rem", opacity: 0.7 }}>
                  2 Adımlı Doğrulama
                </p>
              </Row>
              <Row>
                <p style={{opacity: 0.5, fontSize: "0.75rem"}}>Doğrulama adımlarıyla hesabınızı güvene alın</p>
              </Row>
            </Col>
          </Row>
          <Row>
            <span style={{fontSize: "1.2rem", marginTop: "1rem", opacity: 0.5}}>SMS</span>
          </Row>
          <Row>
            <Col span={24}>
              <Input placeholder="Telefon numarası" suffix={<FontAwesomeIcon icon={faEdit} style={{opacity: 0.5}}/>}/>
            </Col>
          </Row>
          <Row style={{ marginTop: "1rem" }}>
            <span style={{opacity: 0.5, fontSize: "0.85rem"}}>İki faktörlü kimlik doğrulama, oturum açmak için yalnızca bir paroladan fazlasını gerektirerek hesabınıza ek bir güvenlik katmanı ekler.</span>
          </Row>
        </Col>
      </Row>

      <Row className="card" style={{paddingRight: 4}}>
        <p style={{fontSize: "1.2rem", opacity: 0.7, marginBottom: "1rem"}}>Recent Devices</p>
        <ProfileSecurityTable />
      </Row>
    </div>
  );
};

export default ProfileSecurity;
