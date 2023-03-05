import {Header} from "./Header"
import { ShopYourStyle } from "./ShopYourStyle"


export let Home = ({state})=>{
    return(
        <div className="home">
            <Header />
            <ShopYourStyle  state={state} />
        </div>
    )
}