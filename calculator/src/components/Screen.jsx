import React from "react";

function Screen({screenValue}) {

    return (
        <div>
            <div className="screen"><p style={{position: "relative", bottom: "0px"}}>{screenValue}</p></div>
        </div>
    )
}

export default Screen;