import React from "react";
import { List } from "antd";
import { Link } from "@reach/router";

export default function SimilarList({ list }) {
  return (
    <List
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <p>
            <strong>{item.name}</strong>
            {`, ${item.city}, ${item.state}, ${item.country}. (Estd. ${item.founded})`}
          </p>
          <p>
            <Link to="/college_details" state={{ college: item }}>
              Know More...
            </Link>
          </p>
        </List.Item>
      )}
    />
  );
}
