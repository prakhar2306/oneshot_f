import React from "react";
import { List, Card, Collapse } from "antd";
import { Link } from "@reach/router";

const { Panel } = Collapse;

export default function StudentList({ list, college }) {
  return (
    <List
      dataSource={list}
      renderItem={(student) => (
        <List.Item>
          <Card style={{ width: "100%" }}>
            <p>
              <strong>Name: </strong>
              {student.name}
            </p>
            <p>
              <strong>Batch: </strong>
              {student.batch}
            </p>
            <Collapse>
              <Panel header={<strong>Skills</strong>} key={student._id}>
                <List
                  dataSource={student.skills}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </Panel>
            </Collapse>
            <p style={{ paddingTop: "20px" }}>
              <strong>
                <Link
                  to="/student_details"
                  state={{ student: student, college: college }}
                >
                  Know More...
                </Link>
              </strong>
            </p>
          </Card>
        </List.Item>
      )}
    />
  );
}
