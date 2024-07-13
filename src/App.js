import React, { useState } from 'react';
import Hero from './components/hero.jsx';
import Overview from './components/overview.jsx';
import Socials from './components/socials.jsx';
import {motion, transform} from 'framer-motion';

function App() {

  return (
   <>
   <Hero/>
      <div className='h-96'>
      <motion.div
   initial={{opacity:0}}
   whileInView={{opacity:1}}
   viewport={{margin: "-200px",}}
    >
     <h1 className=' header flex font-bold text-9xl justify-center mt-28'>Overview</h1>
     </motion.div>
     </div>
    <motion.div
   initial={{opacity:0}}
   whileInView={{opacity:1}}
   viewport={{margin: "-500px",}}
   transition={{duration: 1.5}}
    >
   <Overview/>
   </motion.div>
   <motion.div
   initial={{opacity:0}}
   whileInView={{opacity:1}}
   viewport={{amount: "all",
}}
    >
      <div className='h-96'>
     <h1 className=' header flex font-bold text-9xl justify-center mt-28'>Socials</h1>
     </div>
    </motion.div>
    <motion.div
   initial={{opacity:0}}
   whileInView={{opacity:1}}
   viewport={{margin: "-500px",}}
   transition={{duration: 1.5}}
    >
      <Socials/>
   </motion.div>

   </>
  );
}

export default App;
