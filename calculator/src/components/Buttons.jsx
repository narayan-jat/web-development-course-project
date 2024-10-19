import React from "react";

function Buttons({buttonText, onClick}) {
    console.log("ONclick here" + onClick)
    return (
        <div>
            <button className="button" onClick={onClick}>{buttonText} </button>
        </div>
    )
}

export default Buttons;