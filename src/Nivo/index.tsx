import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import CustomPieChart from "./CustomPieChart";
import CustomBarChart from "./CustomBarChart";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

function NivoIndex() {
  const [households, setHouseholds] = React.useState<HouseholdType[]>([]);
  const [categories, setCategories] = React.useState<CategoryType[]>([]);

  React.useEffect(() => {
    axios.get(BASE_URL + "/households").then((resp) => {
      setHouseholds(resp.data);
    });

    axios.get(BASE_URL + "/categories").then((resp) => {
      setCategories(resp.data);
    });
  }, []);

  return (
    <div className="h-full w-full p-4 flex flex-col justify-between items-center">
      <div className="flex-1 h-full w-full flex justify-between">
        <div className="flex-1 p-2 bg-slate-400">
          <CustomPieChart />
        </div>

        <div className="flex-1 p-2 bg-slate-500">
          <BarChart />
        </div>
      </div>

      <div className="flex-1 h-full w-full flex justify-between">
        <div className="flex-1 p-2">
          <CustomBarChart categories={categories} households={households} />
        </div>

        <div className="flex-1 p-2 bg-slate-400">
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default NivoIndex;
