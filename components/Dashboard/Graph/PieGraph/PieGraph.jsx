import React, { useState } from "react";
import styles from "./../../../../styles/PieGraph.module.css";
import { PieChart } from "react-minimal-pie-chart";
import { DataPieDisplay } from "./DataPieDisplay";

const PieGraph = () => {
  const [displayPieData, setDisplayPieData] = useState(DataPieDisplay[0]["data"][0]);

  const setPieData = (e) => {
    const dataIndex = e.target.value;
    setDisplayPieData(DataPieDisplay[dataIndex]["data"][0]);
  };

  return (
    <div className={styles["pie-container"]}>
      <div className={styles["top-select-text"]}>
        <h4>Top products</h4>
        <select
          name="months-change"
          id=""
          className={styles["month-change"]}
          onChange={setPieData}
        >
          {DataPieDisplay.map((item, index) => (
            <option value={index} key={item["month-range"]}>
              {item["month-range"]}
            </option>
          ))}
        </select>
      </div>

      <div className={styles["display-pie"]}>
        <PieChart
          className={styles["pie-chart"]}
          data={[
            {
              title: "Basic Tees",
              value: displayPieData["basic-tees"],
              color: "#98D89E",
            },
            {
              title: "Custom Short Pants",
              value: displayPieData["custom-short-pants"],
              color: "#F6DC7D",
            },
            {
              title: "Super Hoodies",
              value: displayPieData["super-hoodies"],
              color: "#EE8484",
            },
          ]}
        />

        <div className={styles["tab-data-display"]}>

          <div className={styles["tab-data-pie-display"]}>
            <div className={styles["index-pie"]}>
              <span className={`${styles.dot} ${styles["dot-pie1"]}`}></span>
              <p>Basic Tees</p>
            </div>
            <span>{displayPieData["basic-tees"]} %</span>
          </div>

          <div className={styles["tab-data-pie-display"]}>
            <div className={styles["index-pie"]}>
              <span className={`${styles.dot} ${styles["dot-pie2"]}`}></span>
              <p>Custom Short Pants</p>
            </div>
            <span>{displayPieData["custom-short-pants"]} %</span>
          </div>

          <div className={styles["tab-data-pie-display"]}>
            <div className={styles["index-pie"]}>
              <span className={`${styles.dot} ${styles["dot-pie3"]}`}></span>
              <p>Super Hoodies</p>
            </div>
            <span>{displayPieData["super-hoodies"]} %</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PieGraph;
