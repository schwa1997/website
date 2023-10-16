"use client";

import React, { useState } from "react";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import WebDesign from "./WebDesign";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <div>
      <div>
        <div>
          <div>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                {data.map((item) => (
                  <FormControlLabel
                    value={item}
                    key={item}
                    control={<Radio />}
                    label={item}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;
