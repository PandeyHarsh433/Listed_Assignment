import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
      const checkAuth = async () => {
        const session = await getSession();
        if (!session) {
          router.replace("/");
        } else {
          router.replace("/dashboard");
        }
        setAuthChecked(true);
      };

      if (!authChecked) {
        checkAuth();
      }
    }, [router, authChecked]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
