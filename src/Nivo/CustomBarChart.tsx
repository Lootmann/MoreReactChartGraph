import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { random_households } from "../api";

function CustomBarChart({ categories, households }: PropType) {
  React.useEffect(() => {}, []);

  function create_key_by_categories(): string[] {
    return categories.map((c) => {
      return c.name;
    });
  }

  /**
   * @returns {[{string: number}]}
   */
  function create_data(): [{ string: number }] {
    const rand_households: HouseholdType[] = random_households(households, 100);

    // init by categories
    const category_amounts = new Map<string, number>();
    categories.slice(0, 6).forEach((c) => {
      category_amounts.set(c.name, 0);
    });

    // calc all households amount by each categories
    rand_households.forEach((r) => {
      const amount: number | undefined = category_amounts.get(r.category.name);
      if (amount !== undefined)
        category_amounts.set(r.category.name, amount + r.amount);
    });

    const obj: any = {};
    obj["Expences"] = "My Cash";
    for (const [key, value] of category_amounts) {
      obj[key] = Math.floor(value / 100);
    }
    return [obj];
  }

  return (
    <div className="h-full">
      {categories.length !== 0 && households.length !== 0 && (
        <ResponsiveBar
          data={create_data()}
          keys={create_key_by_categories()}
          // indexBy="Expences"
          theme={{
            fontSize: 20,
            axis: { ticks: { text: { fontSize: 20 } } },
            // legends: { text: { fontSize: 10 }, },
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "right",
              direction: "column",
              itemWidth: 10,
              itemHeight: 25,
            },
          ]}
          margin={{ top: 50, right: 120, bottom: 50, left: 60 }}
          padding={0.2}
          innerPadding={0}
          minValue="auto"
          maxValue={50000}
          groupMode="stacked"
          // bar direction
          layout="horizontal"
          reverse={false}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          // bar color
          colors={{ scheme: "set3" }}
          colorBy="id"
          borderWidth={0}
          borderRadius={0}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          // axisTop={{
          //   tickSize: 5,
          //   tickPadding: 5,
          //   tickRotation: 0,
          //   legend: "",
          //   legendOffset: 36,
          //   tickValues: [0, 5000, 10000, 15000, 20000],
          // }}
          axisRight={null}
          axisBottom={null}
          // axisBottom={{
          //   tickSize: 5,
          //   tickPadding: 5,
          //   tickRotation: 0,
          //   legend: "axisBottom Legend",
          //   legendPosition: "middle",
          //   legendOffset: 36,
          // }}
          // axisLeft={{
          //   tickSize: 5,
          //   tickPadding: 5,
          //   tickRotation: 10,
          //   legendPosition: "middle",
          //   legendOffset: -40,
          // }}
          enableGridX={false}
          enableGridY={false}
          enableLabel={true}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 3.0]],
          }}
          isInteractive={true}
        />
      )}
    </div>
  );
}

export default CustomBarChart;
