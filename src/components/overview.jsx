import './overview.css';
import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Overview = () => {
    const targetref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetref,
    });

    const x = useTransform(scrollYProgress,[0,1],["1%","-95%"]);

    const images = [
        'image/person1.jpg',
        'image/person2.jpg',
        'image/person3.jpg',
        'image/person4.jpg',
        'image/person5.jpg',
        'image/person6.jpg',
        // Add more image URLs here
    ];

    return (
        <section ref={targetref} className='relative h-[300vh] bg-orange-50'>
            <div className='sticky top-0 h-screen bg-black flex items-center overflow-hidden'>
                <motion.div style={{x}} className='flex gap-4'>
                    {images.map((image, index) => (
                        <div key={index} className='card'>
                            <img src={image} alt={`Image ${index + 1}`} className='h-full max-w-lg' />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Overview;