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
import CountUp from "react-countup";
import BasicColumnBarChart from "../bar-chart/components/BasicColumnBarChart";
import BasicBarChart from "../bar-chart/components/BasicBarChart";

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

  const data1: { x: string; y: number }[] = [
    { x: "Ocak", y: 12 },
    { x: "Şubat", y: 15 },
    { x: "Mart", y: 52 },
    { x: "Nisan", y: 22 },
    { x: "Mayıs", y: 53 },
    { x: "Haziran", y: 66 },
    { x: "Temmuz", y: 100 },
    { x: "Ağustos", y: 23 },
    { x: "Eylül", y: 11 },
  ];
  const data2: { x: string; y: number }[] = [
    { x: "Ocak", y: 25 },
    { x: "Şubat", y: 23 },
    { x: "Mart", y: 65 },
    { x: "Nisan", y: 12 },
    { x: "Mayıs", y: 20 },
    { x: "Haziran", y: 25 },
    { x: "Temmuz", y: 45 },
    { x: "Ağustos", y: 23 },
    { x: "Eylül", y: 10 },
  ];
  const data3: { x: string; y: number }[] = [
    { x: "Ocak", y: 65 },
    { x: "Şubat", y: 76 },
    { x: "Mart", y: 100 },
    { x: "Nisan", y: 50 },
    { x: "Mayıs", y: 30 },
    { x: "Haziran", y: 20 },
    { x: "Temmuz", y: 45 },
    { x: "Ağustos", y: 56 },
    { x: "Eylül", y: 21 },
  ];
  const data4: { x: string; y: number }[] = [
    { x: "Ocak", y: 100 },
    { x: "Şubat", y: 80 },
    { x: "Mart", y: 70 },
    { x: "Nisan", y: 65 },
    { x: "Mayıs", y: 87 },
    { x: "Haziran", y: 97 },
    { x: "Temmuz", y: 50 },
    { x: "Ağustos", y: 20 },
    { x: "Eylül", y: 10 },
  ];

  return (
    <div style={{ marginTop: "2rem" }}>
      <Row justify={"space-between"}>
        <Col xs={24} md={11} xxl={6}>
          <DashboardCard
            color={"#5161ce"}
            data={data1}
            dataName={"Veri 1"}
            label={"Gösterimler"}
            value={451564}
          />
        </Col>
        <Col xs={24} md={11} lg={11} xxl={6}>
          <DashboardCard
            color={"#d1757e"}
            data={data2}
            dataName={"Veri 2"}
            label={"Aylık Gelir (₺)"}
            value={41251}
          />
        </Col>
        <Col xs={24} md={11} xxl={6}>
          <DashboardCard
            color={"#66ccbe"}
            data={data3}
            dataName={"Veri 3"}
            label={"Site Günlük Ziyaret"}
            value={5622}
          />
        </Col>
        <Col xs={24} md={11} xxl={5}>
          <DashboardCard
            color={"#5c8bd6"}
            data={data4}
            dataName={"Veri 4"}
            label={"Kullanıcı Sayısı"}
            value={4632}
          />
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

      <Row justify={"space-between"}>
        {/* donut chart */}
        <Col xs={24} xl={12} className="card">
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
          <BasicBarChart />
        </Col>
        {/* line chart */}
        <Col xs={24} xl={11} className="card">
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
          <BasicColumnBarChart />
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
          <Row
            style={{ alignItems: "center", marginBottom: "2rem" }}
            justify={"space-between"}
          >
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
          <ProductItem
            name={"Ürün İsmi"}
            description={"Ürün açıklaması"}
            tagColor={"gold"}
            image={p1}
            number={1}
          />
          <ProductItem
            name={"Ürün İsmi"}
            description={"Ürün açıklaması"}
            tagColor={"geekblue"}
            image={p2}
            number={2}
          />
          <ProductItem
            name={"Ürün İsmi"}
            description={"Ürün açıklaması"}
            tagColor={"orange"}
            image={p3}
            number={3}
          />
          <ProductItem
            name={"Ürün İsmi"}
            description={"Ürün açıklaması"}
            tagColor={"default"}
            image={p1}
            number={4}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
