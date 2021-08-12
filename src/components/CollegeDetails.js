import React from "react";
import { Card } from "antd";
import CollegeInfo from "./CollegeInfo";
import StudentList from "./StudentList";
import SimilarList from "./SimilarList";

const tabList = [
  {
    key: "details",
    tab: "Details",
  },
  {
    key: "students",
    tab: "Students",
  },
  {
    key: "similar",
    tab: "Similar",
  },
];

function CollegeDetails(props) {
  const [tabKey, setTabKey] = React.useState("details");
  const [data, setData] = React.useState(undefined);
  const { college } = props.location.state;
  const onTabChange = (key) => {
    setTabKey(key);
  };
  React.useEffect(() => {
    async function makeRequest() {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let raw = JSON.stringify({ college: college });
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      const response = await fetch(
        "https://oneshotdb.herokuapp.com/api/college_details",
        requestOptions
      );
      const resJSON = await response.json();
      setData(resJSON);
    }
    makeRequest();
  }, [college]);

  if (data) {
    return (
      <Card
        className="right-card"
        tabList={tabList}
        activeTabKey={tabKey}
        onTabChange={(key) => {
          onTabChange(key);
        }}
      >
        {tabKey === "details" ? (
          <CollegeInfo info={data.details} />
        ) : tabKey === "students" ? (
          <StudentList list={data.students} college={data.details} />
        ) : (
          <SimilarList list={data.similar} />
        )}
      </Card>
    );
  } else
    return (
      <Card
        className="right-card"
        tabList={tabList}
        activeTabKey={tabKey}
        onTabChange={(key) => {
          onTabChange(key);
        }}
      >
        Loading...
      </Card>
    );
}

export default CollegeDetails;
