import React from "react";

const Scroll = (props) => {
    // note style needs two layers of  {{}}
    // the first {} is because we want to use a javascript expression
    // the second {} is because we want to specify a javascript object
    return (
        <div
            style={{
                overflow: "scroll",
                border: "5px solid black",
                height: "800px",
            }}
        >
            {props.children}
        </div>
    );
};

export default Scroll;
