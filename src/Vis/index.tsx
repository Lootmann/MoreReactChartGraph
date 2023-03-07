import React from "react";

function VisIndex() {
  return (
    <div className="h-full w-full p-4 flex flex-col justify-between items-center">
      <div className="flex-1 h-full w-full flex justify-between bg-yellow-800">
        <div className="flex-1 p-2 bg-red-700">
          <h2>hoge</h2>
        </div>

        <div className="flex-1 p-2">
          <h2>hoge</h2>
        </div>
      </div>

      <div className="flex-1 h-full w-full flex justify-between bg-green-600">
        <div className="flex-1 p-2">
          <h2>hoge</h2>
        </div>

        <div className="flex-1 p-2 bg-blue-800">
          <h2>hoge</h2>
        </div>
      </div>
    </div>
  );
}

export default VisIndex;
