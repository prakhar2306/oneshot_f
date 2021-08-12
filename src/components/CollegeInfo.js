import React from "react";
import { Card, List } from "antd";

export default function CollegeInfo({ info }) {
  return (
    <Card type="inner" title={info.name}>
      <p>
        <strong>Location:</strong>{" "}
        {`${info.city}, ${info.state}, ${info.country}`}
      </p>
      <List
        dataSource={info.courses}
        header={<strong>Courses Offered</strong>}
        renderItem={(item) => (
          <List.Item style={{ paddingLeft: "40px" }}>{item}</List.Item>
        )}
      />
      <p>
        <strong>Founded:</strong> {info.founded}
      </p>
      <p>
        <strong>Student Strength:</strong> {info.num_students}
      </p>
    </Card>
  );
}
