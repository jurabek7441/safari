import { Route, Routes } from "react-router-dom"
import { Footer } from "./Components/Footer"
import { Like } from "./Pages/Like/Like"
import { Navbar } from "./Components/Navbar"
import { Accesories } from "./Pages/Accessories/Accesories"
import { Admin } from "./Pages/Admin/Admin"
import { Clothes } from "./Pages/Clothes/Clothes"
import { Home } from "./Pages/Home/Home"
import { LocalMap } from "./Pages/LocalStorage/LocalMap"
import { NotFound } from "./Pages/NotFound"
import { Shoes } from "./Pages/Shoes/Shoes"
import { Cart } from "./Components/Cart"
import { AdminClothes } from "./Pages/Admin/AdminClothes"



export let Main = ({ changeInput, state, value, setValue, }) => {
    return (
        <div className="main">
            <Navbar changeInput={changeInput} />
            <Routes>
                <Route path="/*" element={<NotFound />} />
                <Route path="/" element={<Home state={state} />} />
                <Route path="/clothes" element={<Clothes state={state} value={value} setValue={setValue} />} />
                <Route path="/shoes" element={<Shoes state={state} value={value} setValue={setValue} />} />
                <Route path="/accessories" element={<Accesories state={state} />} />
                <Route path="/localMap" element={<LocalMap />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/like" element={<Like />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/adminClothes" element={<AdminClothes />} />

            </Routes>
            <Footer />
        </div>
    )
}