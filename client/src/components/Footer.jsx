
import "../css/navbar.css"
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { BiLogoYoutube } from "react-icons/bi";




import { NavLink } from "react-router-dom";
import "../css/footer.css";
import FooterLogo from "../image/footerlogo.png";
const Footer = () => {
     const ScrollToTop = () =>{
       window.scrollTo({
         top: 0,
         behavior: "smooth",
       });
     }
  return (
    <>
      <div className="FooterMainD">
        <div>
          <h1>welcome</h1>
          <img className="footerLogo" src={FooterLogo} alt="logo" />
        </div>
        {/******************************* */}
        <div className="FooterMainD1">
          <div>
            <h1  className="footerh1">ABOUT US</h1>
          </div>
          <div>
            <h1  className="footerh2">QUICK LINKS</h1>
          </div>
          <div>
            <h1  className="footerh3">MAP</h1>
          </div>
        </div>
        {/* ********************************* */}
        <div className="FooterMainD2">
          <div className="footerp1D">
            <p className="footerP">
              VenueHub,pk helps you find and <br/>  book your  perfect event
              venue <br /> for free. We bring venues together <br /> in one
              place making it fast and <br />
              simple to find somewhere that <br /> fits your exact needs and
              budget so <br />
              that you can have your dream wedding.
              <br /> We provide décor,food and catering <br /> services.Just
              give us your budget and <br /> we will plan your whole wedding.
            </p>
          </div>
          <div className="footerp2D">
          
            <NavLink to="/about">
            <p onClick={ ScrollToTop} className="footerP1">About VanueHub</p>
            </NavLink>
            <NavLink to="/privacy">
            <p onClick={ ScrollToTop} className="footerP1">Privacy Policy</p>
            </NavLink>
             <NavLink to="/corporate_event">
             <p onClick={ ScrollToTop} className="footerP1">Corporate Event Decor</p>
             </NavLink>
             <NavLink to="/event_decor">
             <p onClick={ ScrollToTop} className="footerP1">Wedding Event Decor</p>
             </NavLink>
             <NavLink to="/contact">
            <p onClick={ ScrollToTop} className="footerP1">Contact Us</p>
            </NavLink>
            
          </div>
          <div className="mapD">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.861470531276!2d74.37171867424078!3d31.472996692558876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190676a82a2e4d%3A0x1d0583731666b50c!2s1%20Commercial%20Area%2C%20Sector%20Y%20DHA%20Phase%203%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1716619845802!5m2!1sen!2s"
              width="600"
              height="450"
              style={{border:"0"}}
              allowfullscreen=""
              loading="lazy"
              className="map"
            ></iframe>
          </div>
        </div>
        {/* *********************************** */}
        <div>
          <h1 className="h1footer">Connect – Engage – Excite</h1>
          <hr />
        </div>
        {/* ************************************* */}
          <div className="footerNavD">
            <NavLink to="/">
             <p onClick={ ScrollToTop} className="footerNav1">HOME|</p>
            </NavLink>
             <NavLink to="/privacy">
             <p onClick={ ScrollToTop} className="footerNav">TERMS & CONDITION|</p>
             </NavLink>
             <NavLink to="/privacy">
             <p onClick={ ScrollToTop} className="footerNav">PRIVACY POLICY|</p>
             </NavLink>
             <NavLink to="/contact">
             <p onClick={ ScrollToTop} className="footerNav">CONTACT US</p>
             </NavLink>
          </div>
          {/* ****************fg******************* */}
          <div className="footerbarD">
    <NavLink to="https://www.facebook.com/venuehub.pk/">
    <MdFacebook className="footerIcon1"  />
    </NavLink>

    <NavLink to="">
    <AiFillTwitterCircle  className="footerIcons"  />
    </NavLink>
   
    <NavLink to="https://www.instagram.com/venuehub.pk/">
    <IoLogoInstagram  className="footerIcons"  />
    </NavLink>
     <NavLink to="https://www.pinterest.com/venuehubpk/">
     <FaPinterestP  className="footerIcons"  />
     </NavLink>
   
     <NavLink to ="https://www.linkedin.com/company/venuehub/">
     <GrLinkedinOption  className="footerIcons"  />
     </NavLink>
   
     <NavLink to="https://www.youtube.com/@venuehubpk">
     <BiLogoYoutube  className="footerIcons"  />
     </NavLink>
    </div>

          {/* ***************fgh****************** */}
         <div className="footerLastD">
          <p className="footerLast1">© 2017 – 2022 – </p>
         <NavLink to="/">
         <p onClick={ ScrollToTop} className="footerLast2">VenueHub.pk</p> 
         </NavLink>
          <p className="footerLast3"> – All rights reserved.</p>
         </div>
         {/* *************************************** */}
         <div className="FooterLastD">
          <p className="FooterLast1">Powered by– </p>
          <NavLink to="/">
          <p onClick={ ScrollToTop} className="FooterLast2"> VenueHub.pk</p>
          </NavLink>
          
         </div>
      </div>
    </>
  );
};

export default Footer;
