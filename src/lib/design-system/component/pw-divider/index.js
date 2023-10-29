import React, { Component } from "react";
import "./pw-divider.css";

const PwDivider = ({marginTop,marginBottom}) => {
    const Dividertopbottom = {
        marginTop:marginTop,
        marginBottom:marginBottom,
    };
    return(
        <>  
            <div css={ Dividertopbottom}className="border"></div>
        </>
    )
};
export default PwDivider;