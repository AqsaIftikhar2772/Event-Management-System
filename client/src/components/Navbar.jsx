
import "../css/navbar.css"
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { BiLogoYoutube } from "react-icons/bi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <div className="navbarD">
    <NavLink to="https://www.facebook.com/venuehub.pk/">
    <MdFacebook className="navIcon1"  />
    </NavLink>

    <NavLink to="">
    <AiFillTwitterCircle  className="navIcons"  />
    </NavLink>
   
    <NavLink to="https://www.instagram.com/venuehub.pk/">
    <IoLogoInstagram  className="navIcons"  />
    </NavLink>
     <NavLink to="https://www.pinterest.com/venuehubpk/">
     <FaPinterestP  className="navIcons"  />
     </NavLink>
   
     <NavLink to ="https://www.linkedin.com/company/venuehub/">
     <GrLinkedinOption  className="navIcons"  />
     </NavLink>
   
     <NavLink to="https://www.youtube.com/@venuehubpk">
     <BiLogoYoutube  className="navIcons"  />
     </NavLink>
    </div>
    </>
  )
}

export default Navbar
