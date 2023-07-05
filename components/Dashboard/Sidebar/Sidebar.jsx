import React, { useState } from "react";
import Link from "next/link";
import styles from "./../../../styles/Sidebar.module.css";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [activeState, setActiveState] = useState(true);

  const changeMenuState = () => {
    setActiveState(!activeState);
  };

  return (
    <div
      className={`${styles["sidebar-container2"]} ${
        activeState ? styles.active : ""
      }`}
    >
      <div className={styles["heading-button"]}>
        <h2 className={styles.heading}>Board.</h2>
        <button className={styles["toogle-menu2"]} onClick={changeMenuState}>
          <FiMenu className={styles["toogle-icon2"]} />
        </button>
      </div>

      <div
        className={`${styles["icons-nav2"]} ${
          activeState ? styles.activestate : ""
        }`}
      >
        <Link href={"/dashboard"} className={styles["links-nav-bar"]}>
          <AiOutlinePieChart className={styles["nav-icon"]} /> Dashboard
        </Link>
        <Link href={"/dashboard"} className={styles["links-nav-bar"]}>
          <BsTags className={styles["nav-icon"]} /> Transations
        </Link>
        <Link href={"/dashboard"} className={styles["links-nav-bar"]}>
          <TbCalendarTime className={styles["nav-icon"]} /> Schedules
        </Link>
        <Link href={"/dashboard"} className={styles["links-nav-bar"]}>
          <BiUserCircle className={styles["nav-icon"]} />
          Users
        </Link>
        <Link href={"/dashboard"} className={styles["links-nav-bar"]}>
          <FiSettings className={styles["nav-icon"]} />
          Settings
        </Link>
      </div>

      <footer className={styles["footer-links"]}>
        <a href="#">Help</a>
        <a href="#">Contact Us</a>
      </footer>
    </div>
  );
};

export default Sidebar;
