import React from "react";
import { Card, Table } from "antd";
import { useNavigate } from "@reach/router";

export default function CollegeList(props) {
  const { type } = props;
  const { state } = props.location;
  const navigate = useNavigate();
  function onRowClick(college) {
    navigate("/college_details", {
      state: {
        college: college,
      },
    });
  }

  const projection = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "City",
      key: "city",
      dataIndex: "city",
    },
    {
      title: "Founded",
      key: "founded",
      dataIndex: "founded",
    },
  ];

  const titlePart =
    type === "state" ? `in ${state.id}` : `offering ${state.id}`;
  return (
    <Card
      title={"List of colleges " + titlePart}
      style={{ width: "100%", height: "90vh" }}
    >
      <Table
        dataSource={state.colleges.sort((a, b) => a.name < b.name)}
        columns={projection}
        rowKey="_id"
        onRow={(record) => ({
          onClick: () => onRowClick(record),
        })}
      />
    </Card>
  );
}
