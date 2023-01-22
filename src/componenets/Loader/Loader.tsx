import React from 'react';
import loader from "../../img/loader/loader.svg";

export const Loader = () => {
    return (
        <>
            <img
                style={{
                    position: "fixed",
                    top: "40%",
                    left: "50%"
                }}
                src={loader}
                alt="loader"/>
            <div style={{
                height: "100vh",
                backgroundColor: "#f0f8ff"
            }}>

            </div>
        </>
    );
};

