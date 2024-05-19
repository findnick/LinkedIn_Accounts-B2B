import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

export default function InputSlider({setPrice}) {
  const [value, setValue] = React.useState(1);
  sessionStorage.setItem("accounts", value);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    setPrice(newValue);
    sessionStorage.setItem("accounts", newValue);
  };
  return (
    <Box>
      <Slider
        aria-label="input-slider"
        value={typeof value === "number" ? value : 1}
        onChange={handleSliderChange}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={10}
        step={1}
        min={1}
        max={50}
      />
      <div className="flex flex-col">
        <div className="mx-auto mb-3">
          <p
            className="text-center px-5 py-3 text-white font-semibold"
            style={{
              backgroundImage: "linear-gradient(var(--light), var(--dark))",
              borderRadius: 4,
            }}
          >
            {value}
          </p>
        </div>
        <div className="mx-auto">
            <p className="text-center font-light">Drag to select number of accounts</p>
        </div>
      </div>
    </Box>
  );
}
