import { Shoes_Content } from "./Shoes_Content"
import { Shoes_SideBar } from "./Shoes_SideBar"

export let Shoes = ({ state, value, setValue }) => {
  return (
    <div className="shoes">
      <div className="shoesTitle">
        <h2>SHOES</h2>
      </div>
      <div className="shoesContent">
        <Shoes_SideBar />
        <Shoes_Content state={state} value={value} setValue={setValue} />
      </div>
    </div>
  )
}
