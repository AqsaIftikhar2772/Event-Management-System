
import '../css/carosuel.css'
import Slide from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';





const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <>
    <Slide {...settings}>
      <div className='slide1'>
       </div>
      <div className='slide2'>
      </div>
      <div className='slide3'>
      </div>
     
    </Slide>
    
  
    
    
   </>
  );
};

export default Carousel;
