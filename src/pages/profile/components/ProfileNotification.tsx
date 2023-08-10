import { Button, Checkbox, Col, Row } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import React from "react";
import useWindowDimensions from "../../../hooks/window-dimention";

interface DataType {
  key: string;
  type: string;
  email: boolean;
  browser: boolean;
  app: boolean;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    width: 500,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (checked) => <Checkbox checked={checked} />,
  },
  {
    title: "Browser",
    dataIndex: "browser",
    key: "browser",
    render: (checked) => <Checkbox checked={checked} />,
  },
  {
    title: "App",
    key: "app",
    dataIndex: "app",
    render: (checked) => <Checkbox checked={checked} />,
  },
];

const data: DataType[] = [
  {
    key: "1",
    type: "New for you",
    email: true,
    browser: false,
    app: false,
  },
  {
    key: "2",
    type: "Account activity",
    email: true,
    browser: false,
    app: true,
  },
  {
    key: "3",
    type: "A new browser used log in",
    email: false,
    browser: false,
    app: false,
  },
  {
    key: "4",
    type: "A new device is linked",
    email: false,
    browser: true,
    app: false,
  },
];

const ProfileNotification = () => {
  const {width} = useWindowDimensions();

  return (
    <Row className="card" style={{ width: "100%" }}>
      <Col>
        <Row>
          <p style={{ fontSize: "1.25rem" }}>Bildirimler</p>
        </Row>
        <Row>
          <p style={{ fontSize: "0.85rem", opacity: 0.5 }}>
            Aşağıda seçilen durumlarda bildirim alacaksınız
          </p>
        </Row>
        <Row style={{ marginTop: "1rem" }}>
          <Table dataSource={data} columns={columns} scroll={{x: width/3}}/>
        </Row>
        <Row style={{ marginTop: "2rem" }}>
          <Col>
            <Button type="primary">Save Changes</Button>
          </Col>
          <Col>
            <Button style={{marginLeft: "1rem"}} type="default">Discard</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ProfileNotification;
