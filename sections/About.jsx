/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable lines-around-directive */
/* eslint-disable jsx-quotes */

'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0'/>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText 
        title="| About Metaversus"
        textStyles="text-center"
      />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        <span className='font-extrabold text-white'>Lorem ipsum dolor </span> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <span className='font-extrabold text-white'>Excepteur</span>
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='Arrow Down'
        className='w-[28px] h-[38px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
