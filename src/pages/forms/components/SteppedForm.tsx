import { Col, Row, Steps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

enum Status{
  Finished = "Tamamlandı",
  InProgress = "Devam Ediliyor",
  Waiting = "Bekliyor"
}

const SteppedForm = () => {
  const [step, setStep] = useState(0);


  return (
    <Row>
      <Col offset={3} span={3}>
        <Steps
          direction="vertical"
          current={step}
          items={[
            {
              title: step !== 0 ? Status.Finished : Status.InProgress,
              description: "Açıklama kısmı 1",
            },
            {
              title: step === 0 ? Status.Waiting : (step === 1 ? Status.InProgress : Status.Finished),
              description: "Açıklama kısmı 2",
            },
            {
              title: (step === 0 || step === 1) ? Status.Waiting : (step === 2 ? Status.InProgress : Status.Finished),
              description: "Açıklama kısmı 3",
            },
          ]}
        />
      </Col>
      <Col span={12}>
        <Form
          name="basic"
          labelCol={{offset: 6, span: 24}}
          wrapperCol={{ offset: 6, span: 12 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your email address!" },
            ]}
          >
            <Input
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
            />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button type="primary" onClick={() => setStep((prev) => prev+1)}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default SteppedForm;
