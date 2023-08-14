import React from "react";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";

type FieldType = {
  email?: string;
  username?: string;
  password?: string;
  remember?: string;
};

const BasicRegisterForm = () => {
  return (
    <Row justify={'center'}>
      <Col xs={24} lg={16} xxl={12}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined style={{ color: "gray" }} />}
              placeholder="Username"
            />
          </Form.Item>
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

          <Form.Item<FieldType> name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default BasicRegisterForm;
