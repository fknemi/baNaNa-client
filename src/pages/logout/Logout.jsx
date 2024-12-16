import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";

function Logout() {
    const { logout } = useAuth0();
  localStorage.removeItem("loggedin")

    return logout({
        logoutParams: {
            returnTo: window.location.origin,
        },
    });

};

export default Logout
