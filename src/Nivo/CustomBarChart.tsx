import React from "react";
import { ResponsiveBarCanvas } from "@nivo/bar";
import { random_households } from "../api";

function CustomBarChart({ categories, households }: PropType) {
  React.useEffect(() => {}, []);

  function create_key_by_categories(): string[] {
    return categories.map((c) => {
      return c.name;
    });
  }

  /**
 * 
 * data = [
      {
        country: "AD",
        "hot dog": 3,
        burger: 141,
        ...
      },
  ]
 * 
 */
  /**
   * @returns {[{string: number}]}
   */
  function create_data() {
    const rand_households: HouseholdType[] = random_households(households, 100);
    console.log(rand_households);

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
      obj[key] = value;
    }
    return [obj];
  }

  return (
    <div className="h-full">
      {categories.length !== 0 && households.length !== 0 && (
        <ResponsiveBarCanvas
          data={create_data()}
          keys={create_key_by_categories()}
          indexBy="Expences"
          margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
          pixelRatio={1.100000023841858}
          padding={0.15}
          innerPadding={0}
          minValue="auto"
          maxValue="auto"
          groupMode="stacked"
          // bar direction
          layout="horizontal"
          reverse={false}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "red_blue" }}
          colorBy="id"
          borderWidth={0}
          borderRadius={0}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: 36,
          }}
          axisRight={null}
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
          //   tickRotation: 0,
          //   legend: "axisLeft Legend",
          //   legendPosition: "middle",
          //   legendOffset: -40,
          // }}
          enableGridX={true}
          enableGridY={false}
          // enableLabel={true}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 3.0]],
          }}
          isInteractive={true}
          legends={[]}
        />
      )}
    </div>
  );
}

export default CustomBarChart;
