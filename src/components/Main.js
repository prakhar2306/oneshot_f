import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function Main() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <LeftSection />
      <RightSection />
    </div>
  );
}
