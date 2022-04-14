import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const withAuth = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const isLoggedIn = useSelector((state) => state.isAuthenticated);

      // If there is no access token we redirect to "/" page.
      if (isLoggedIn) {
        Router.replace("/profile");
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
