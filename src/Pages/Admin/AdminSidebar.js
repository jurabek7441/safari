import { NavLink } from "react-router-dom";
import {AiOutlinePhone }from "react-icons/ai"
export let AdminSidebar = () => {
  return (
    <div className="adminSidebar">
      <h2>Admin</h2>
      <ul className="menu">
        <NavLink to="/adminClothes"> <i><AiOutlinePhone/></i> Admin Clothes</NavLink>
        <NavLink to="/admin"><i><AiOutlinePhone/></i>Tutor Online</NavLink>
        <NavLink to="/admin"><i><AiOutlinePhone/></i>Active Subscribtion</NavLink>
        <NavLink to="/admin"><i><AiOutlinePhone/></i>Earning/Spending</NavLink>
      </ul>
    </div>
  );
};
