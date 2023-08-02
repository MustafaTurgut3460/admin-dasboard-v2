import { Button, Col, Dropdown, MenuProps, Row, Space } from "antd";
import DashboardCard from "./components/DashboardCard";
import SidebarMenu from "../layout/components/SidebarMenu";
import DashboardDonutChart from "./components/DashboardDonutChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faChartSimple,
  faCircleInfo,
  faEllipsis,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import DashboardLineChart from "./components/DashboardLineChart";
import { useState } from "react";
import DashboardBasicTable from "./components/DashboardBasicTable";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import ProductItem from "./components/ProductItem";

import p1 from "../../assets/images/product1.jpg";
import p2 from "../../assets/images/product2.jpg";
import p3 from "../../assets/images/product3.jpg";

const items: MenuProps["items"] = [
  {
    label: 2020,
    key: 2020,
  },
  {
    label: 2021,
    key: 2021,
  },
  {
    label: 2022,
    key: 2022,
  },
  {
    label: 2023,
    key: 2023,
  },
];

const Dashboard = () => {
  const [year, setYear] = useState(2020);

  const onClick: MenuProps["onClick"] = ({ key }) => {
    setYear(parseInt(key));
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <Row justify={'space-around'}>
        <Col xs={16} lg={9} xl={6}>
          <DashboardCard />
        </Col>
        <Col xs={16} lg={9} xl={6}>
          <DashboardCard />
        </Col>
        <Col xs={16} lg={9} xl={6}>
          <DashboardCard />
        </Col>
        <Col xs={16} lg={9} xl={5}>
          <DashboardCard />
        </Col>
      </Row>
      <Row justify={"space-between"}>
        {/* donut chart */}
        <Col xs={24} xl={8} className="card">
          <Row
            justify={"space-between"}
            style={{ alignItems: "center", marginBottom: "1rem" }}
          >
            <Col>
              <p style={{ fontSize: "1.1rem" }}>Cihaz Dağılımı</p>
            </Col>
            <Col>
              <p style={{ color: "#19c919" }}>
                +2.5k <FontAwesomeIcon icon={faChartSimple} />
              </p>
            </Col>
          </Row>
          <DashboardDonutChart />
        </Col>
        {/* line chart */}
        <Col xs={24} xl={15} className="card">
          <Row justify={"space-between"} style={{ alignItems: "center" }}>
            <Col>
              <p style={{ fontSize: "1.1rem" }}>Yıllık Satış</p>
              <p style={{ fontSize: "0.8rem", opacity: 0.5 }}>
                Geçen seneden (+43%) daha fazla
              </p>
            </Col>
            <Col>
              <Dropdown menu={{ items, onClick }} trigger={["click"]}>
                <a onClick={() => {}}>
                  <Space>
                    {year}
                    <FontAwesomeIcon icon={faArrowDown} />
                  </Space>
                </a>
              </Dropdown>
            </Col>
          </Row>
          <DashboardLineChart />
        </Col>
      </Row>

      <Row>
        <Col xs={24} xl={15} className="card">
          <Row
            style={{ alignItems: "center", marginBottom: "3rem" }}
            justify={"space-between"}
          >
            <Col>
              <p style={{ fontSize: "1.2rem" }}>
                En Çok Ziyaret Edilen Ürünler
              </p>
            </Col>
            <Col>
              <Button type="default" shape="circle">
                <FontAwesomeIcon icon={faInfo} />
              </Button>
            </Col>
          </Row>
          <DashboardBasicTable />
        </Col>
        <Col offset={1} xs={24} xl={8} className="card">
          <Row style={{alignItems: "center", marginBottom: "2rem"}} justify={'space-between'}>
            <Col>
              <p>En Çok Satan Ürünler</p>
            </Col>
            <Col>
              <Button type="text" shape="circle">
                <FontAwesomeIcon
                  icon={faEllipsis}
                  fontSize={24}
                  opacity={0.5}
                />
              </Button>
            </Col>
          </Row>
          <ProductItem name={"Ürün İsmi"} description={"Ürün açıklaması"} tagColor={"gold"} image={p1} number={1} />
          <ProductItem name={"Ürün İsmi"} description={"Ürün açıklaması"} tagColor={"geekblue"} image={p2} number={2} />
          <ProductItem name={"Ürün İsmi"} description={"Ürün açıklaması"} tagColor={"orange"} image={p3} number={3} />
          <ProductItem name={"Ürün İsmi"} description={"Ürün açıklaması"} tagColor={"default"} image={p1} number={4} />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
