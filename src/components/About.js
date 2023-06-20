import React from 'react';
// count up
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import {motion} from 'framer-motion';
// variant 
import{fadeIn} from '../variants'


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
       <div>
        <div class="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">

          {/* img */}
          < motion.div 
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.3}}
          className="flex-1 bg-about bg-contain bg-no-repeat h-[650px]
           mix-blend-lighten bg-top">
           </ motion.div>
          {/* text */}
          <motion.div 
           variants={fadeIn('left',0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false,amount:0.3}}
          className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a freelance front-end Developer with over 6 months of experience.</h3>
            <p className=" h1 mb-6">
              Front-end development involves designing and implementing the user interface of a website or application. It focuses on creating engaging and interactive experiences for users through HTML, CSS, and JavaScript.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Year of <br />
                  experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  project <br />
                  completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  clients
                </div>
              </div> 
            </div>   
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">contact me</button>
              <a href="#" className="text-gradient btn-link">
                my portfolio
              </a>
            </div>    
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;

