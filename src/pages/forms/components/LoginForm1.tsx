import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginForm1 = () => {
  return (
    <Row className="card" style={{ padding: 0 }}>
      <Col
        span={12}
        style={{
          backgroundColor: "#67c86d",
          borderTopLeftRadius: "1rem",
          borderBottomLeftRadius: "1rem",
          paddingTop: "8rem",
          paddingBottom: "8rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={require("../../../assets/images/login1.png")}
            alt=""
            style={{ width: "50%" }}
          />
        </div>
        <p style={{ textAlign: "center", color: "white", fontSize: "1.2rem" }}>
          Fun & Interesting Learning
        </p>
        <p
          style={{
            color: "#e5e5e5",
            textAlign: "center",
            width: "70%",
            margin: "auto",
            marginTop: "1rem",
          }}
        >
          Burada sayfanın açıklama kısmı var biraz uzun bir açıklama olabilir,
          ikinci satıra geçmesi gerekiyor
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button style={{ marginTop: "2rem" }} shape="circle" type="primary">
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </Col>
      <Col
        span={12}
        style={{ padding: "2rem", display: "flex", alignItems: "center" }}
      >
        <div style={{ width: "100%" }}>
          <p style={{ fontSize: "1.1rem", fontWeight: "bold" }}>Login</p>
          <Form
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 12 }}
            style={{ maxWidth: 600, marginTop: "3rem" }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
              style={{ marginBottom: 10 }}
            >
              <Input placeholder="Email Address" />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              style={{ marginBottom: 10 }}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              wrapperCol={{ span: 12 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 12 }}>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
          <a href="">Forgot password?</a>
          <Row style={{ marginTop: "2rem" }}>
            <Col span={5} style={{ display: "flex", justifyContent: "end" }}>
              <img
                src={require("../../../assets/images/facebook.png")}
                alt=""
                style={{ width: 24 }}
              />
            </Col>
            <Col
              span={5}
              style={{
                display: "flex",
                justifyContent: "start",
                marginLeft: "1rem",
              }}
            >
              <img
                src={require("../../../assets/images/google.png")}
                alt=""
                style={{ width: 24 }}
              />
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default LoginForm1;
