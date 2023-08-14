import { Col, Row, Steps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const SteppedForm = () => {
  const [step, setStep] = useState(0);

  const form1 = (
    <>
      <Row justify={"center"}>
        <Col>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            labelCol={{span:24}}
          >
            <Row justify={"center"} style={{marginTop: "2rem"}}>
              <Col>
                <Icon
                  icon="mdi:account-details"
                  style={{
                    padding: "0.5rem",
                    backgroundColor: "#5161ce20",
                    borderRadius: "0.5rem",
                    border: "1px solid #5161ce50",
                    color: "#5161ce",
                  }}
                  fontSize={48}
                />
              </Col>
            </Row>

            <Row style={{ marginBottom: "2rem" }}>
              <Col>
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Kullanıcı Bilgileriniz
                </p>
                <p style={{ textAlign: "center", opacity: 0.5 }}>
                  Lütfen kullanıcı bilgilerinizi eksiksiz giriniz
                </p>
              </Col>
            </Row>

            <Form.Item<FieldType>
              name="name"
              label="İsim"
              rules={[{ required: true, message: "Lütfen isminizi giriniz!" }]}
              style={{ marginBottom: "0.5rem" }}
            >
              <Input style={{ marginTop: "-1rem" }} />
            </Form.Item>

            <Form.Item<FieldType>
              name="surname"
              label="Soyisim"
              rules={[
                { required: true, message: "Lütfen soyisminizi giriniz!" },
              ]}
              style={{ marginBottom: "0.5rem" }}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Lütfen email adresinizi giriniz!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                onClick={() => setStep((prev) => prev + 1)}
                block
              >
                Sonraki
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
  const form2 = (
    <>
      <Row justify={"center"}>
        <Col>
          <Row justify={"center"} style={{ marginTop: "2rem" }}>
            <Col>
              <Icon
                icon="mdi:password"
                style={{
                  padding: "0.5rem",
                  backgroundColor: "#5161ce20",
                  borderRadius: "0.5rem",
                  border: "1px solid #5161ce50",
                  color: "#5161ce",
                }}
                fontSize={48}
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: "2rem" }} justify={"center"}>
            <Col>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Parola Belirleyin
              </p>
              <p style={{ textAlign: "center", opacity: 0.5 }}>
                Lütfen güçlü bir prola belirleyin
              </p>
            </Col>
          </Row>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            labelCol={{span: 24}}
          >
            <Form.Item<FieldType>
              name="email"
              label="Parola"
              rules={[
                { required: true, message: "Please input your email address!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              label="Parola Tekrar"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType> name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                onClick={() => setStep((prev) => prev + 1)}
                block
              >
                Sonraki
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );

  const form3 = (
    <>
      <Row justify={'center'}>
        <Col>
          <Row justify={'center'} style={{marginTop: "2rem"}}>
            <Col>
              <Icon
                icon="mingcute:invite-fill"
                style={{
                  padding: "0.5rem",
                  backgroundColor: "#5161ce20",
                  borderRadius: "0.5rem",
                  border: "1px solid #5161ce50",
                  color: "#5161ce",
                }}
                fontSize={48}
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: "2rem" }}>
            <Col>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Arkadaşlarınızı Davet Edin
              </p>
              <p
                style={{
                  textAlign: "center",
                  opacity: 0.5,
                  marginLeft: "1rem",
                }}
              >
                Lütfen davet emek istediğiniz arkadaşlarınızın mail adresini
                girin
              </p>
            </Col>
          </Row>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            labelCol={{span: 24}}
          >
            <Form.Item<FieldType>
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Lütfen bir email adresi giriniz" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                onClick={() => setStep((prev) => prev + 1)}
                block
              >
                Davet Gönder
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );

  return (
    <Row align={'middle'}>
      <Col offset={3} xs={21} xl={6}>
        <Steps
          direction="vertical"
          current={step}
          items={[
            {
              title: "Kullanıcı Bilgilerini Gir",
              description:
                "Lütfen belirtilen yerlere kullanıcı bilgilerini gir",
              onClick: (e) => setStep(0),
            },
            {
              title: "Bir Parola Seç",
              description: "Kendin için güçlü bir prola seç",
              onClick: (e) => setStep(1),
            },
            {
              title: "Arkadaşlarını Davet Et",
              description: "Arkadaşlarını davet ederek ekibini büyüt",
              onClick: (e) => setStep(2),
            },
          ]}
        />
      </Col>
      <Col offset={1} xs={23} xl={6}>
        {step === 0 ? form1 : step === 1 ? form2 : form3}
      </Col>
    </Row>
  );
};

export default SteppedForm;
