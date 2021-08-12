import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { useNavigate } from "@reach/router";

const CoursesChart = () => {
  const [data, setData] = React.useState(undefined);
  const navigate = useNavigate();
  function onChartClick(group) {
    navigate("/list/course", { state: group.data });
  }
  React.useEffect(() => {
    async function fetAndSetData() {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      const res = await fetch(
        "https://oneshotdb.herokuapp.com/api/colleges_by_courses",
        requestOptions
      );
      const jsonData = await res.json();
      const resData = jsonData.map((group, idx) => {
        return {
          id: `${group._id.courses}`,
          label: `${group._id.courses}`,
          value: group.colleges.length,
          colleges: group.colleges,
        };
      });
      setData(resData);
    }
    fetAndSetData();
  }, []);

  if (data) {
    return (
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 20, bottom: 80, left: 20 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={2}
        colors={{ scheme: "pastel1" }}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        onClick={onChartClick}
      />
    );
  } else return <div className="chart-loading">Loading Chart</div>;
};

export default CoursesChart;
