import { NavLink } from "react-router-dom";
import Logo from "../photo/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import PersonIcon from "@mui/icons-material/Person";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
// import { useState } from "react";
export let Navbar = ({ changeInput }) => {
  // let [search, setSearch]= useState("")
  return (
    <div className="navbar">
      <ul className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/clothes">Clothes</NavLink>
        <NavLink to="/shoes">Shoes</NavLink>
        <NavLink to="/accessories">Accessories</NavLink>
        
      </ul>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="search_account">
        <div className="search">
          <input type="text" placeholder="Search..." onChange={changeInput} />
          <i>
            <AiOutlineSearch />
          </i>
        </div>
        <div className="account_icon">
          <i>
            <PersonIcon />
          </i>
        </div>
        <div className="cart_icon">
          <NavLink to="/cart"><FaShoppingCart /></NavLink>
        </div>
        <div className="like_icon">
          <NavLink to="/like"><AiFillHeart /></NavLink>
        </div>
      </div>
    </div>
  );
};
