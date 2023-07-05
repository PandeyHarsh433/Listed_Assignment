import React from "react";
import styles from "./../../../styles/Details.module.css"; // Import the CSS module
import DisplayData from "./DetailsData";

const Details = () => {
  return (
    <div className={styles["details-tab"]}> {/* Use the CSS class name */}
      {DisplayData.map((item, index) => (
        <div key={index} className={styles["tab-data"]}> {/* Use the CSS class name */}
          <span className={styles["icon-tab-data"]}>{item.icon}</span> {/* Use the CSS class name */}
          <div className={styles["details-tab-data"]}> {/* Use the CSS class name */}
            <p>{item.title}</p>
            <h3>{item.data}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
