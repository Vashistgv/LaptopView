import React from "react";
import { Row, Col } from "antd";

const Specifications = props => {
  const data = props.filteredLaptop[0]
    ? props.filteredLaptop[0].attributeCategories
    : [];
  return (
    <div>
      <Row>
        <Col span={24}>
          <h1> Specifications </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3> General</h3>
        </Col>
      </Row>
      <div>
        {data &&  Object.keys(data).length> 0
          ? data.general.map(item => {
              return(<Row>
                <Col span={3}>{item.attributeName}</Col>
                <Col offset={2}>{item.attributeValue}</Col>
              </Row>)
            })
          : ""}
      </div>
      <Row>
        <Col>
          <h3> Processor And Memory Features </h3>
        </Col>
      </Row>
      <div>
        {data &&  Object.keys(data).length> 0
          ? data.processor.map(item => {
              return(<Row>
                <Col span={3}>{item.attributeName}</Col>
                <Col offset={2}>{item.attributeValue}</Col>
              </Row>)
            })
          : ""}
      </div>
      <div>
      {data &&  Object.keys(data).length> 0
          ? data.ram.map(item => {
              return(<Row>
                <Col span={3}>{item.attributeName}</Col>
                <Col offset={2}>{item.attributeValue}</Col>
              </Row>)
            })
          : ""}
      </div>
      <div>
      {data &&  Object.keys(data).length> 0
          ? data.storage.map(item => {
              return(<Row>
                <Col span={3}>{item.attributeName}</Col>
                <Col offset={2}>{item.attributeValue}</Col>
              </Row>)
            })
          : ""}
      </div>
    </div>
  );
};

export default Specifications;
