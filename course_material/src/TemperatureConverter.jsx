import { useState } from "react";

const TemperatureConverter = () => {
    const [temperatureInput, setTemperatureInput] = useState("");
    const [convertedTemperature, setConvertedTemperature] = useState(null);

    const changeValue = (event) => {
        setTemperatureInput(event.target.value);
    };

    const convertTemperature = () => {
        const trimmedInput = temperatureInput.trim();
        const tempValue = parseFloat(trimmedInput);
        const unit = trimmedInput.slice(-1).toUpperCase();

        if (isNaN(tempValue) || (unit !== "C" && unit !== "F")) {
            setConvertedTemperature("Invalid input");
            return;
        }

        if (unit === "C") {
            setConvertedTemperature((tempValue * 9/5) + 32 + "F");
        } else if (unit === "F") {
            setConvertedTemperature(((tempValue - 32) * 5/9) + "C");
        }
    };

    return (
        <div>
            <h2>Temperature Converter</h2>
            <input
                type="text"
                value={temperatureInput}
                onChange={changeValue}
                placeholder="Enter temperature (e.g., 50C or 122F)"
            />
            <button onClick={convertTemperature}>Convert</button>
            <p>
                Converted Temperature: {convertedTemperature !== null ? convertedTemperature : "N/A"}
            </p>
        </div>
    );
};

export default TemperatureConverter;