import { Route, Routes } from "react-router-dom"
import { Footer } from "./Components/Footer"
import { Navbar } from "./Components/Navbar"
import { Accesories } from "./Pages/Accessories/Accesories"
import { Clothes } from "./Pages/Clothes/Clothes"
import { Home } from "./Pages/Home/Home"
import { Shoes } from "./Pages/Shoes/Shoes"



export let Main = ({changeInput, state})=>{
    return(
        <div className="main">
            <Navbar changeInput={changeInput} />
                <Routes>
                    <Route path="/" element={<Home state={state} />}/>
                    <Route path="/clothes" element={<Clothes/>}/>
                    <Route path="/shoes" element={<Shoes/>}/>
                    <Route path="/accessories" element={<Accesories/>}/>
                </Routes>
            <Footer/>
        </div>
    )
}