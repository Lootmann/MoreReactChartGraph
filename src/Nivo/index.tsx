import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

function NivoIndex() {
  return (
    <div className="h-full w-full p-4 flex flex-col justify-between items-center">
      <div className="flex-1 h-full w-full flex justify-between">
        <div className="flex-1 p-2">
          <BarChart />
        </div>

        <div className="flex-1 p-2 bg-yellow-800">
          <h2>hoge</h2>
        </div>
      </div>

      <div className="flex-1 h-full w-full flex justify-between">
        <div className="flex-1 p-2">
          <PieChart />
        </div>

        <div className="flex-1 p-2 bg-blue-800">
          <h2>hoge</h2>
        </div>
      </div>
    </div>
  );
}

export default NivoIndex;
