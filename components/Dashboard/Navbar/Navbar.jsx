import React, { useEffect, useState } from "react";
import styles from "./../../../styles/Navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [username, setUsername] = useState("User");
  const [image, setImage] = useState("/images/User.jpeg");
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      const user = session.user ?? null;
      setUsername(user?.name);
      setImage(user?.image ?? "/images/User.jpeg"); 
    }
  }, [session]);

  const [currClass, setCurrClass] = useState(
    `${styles["button-logout-outer"]} ${styles.displayset}`
  );

  const logout = () => {
    signOut();
  };

  const showLogoutButton = () => {
    setCurrClass(
      currClass === `${styles["button-logout-outer"]} ${styles.displayset}`
        ? styles["button-logout-outer"]
        : `${styles["button-logout-outer"]} ${styles.displayset}`
    );
  };

  return (
    <nav className={styles["nav-top-bar"]}>
      <h3>Dashboard</h3>

      <div className={styles["search-image"]}>
        <div className={styles["input-search-button"]}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className={styles["search-bar"]}
          />
          <button className={styles["search-button"]}>
            <CiSearch />
          </button>
        </div>
        <FaRegBell className={styles["bell-notification"]} />
        <div className={styles["image-logout-button"]}>
          <img
            src={image}
            alt="Profile"
            className={styles["user-image"]}
            onClick={showLogoutButton}
          />
          <div className={currClass}>
            <p className={styles["user-name"]}>{username}</p>
            <button onClick={logout} className={styles["logout-button"]}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
