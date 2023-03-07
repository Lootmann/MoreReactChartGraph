import React from "react";
import PieChart from "./PieChart";

function VictoryIndex() {
  return (
    <div className="h-full w-full p-4 flex flex-col justify-between items-center">
      <div className="flex-1 h-full w-full flex justify-between bg-yellow-800">
        <div className="flex-1 p-2 bg-red-700">
          <PieChart />
        </div>

        <div className="flex-1 p-2">
          <PieChart />
        </div>
      </div>

      <div className="flex-1 h-full w-full flex justify-between bg-green-600">
        <div className="flex-1 p-2">
          <PieChart />
        </div>

        <div className="flex-1 p-2 bg-blue-800">
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default VictoryIndex;
