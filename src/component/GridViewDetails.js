import React from "react";
import { Row, Col, Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import Specifications from "./Specifications";

const GridViewDetails = props => {
 
  return (
    <div>
      <Row gutter={16}>
        <Col span={24}>
          <h1>
            {props.filteredLaptop.length > 0
              ? props.filteredLaptop[0].title
              : "HP 15 Core i3 7th Gen - (8 GB/1 TB HDD/Windows 10 Home) 15-da0400TU Laptop"}
          </h1>
        </Col>
        <Col span={8} offset={8}>
          '#just Here'
        </Col>
      </Row>
      <Row gutter={4}>
        <Col span={4}>
        <Rate defaultValue={3} />
        </Col>
        <Col span={4}>
          <p>'5,200 Ratings & 578 Reviews'</p>
        </Col>
      </Row>
      <Row>
        <Col span={3}>
          <h2>
            <b>'28000'</b>
          </h2>
        </Col>
        <Col span={4}>
          <h3>
            <strike>'26000'</strike>
          </h3>
        </Col>
        <Col span={4}>
          <h4>'12%'</h4>
        </Col>
        <Col span={4}>
          <HeartOutlined />
        </Col>
      </Row>
      <Row gutter={4}>
        <Col span={3}>"Delivery"</Col>
        <Col offset={1}>
          <Row>
            <input type="text" /> "check"
          </Row>
          <Row>Usually delivered in7-8 days</Row>
        </Col>
      </Row>
      <Row gutter={9}>
        <Col span={3}>"Highlights"</Col>
        <Col span={5} offset={1}>
          15.6 inch Full HD LED Backlit Anti-glare TN Display
        </Col>
        <Col span={3} offset={2}>
          Easy Payment Options
        </Col>
        <Col span={6}>
          No cost EMI starting from ₹4,832/month Cash on Delivery Net banking &
          Credit/ Debit/ ATM card
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={3} offset={1}>
          'Seller'
        </Col>
        <Col>
          RetailNet4.6 10 Days Replacement Policy? View more sellers starting
          from ₹27,990
        </Col>
      </Row>
      <div>
          <Specifications filteredLaptop = {props.filteredLaptop} />
          </div>

    </div>
  );
};

export default GridViewDetails;
