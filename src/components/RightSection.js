import React from "react";
import { Router } from "@reach/router";

import CollegeDetails from "./CollegeDetails";
import CollegeList from "./CollegeList";
import StudentInfo from "./StudentInfo";

export default function RightSection() {
  return (
    <div
      style={{
        width: window.innerWidth <= 500 ? "90%" : "50%",
        margin: "auto",
        height: "90vh",
      }}
    >
      <Router>
        <CollegeList path="list/:type" />
        <CollegeDetails path="college_details" />
        <StudentInfo path="student_details" />
      </Router>
    </div>
  );
}
