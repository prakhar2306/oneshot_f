import React from "react";
import { Card, List } from "antd";

export default function StudentInfo({ location }) {
  const { student, college } = location.state;
  return (
    <Card
      title={<strong>Student Info</strong>}
      style={{ width: "100%", height: "90vh" }}
    >
      <p>
        <strong>Name: </strong>
        {student.name}
      </p>
      <p>
        <strong>Batch: </strong>
        {student.batch}
      </p>
      <List
        dataSource={student.skills}
        header={<strong>Skills</strong>}
        renderItem={(item) => (
          <List.Item style={{ paddingLeft: "20px" }}>{item}</List.Item>
        )}
      />
      <p>
        <strong>College: </strong>
        {`${college.name}, ${college.city}, ${college.state}, ${college.country}`}
      </p>
    </Card>
  );
}
