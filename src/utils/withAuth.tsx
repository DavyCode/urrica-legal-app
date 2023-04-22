// /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// /* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */

import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import useAuth from "../hooks/useAuth";

const withAuth = (Component: any) => {
  return (props: { [key: string]: any }): ReactNode | null => {
    const isAuthenticated = useAuth();
    const router = useRouter();
    useEffect(() => {
      if (!isAuthenticated) {
        router.push({
          pathname: "/dashboard/community",
          query: {
            from: router.pathname,
          },
        });
      }
    }, [router, isAuthenticated]);
    if (isAuthenticated) {
      return <Component {...props} />;
    }
    return null;
  };
};

export default withAuth;
