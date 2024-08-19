
import '../css/contactus.css'
import SingUp_Form from '../components/SingUp_Form'
import Footer from '../components/Footer'
import { PiAddressBookFill } from "react-icons/pi";
import { FaSquarePhone } from "react-icons/fa6";
import { TiWorld } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
const Contact_Us = () => {
  return (
    <>
   <div className='contactD'>
    <form>
    <div className='CformDiv'>
        <input className='CformInput1' type="text" required placeholder='First Name' />
        <input  className='CformInput2' type="text" required placeholder='Last Name' />
    </div>
    <div className='CformDiv'>
        <input className='CformInput3' type="number" required placeholder='Mobile Number' />
        <input  className='CformInput4' type="email" required placeholder='Email Address' />
    </div>
    <div>
        <input className='CtextArea' type="textarea" required placeholder='Your Message' />
    </div>
    <div>
        <button className='CformBtn'>Submit Form</button>
    </div>
    </form>
    <div>
      <ul>
        <li className='contactLi1'>
        <PiAddressBookFill  className='contactIcon1' />
        Building 2-M Block Phase 1 Commercial Area, Sector M <br/>DHA Phase 3, Lahore, Pakistan
       </li>
       <li className='contactLi2'>
       <FaSquarePhone  className='contactIcon2' />
       03-044-528-619
       </li>
       <NavLink to="/">
       <li  className='contactLi3'>
       <TiWorld  className='contactIcon3' />
         venuehub.com.pk 
       </li>
       </NavLink>
      </ul>
    </div>
    </div>
    <SingUp_Form/>
    <Footer/>
    </>
  )
}

export default Contact_Us
