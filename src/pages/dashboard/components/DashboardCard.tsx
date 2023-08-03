import { Button, Col, Divider, Row } from "antd";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import DashboardCardLineChart from "./DashboardCardLineChart";

interface Props {
  color: string,
  data: {x: string, y: number}[],
  dataName: string,
}

const DashboardCard: React.FC<Props> = ({color, data, dataName}) => {
  return (
    <div className="card">
      <Row style={{alignItems: "center"}}>
        {/* info */}
        <Col span={8}>
          <p style={{ fontSize: "0.75rem", opacity: 0.5 }}>Gösterimler</p>
          <p style={{ fontSize: "1.5rem" }}>36,6K</p>
        </Col>
        {/* chart */}
        <Col span={16}>
          <DashboardCardLineChart color={color} data={data} dataName={dataName} />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
        <Button type="text" style={{ marginLeft: "-1rem", opacity: 0.7}}>Tümünü Gör <FontAwesomeIcon icon={faArrowRight} style={{marginLeft: "0.5rem"}}/></Button>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardCard;
