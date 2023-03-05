import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useState } from "react";

export let SideBar = () => {
  let [btnBollean, setBtnBollean] = useState(false)
  let [filterCategory, setFilterCategory]= useState("");
  
   handleBtn = () => {
    setBtnBollean(!btnBollean);
  };
  let [sizeData, setSizeData] = useState([
    {
      id: 1,
      value: "XXS",
    },
    {
      id: 2,
      value: "XS",
    },
    {
      id: 3,
      value: "S",
    },
    {
      id: 4,
      value: "M",
    },
    {
      id: 5,
      value: "L",
    },
    {
      id: 6,
      value: "XL",
    },
    {
      id: 7,
      value: 23,
    },
    {
      id: 8,
      value: 24,
    },
    {
      id: 9,
      value: 25,
    },
    {
      id: 10,
      value: 26,
    },
    {
      id: 11,
      value: 27,
    },
    {
      id: 12,
      value: 28,
    },
    {
      id: 13,
      value: 29,
    },
    {
      id: 14,
      value: 30,
    },
    {
      id: 15,
      value: 31,
    },
    {
      id: 16,
      value: 32,
    },
  ]);
  return (
    <div className="sideBar">
      <div className="category">
        <div className="categoryTitle">
          <h3>CATEGORY</h3>
        </div>
        <div className="categoryItem">
          <p>All</p>
          <p>Dresses</p>
          <p>Denim</p>
          <p>Jeans</p>
          <p>Jumpsuits</p>
          <p>Tops</p>
          <p>Jackets and coats</p>
          <p>Pants</p>
          <p>Shorts</p>
          <p>Skirts</p>
          <p>Loungerie & underwear</p>
          <p>Leather</p>
          <p>Sweatrs & knits</p>
        </div>
      </div>
      <div className="size">
        <div className="sizeTitle">
          <h3>SIZE</h3>
          <div className="clear">
            <i>Clear</i>
            <i>
              <HighlightOffIcon />
            </i>
          </div>
        </div>
        <div className="sizeItems">
          {sizeData.map((item, index) => (
            <button key={index} className={{}}>
              {item.value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
