
import '../css/corporate_event.css';
import SignUp_Form from '../components/SingUp_Form';
import Footer from '../components/Footer'
import Cimage1 from '../image/Cimage1.jpg';
import Cimage2 from '../image/Cimage2.jpg';
import Cimage3 from '../image/Cimage3.jpg';
import Cimage4 from '../image/Cimage4.jpg';
import Cimage5 from '../image/Cimage5.jpg';
import Cimage6 from '../image/Cimage6.jpg';
import Cimage7 from '../image/Cimage7.jpg';
import Cimage8 from '../image/Cimage8.jpg';
import Cimage9 from '../image/Cimage9.jpg';
import Cimage10 from '../image/Cimage10.jpg';
import Cimage11 from '../image/Cimage11.jpg';
const Corporate_Event = () => {
  return (
    <>
       <div className='CimageD'>
       <img className='Cimage1' src={Cimage1} alt="image.." />
       <img className='Cimage2' src={Cimage2} alt="image.." />
       <img className='Cimage3' src={Cimage3} alt="image.." />
       </div>
       <div className='CimageD'>
       <img className='Cimage4' src={Cimage4} alt="image.." />
       <img className='Cimage5' src={Cimage5} alt="image.." />
       <img className='Cimage6' src={Cimage6} alt="image.." />
       <img className='Cimage7' src={Cimage7} alt="image.." />
       </div>
       <div className='CimageD'>
       <img className='Cimage8' src={Cimage8} alt="image.." />
       <img className='Cimage9' src={Cimage9} alt="image.." />
       <img className='Cimage10' src={Cimage10} alt="image.." />
       <img className='Cimage11' src={Cimage11} alt="image.." />
       </div>
       <SignUp_Form/>
       <Footer/>
    </>
  )
}

export default Corporate_Event
