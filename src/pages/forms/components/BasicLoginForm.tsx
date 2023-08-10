import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const BasicLoginForm = () => {
  return (
    <Form
      name="basic"
      wrapperCol={{offset:6, span: 12 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        name="email"
        rules={[{ required: true, message: "Please input your email address!" }]}
      >
        <Input prefix={<MailOutlined style={{color: "gray"}}/>} placeholder="Email Address"/>
      </Form.Item>

      <Form.Item<FieldType>
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password prefix={<LockOutlined style={{color: "gray"}}/>} placeholder="Password"/>
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 6, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BasicLoginForm;
