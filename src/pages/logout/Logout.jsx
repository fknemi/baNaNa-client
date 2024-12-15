import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function Logout (){
    const { logout } = useAuth0();

    return logout({
        logoutParams: {
            returnTo: window.location.origin,
        },
    });

};

export default Logout
