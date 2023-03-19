import { Route, Routes } from "react-router-dom"
import { Footer } from "./Components/Footer"
import { Navbar } from "./Components/Navbar"
import { Accesories } from "./Pages/Accessories/Accesories"
import { Admin } from "./Pages/Admin/Admin"
import { Clothes } from "./Pages/Clothes/Clothes"
import { Home } from "./Pages/Home/Home"
import { LocalMap } from "./Pages/LocalStorage/LocalMap"
import { LocalStorage } from "./Pages/LocalStorage/LocalStorage"
import { Shoes } from "./Pages/Shoes/Shoes"



export let Main = ({ changeInput, state, value, setValue,  }) => {
    return (
        <div className="main">
            <Navbar changeInput={changeInput} />
            <Routes>
                <Route path="/" element={<Home state={state} />} />
                <Route path="/clothes" element={<Clothes state={state} value={value} setValue={setValue} />} />
                <Route path="/shoes" element={<Shoes state={state} />} />
                <Route path="/accessories" element={<Accesories state={state} />} />
                <Route path="/localStorage" element={<LocalStorage />} />
                <Route path="/localMap" element={<LocalMap />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
        </div>
    )
}