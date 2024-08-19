
import {Link} from 'react-router-dom'
import logo from '../image/logo.png'
const Header = () => {
  
  return (
    <>
    <div className='logodiv'>
      <div>
      <Link  to="/"><img src={logo} alt="logo" className='logo' /></Link>
      </div>
    
   <div>
    <Link to= "/form">
   <button  className='btn1'>List Your Business</button>
   </Link>
  
    </div> 
    </div>
    
    
    
    </>
  )
}

export default Header
