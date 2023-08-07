import { Button, Col, Input, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Row>
      <Col xs={24} lg={12} xxl={18} style={{ marginTop: "5rem" }}>
        <h1 style={{ textAlign: "center" }}>Merhaba, Tekrar Hoşgeldin</h1>
        <p style={{ textAlign: "center", opacity: 0.5 }}>
          Lütfen devam etmek için hesabınla giriş yap
        </p>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img
            src={require("../../assets/illustrations/business-presentation.png")}
            alt=""
            style={{ width: "60%", margin: "auto" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5rem",
          }}
        >
          <Row justify={"center"} align={"middle"}>
            <Col>
              <img
                src={require("../../assets/images/apple.png")}
                alt=""
                style={{ width: 32 }}
              />
            </Col>
            <Col style={{ marginLeft: "0.75rem" }}>
              <img
                src={require("../../assets/images/microsoft.png")}
                alt=""
                style={{ width: 32 }}
              />
            </Col>
            <Col style={{ marginLeft: "0.75rem" }}>
              <img
                src={require("../../assets/images/android.png")}
                alt=""
                style={{ width: 32 }}
              />
            </Col>
          </Row>
        </div>
      </Col>
      <Col
        xs={24}
        lg={12}
        xxl={6}
        style={{
          backgroundColor: "var(--color-white)",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{padding: 40, width: "100%"}}>

          <h1>Giriş Yap</h1>
          <p style={{opacity: 0.7, marginTop: "1rem"}}>
            Hesabın yok mu? <a href="">Hemen Oluştur!</a>
          </p>

          <Input placeholder="Eposta Adresi" size="large" style={{marginTop: "2rem", width: "80%"}}/>
          <Input.Password placeholder="Parola" size="large" style={{marginTop: "1rem", width: "80%"}}/>
          <div style={{width: "80%", display: "flex", justifyContent: "end", marginTop: "1rem"}}>
            <a href="">Şifreni mi Unuttun?</a>
          </div>
          <Button style={{marginTop: "2rem", width: "80%"}} block type="primary" size="large" onClick={() => navigate("/")}>Giriş Yap</Button>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
