import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/16120568.jpg?k=a0a0b4d8c3a4eac8918e54ceeb39c552ee493aa51fc7e0d9f4b6a827cd392837&o=&hp=1',
    },
    {
      src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/344118238.jpg?k=fedfc6c54f9e1611a3fa372345082ca05c83ac97998aa9f871e83a17903654e4&o=&hp=1',
    },
    {
      src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/344118241.jpg?k=0f235c2aca85751f34b3ce41c9d6fc4adec3fa56a1cb5cd64f93f8716c86054f&o=&hp=1',
    },
    {
      src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/344121572.jpg?k=8a465291f6f2747464ca187943b5de3b38c8675f235a6dddcb7219146e84151b&o=&hp=1',
    },
    {
      src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/344118198.jpg?k=7556cd0f5698fd7036f4dc3ec79ccfd4d41f984b4d2e41a3881df6d212c2beba&o=&hp=1',
    },
    {
      src: 'https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/347670539.jpg?k=b9cdbc1125add04231445fcad1c5dc67d0757bb1d6ea70f02c6ee385f69ab273&o=&hp=1',
    },
  ];

  const handleOpen = i => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = direction => {
    let newSlideNumber;
    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='hotelContainer'>
        {open && (
          <div className='slider'>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className='close'
              onClick={() => {
                setOpen(false);
              }}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className='arrow'
              onClick={() => handleMove('l')}
            />
            <div className='sliderWrapper'>
              <img src={photos[slideNumber].src} alt='' className='sliderImg' />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className='arrow'
              onClick={() => handleMove('r')}
            />
          </div>
        )}
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className='hotelTitle'>Grand Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 1235 New York</span>
          </div>
          <span className='hotelDistance'>
            Excellent location -500m from center
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className='hotelImages'>
            {photos.map((photo, i) => (
              <div className='hotelImgWrapper'>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=''
                  className='hotelImg'
                />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsText'>
              <div className='hotelTitle'>Stay in heart of Krakow</div>
              <p className='hotelDesc'>
                Located a 5-minute walk from St. Florian's Gate in Krakow,Tower
                Street Apartments has accomodations with air conditioning and
                free WiFi.The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave,a flat-screen TV,and
                a private bathroom with shower and hairdryer
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect for 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow,this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or book now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
