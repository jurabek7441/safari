import { NavLink } from 'react-router-dom'
import Logo from '../photo/logo.png'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import { Twitter } from '@mui/icons-material'
export let Footer=()=>{
    return(
        <div className="footer">
            <div className="footer_logo">
                <img src={Logo} alt="Logo" />
            </div>
            <ul className="footer_menu">
                <NavLink to="/about_us">
                    About Us
                </NavLink>
                <NavLink to="/contact">
                    Contact
                </NavLink>
                <NavLink to="/terms&conditions">
                    Terms & Conditions
                </NavLink>
            </ul>
            <div className="footer_icons">
                <div className="facebook">
                    <i><FaFacebookF/></i>
                    <p>Facebook</p>
                </div>
                <div className="twitter">
                    <i><FaTwitter/></i>
                    <p>Twitter</p>
                </div>
                <div className="instagram">
                    <i><FaInstagram/></i>
                    <p>Instagram</p>
                </div>
            </div>
            <div className="footer_subscribe">
                <p>Subscribe to our newsletter</p>
                <div className="subscribeInput_box">
                    <input type="email" placeholder='Email address' name='email'/>
                    <button>OK</button>
                </div>
            </div>
            <div className="footer_address">
                <p>497 Evergreen Rd. Rosevile, CA 95673</p>
                <p>+44 345 678 903</p>
                <p>adobexd@mail.com</p>
            </div>
        </div>
    )
}