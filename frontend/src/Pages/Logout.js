 import React, {useEffect} from 'react';
import {Redirect} from 'react-router-dom';

function Logout(props) {
    useEffect(() => {
        sendLogout();
    }, []);

    const sendLogout = async () => {
        var token = localStorage.getItem("token");
        var data = await fetch(`"/api/auth/logout/${token}`);
        if (data == "ok") {
            localStorage.clear()
            window.location.href = '/';
        }
    }
    
    return(
        <Redirect to="/" />
    );
}

export default Logout;