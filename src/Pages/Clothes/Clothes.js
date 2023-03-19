// import { SliderSimple } from "../../Components/SliderSimple"
// import { ShopYourStyle } from "../Home/ShopYourStyle"
import { Clothes_content } from "./Clothes_content";
import { SideBar } from "./Clothes_sideBar";

export let Clothes = ({ state, value, setValue }) => {
  return (
    <div className="clothes">
      <h2>CLOTHES</h2>
      <div className="clothesContent">
        <SideBar value={value} setValue={setValue} />
        <Clothes_content state={state} value={value} setValue={setValue} />
      </div>
    </div>
  );
};
