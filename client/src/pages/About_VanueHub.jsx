import SingUp_Form from '../components/SingUp_Form';
import  Footer from '../components/Footer'
import '../css/about_vanueHub.css'
const About_VanueHub = () => {
  return (
    <>
    <div>
      <p className='aboutP'>
        Our story began in 2018. Back then we were a booking platform that
        provided venues for private and corporate events. We can proudly state
        that we are Pakistan’s largest venue service provider with over 700
        venues in our panel. Soon after we expanded our services. Today we
        provide event management services for private and corporate clients.
        Interestingly we were literally drawn into these services by our
        clients. They wanted a one-stop solution. And we said, why not?
      </p>
    </div>
    <SingUp_Form/>
    <Footer/>
    </>
  );
};

export default About_VanueHub;
