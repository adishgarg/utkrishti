import React, {useState, useEffect} from 'react';
import './hero.css';

const Hero = ()=> {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const images = [
    "slideshow/IMG_0527.JPG",
    "slideshow/IMG_3023.JPG",
    "slideshow/IMG_3026.JPG",
    "slideshow/IMG_3049.JPG",
    "slideshow/IMG_3068.JPG",
    "slideshow/IMG_3075.JPG",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0); 
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); 
        setTimeout(() => {
          setOpacity(1); 
        }, 500); 
      }, 600); 
    }, 5500);  

    return () => clearInterval(intervalId);
  }, [images.length]);
return (
    <div className='cont'>
    <div className='hero z-10 absolute'>
        <nav className="bg-transparent p-4 flex justify-between items-center z-20">
            <img src="image/favicon.jpg" alt="Favicon" className="h-36" />
            <img src="chitkaralogo (2) 3.png" className='h-36'/>
        </nav>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-start lg:items-center mb-8 justify-center align-middle mt-16 z-20">
            <div className="text-white text-left">
                <h1 className="header text-9xl font-bold mb-4">UTKRISHTI</h1>
                <p className='text-2xl ml-14'>A Tech Odyssey for Career Advancement and Innovation</p>
            </div>
        </div>
        <div className='bg-black h-4/5 w-10/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1] rounded-3xl'>
        <img src={images[currentImageIndex]} alt="Slideshow" style={{opacity: opacity, transition: 'opacity 0.5s'}} className="w-full h-full object-cover rounded-3xl slideshow-image" />
        <div className="hero-image-overlay"></div> 
    </div>
    </div>
    
</div>
);
}

export default Hero;