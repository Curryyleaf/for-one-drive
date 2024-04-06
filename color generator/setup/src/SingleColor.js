import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  // inside the list the data looks like this : rgb[255 ,255 , 255 ] and these are
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  // if you consolelog bcg you get  255 , 255 , 255 and lines of other rgb value  created by .all and user value
  const hexString = `# ${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 300);
    return () => {
      setTimeout(timeout);
    };
  } , [alert]);
  
  return (
    <article
      className={`color ${index > 10 && "color-light"} `}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexString);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexString}</p>
      {alert && <p className="alert"> Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
