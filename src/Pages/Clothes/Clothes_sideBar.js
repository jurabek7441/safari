import { MdClear } from "react-icons/md";
import { useContext, useState } from "react";
import { DataContext } from "../../Components/Context";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export let SideBar = (value, setValue) => {
  let {
    setCategoryState,
    categoryBtn,
    setColorState,
    colorBtn,
    sizeBtn,
    setSizeState,
  } = useContext(DataContext);
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  let [btnBoolean, setBtnBoolean] = useState(false);
  let handleBtn = () => {
    setBtnBoolean(!btnBoolean);
  };
  return (
    <div className="sideBar">
      <div className="category">
        <div className="categoryTitle">
          <h3>CATEGORY</h3>
        </div>
        <div className="categoryItem">
          {categoryBtn.map((btn, index) => (
            <p
              key={index}
              onClick={() => {
                setCategoryState(btn);
              }}
            >
              {btn === "" ? "All" : btn}
            </p>
          ))}
        </div>
      </div>
      <div className="size">
        <div className="sizeTitle">
          <h3>SIZE</h3>
          <div className="clear"
            onClick={() => { setSizeState("") }}
          >
            <i>Clear</i>
            <i>
              <MdClear />
            </i>
          </div>
        </div>
        <div className="sizeItem">
          {sizeBtn.map((size, index) => (
            <button
              
              key={index}
              className={btnBoolean ? "btnActive" : ""}
              onClick={() => { setSizeState(size) }}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="color">
        <div className="color_title">
          <h3>COLOR</h3>
          <div className="clear"
            onClick={() => { setColorState("") }}>
            <i>Clear</i>
            <i>
              <MdClear />
            </i>
          </div>
        </div>
        <div className="colors">
          {colorBtn.map((color, index) => (
            <div className="color_item"
              key={index}
              onClick={() => { setColorState(color) }}
            >
              <button
                style={{
                  color: "white",
                  padding: "16px",
                  backgroundColor: color,
                }}
              ></button>
              <p>{color}</p>
            </div>
          ))}
        </div>

      </div>
      <div className="price">
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => "temperature range"}
            value={value}
            onchange={handleChange}
            valueLabelDisplay="auto"
            step={50}
            max={1000}
          />
        </Box>
      </div>
    </div>
  );
};
