import React from "react";
import styles from "./../../styles/Dashboard.module.css"; // Import the CSS module

import Sidebar from "./Sidebar/Sidebar";
import Details from "./DetailsTab/Details";
import Navbar from "./Navbar/Navbar";
import LineGraph from "./Graph/LineGraph/LineGraph";
import PieGraph from "./Graph/PieGraph/PieGraph";

const Dashboard = () => {
  return (
    <section className={styles["dashboard-main-container"]}>
      {" "}
      {/* Use the CSS class name */}
      <Sidebar />
      <div className={styles["dashboard-container"]}>
        {" "}
        {/* Use the CSS class name */}
        {/* Top bar */}
        <Navbar />
        {/* Details bar: tabs */}
        <Details />
        {/* LineGraph Data */}
        <LineGraph />
        <div className={styles["pie-graph-schedule"]}>
          {" "}
          {/* Use the CSS class name */}
          {/* Pie graph */}
          <PieGraph />
          <aside className={styles["schedule-details-display"]}>
            {" "}
            {/* Use the CSS class name */}
            <div className={styles["top-heading"]}>
              {" "}
              {/* Use the CSS class name */}
              <h4>Today's Schedule</h4>
              <a href="#">See All &#x3e;</a>
            </div>
            <div className={styles["schedule-tabs"]}>
              {" "}
              {/* Use the CSS class name */}
              <div className={styles["tab-schedule1"]}>
                {" "}
                {/* Use the CSS class name */}
                <p className={styles["schedule-name"]}>
                  Meeting with suppliers from Kuta Bali
                </p>
                <span className={styles["timing-schedule"]}>14.00-15.00</span>
                <p className={styles["address"]}>at Sunset Road, Kuta, Bali</p>
              </div>
              <div className={styles["tab-schedule2"]}>
                {" "}
                {/* Use the CSS class name */}
                <p className={styles["schedule-name"]}>
                  Meeting with suppliers from Kuta Bali
                </p>
                <span className={styles["timing-schedule"]}>14.00-15.00</span>
                <p className={styles["address"]}>at Sunset Road, Kuta, Bali</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
