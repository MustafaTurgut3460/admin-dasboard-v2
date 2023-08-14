import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React from "react";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const BasicLoginForm = () => {
  return (
    <Row justify={'center'}>
      <Col xs={24} lg={16} xxl={12}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="email"
            rules={[
              { required: true, message: "Please input your email address!" },
            ]}
          >
            <Input
              prefix={<MailOutlined style={{ color: "gray" }} />}
              placeholder="Email Address"
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: "gray" }} />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item style={{display: "flex", justifyContent: "center"}}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default BasicLoginForm;
