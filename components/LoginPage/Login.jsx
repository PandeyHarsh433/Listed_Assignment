import React from "react";
import styles from "../../styles/Login.module.css";
import GoogleAuth from "./GoogleAuth/GoogleAuth";
import withAuth from "../withAuth";

const Login = () => {
  return (
    <section className={styles["login-container"]}>
      <div className={styles["board-side"]}>
        <h1>Board</h1>
      </div>

      <aside className={styles["login-cont-sect"]}>
        <p className={styles["login-heading"]}>Board</p>
        <div className={styles["login-section"]}>
          <div className={styles["sigin-text"]}>
            <h2>Sign In</h2>
            <p>Sign in to your account</p>
          </div>

          <GoogleAuth />

          <div className={styles["login-form"]}>
            <form action="">
              <label htmlFor="enter-email">Email address</label>
              <input
                type="email"
                name="email"
                id="enter-email"
                placeholder="Enter email"
                className={styles["login-input"]}
              />
              <label htmlFor="enter-password">Password</label>
              <input
                type="password"
                name="password"
                id="enter-password"
                placeholder="Password"
                className={styles["login-input"]}
              />

              <a href="#" className={styles["forgot-password"]}>
                Forgot Password?
              </a>

              <input
                type="submit"
                value="Sign In"
                className={styles["sigin-button"]}
              />
            </form>
          </div>

          <div className={styles["register-here"]}>
            <p>Don’t have an account?</p>
            <a href="#" className={styles["register-link"]}>
              Register here
            </a>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default withAuth(Login);
