import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { nivo_piechart_data } from "../util";
import axios from "axios";

type CategoryType = {
  id: number;
  name: string;
};

type HouseholdType = {
  id: number;
  amount: number;
  registered_at: string;
  memo: string;
  category: CategoryType;
};

const BASE_URL = "http://localhost:3000";

function CustomPieChart() {
  const [categories, setCategories] = React.useState<CategoryType[]>([]);
  const [households, setHouseholds] = React.useState<HouseholdType[]>([]);

  React.useEffect(() => {
    axios.get(BASE_URL + "/categories").then((resp) => {
      setCategories(resp.data);
    });

    axios.get(BASE_URL + "/households").then((resp) => {
      setHouseholds(resp.data);
    });
  }, []);

  function random_idx(households: HouseholdType[]) {
    return Math.floor(Math.random() * households.length);
  }

  function createFillByCategories(categories: CategoryType[]) {
    /**
      [
          { match: { id: "AkEFYD" }, id: "dots" },
          { match: { id: "ruby" }, id: "dots" },
          { match: { id: "c" }, id: "dots" },
          { match: { id: "go" }, id: "dots" },
          { match: { id: "python" }, id: "dots" },
          { match: { id: "scala" }, id: "lines" },
          { match: { id: "lisp" }, id: "lines" },
          { match: { id: "elixir" }, id: "lines" },
          { match: { id: "javascript" }, id: "lines" },
        ] 
 *  */
    const res = [
      categories.map((c) => {
        return { match: { id: c.name }, id: "dots" };
      }),
    ];
    console.log(typeof res);
    console.dir(res);
    return res;
  }

  // convert households data to nivo's records
  function conv(categories: CategoryType[], households: HouseholdType[]) {
    // {
    //   id: "hoge",
    //   label: "hoge",
    //   value: 229,
    //   color: "hsl(69, 70%, 50%)",
    // },
    const res = categories.map((c) => {
      return {
        id: c.name,
        label: c.name,
        value: 0,
        color: "hsl(69, 70%, 50%)",
      };
    });

    for (let i = 0; i < 30; ++i) {
      const random_households = households[random_idx(households)];
      res.map((r) => {
        if (random_households.category.name == r.id) {
          r.value += random_households.amount;
        }
      });
    }

    return res;
  }

  return (
    <div className="h-full">
      {households.length !== 0 && (
        <ResponsivePie
          data={conv(categories, households)}
          theme={{
            legends: { text: { fontSize: 12 } },
            labels: { text: { fontSize: 14 } },
          }}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={2}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#111111"
          arcLinkLabelsThickness={3}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          // fill={createFillByCategories(categories)}
          fill={[{ match: { id: "NRmEnV" }, id: "dots" }]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 24,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      )}
    </div>
  );
}

export default CustomPieChart;
