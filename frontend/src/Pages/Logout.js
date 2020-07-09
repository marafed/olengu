import React, {useState, useEffect} from 'react';

function Logout(props) {
    useEffect(() => {
        sendLogout();
    }, []);

    const sendLogout = async () => {
        var token = localStorage.getItem("token");
        var data = await fetch(`/api/auth/logout/${token}`);
        data = await data.json();
        if (data == "ok") {
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
            props.history.push('/');
        }
    }
    
    return(
        <h1>Log Out</h1>
    );
}

export default Logout;