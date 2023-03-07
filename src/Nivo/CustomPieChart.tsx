import React from "react";
import { ResponsivePie } from "@nivo/pie";
import axios from "axios";

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

  /**
   * create fill data by categories
   *
   * @param {CategoryType[]} categories
   * @return {FillType[]}
   */
  function createFillByCategories(categories: CategoryType[]): FillType[] {
    // id should have dots, lines, squares
    const random_pattern = (): string => {
      const patterns = ["dots", "lines", "squares"];
      return patterns[Math.floor(Math.random() * patterns.length)];
    };

    const res: FillType[] = [];
    categories.forEach((c) => {
      res.push({ match: { id: c.name }, id: random_pattern() });
    });

    return res;
  }

  /**
   * function conv
   * convert households data to nivo's records
   * set type hint to everything. It's not even readably :^)
   *
   * @param {CategoryType[]} categories
   * @param {HouseholdType[]} households
   * @return {ConvType[]}
   */
  function conv(
    categories: CategoryType[],
    households: HouseholdType[]
  ): ConvType[] {
    const res: ConvType[] = categories.map((c) => {
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
            // legends: { text: { fontSize: 10 } },
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
          fill={createFillByCategories(categories)}
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
