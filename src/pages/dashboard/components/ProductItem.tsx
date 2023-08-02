import { Col, Divider, Row, Tag } from "antd";
import { PresetColorType } from "antd/es/_util/colors";
import { LiteralUnion } from "antd/es/_util/type";
import React from "react";

interface Props{
    name: string,
    description: string,
    tagColor:  LiteralUnion<PresetColorType | "success" | "processing" | "error" | "default" | "warning"> | undefined,
    image: string,
    number: number
}

const ProductItem: React.FC<Props> = ({name, description, tagColor, image, number}) => {
  return (
    <Row justify={"space-between"} style={{ alignItems: "center" }}>
      <Col>
        <Row style={{ alignItems: "center" }}>
          <Col>
            <img
              src={image}
              alt=""
              style={{ width: 84, height: 84, borderRadius: 4 }}
            />
          </Col>
          <Col style={{ marginLeft: "1rem" }}>
            <p> {name} </p>
            <p style={{ fontSize: "0.75rem", opacity: 0.5 }}>
              {description}
            </p>
          </Col>
        </Row>
      </Col>
      <Col>
        <p style={{ color: "green" }}>1341</p>
        <p style={{ fontSize: "0.75rem", opacity: 0.4 }}>indirimde</p>
      </Col>
      <Col>
        <Tag color={tagColor}> #{number} </Tag>
      </Col>
      <Divider />
    </Row>
  );
};

export default ProductItem;
