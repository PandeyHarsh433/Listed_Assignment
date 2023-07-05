import React from "react";
import styles from "../../../styles/GoogleAuth.module.css";
import { IoLogoApple } from "react-icons/io";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const GoogleAuth = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    router("/dashboard");
  };

  return (
    <div className={styles["google-auth-buttons"]}>
      <button className={styles["button-g-auth"]} onClick={() => signIn()}>
        <img src="/images/G_Logo.png" alt="G_Logo" />
        Sign in with Google
      </button>

      <button className={styles["apple-g-auth"]}>
        <IoLogoApple className={styles["apple-icon"]} />
        Sign in with Apple
      </button>
    </div>
  );
};

export default GoogleAuth;
