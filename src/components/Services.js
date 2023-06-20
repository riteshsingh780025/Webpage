import React from 'react';
import { BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import{fadeIn} from '../variants';

// services data
const services =[
  {
  name:'UI/UX design',
  description:
  'Front-end development involves designing and implementing the user interface of a website or application.',
  link:'learn more' ,
},
{
  name:'Development',
  description:
  'Front-end development involves designing and implementing the user interface of a website or application. .',
  link:'learn more' ,
},
{
  name:'Digital marketing',
  description:
  'Front-end development involves designing and implementing the user interface of a website or application..',
  link:'learn more' ,
},
{
  name:'Product Branding ',
  description:
  'Front-end development involves designing and implementing the user interface of a website or application..',
  link:'learn more' ,
}
]


const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
        variants={fadeIn('right',0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
        mix-blend-lighten mb-12 lg-mb-0'>
          <h2 className='h2 text-accent mb-12'> What I Do.</h2>
          <h3 className='h2 max-w-[400px]mb-12'>
          Front-end development involves designing and implement
          </h3>
          <button className='btn btn-sm'>see my work</button>
        </motion.div>
         {/* services */}
         <motion.div 
         variants={fadeIn('right',0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.3}}
         className='flex-1 '>
          {/* service list */}
          <div>
            {services.map((service,index)=> {
              // destructure service
              const{name , description,link}=service;
            return(
               <div className='border-b border-white/15 h-[100px] mb-[38px] flex' key={index}>
              <div className='max-w-[476px]'>
                <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                  {name} 
                  </h4>
                <p className='font-secondary leading-tight'>
                  {description}
                </p>
              </div>
              <div className='flex flex-col flex-1 items-end'>
                <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                >
                  <BsArrowUpRight/>
                </a>
                <a href='#' className='text-gradient text-sm'>
                  {link}
                </a>
              </div>
              </div>
            );
            })}
          </div>
         </motion.div>
      </div>
    </div>
    </section>

 );
};

export default Services;
