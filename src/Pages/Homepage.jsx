import React from 'react';
// import { FaMoon } from "react-icons/fa";
import Image from '../Images/CroppedPic.png';
import { FaLinkedin, FaYoutube, FaGithub, FaViber, FaFacebookMessenger } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

import { useState } from 'react';
import CV from '../Assets/John_Averian_Oro_Resume.pdf';

import Skills from '../Components/Skills.jsx';
import BottomDock from '../Components/BottomDock.jsx';
import Sidebar from '../Components/Sidebar.jsx';
import Projects from '../Components/Projects.jsx';
import Services from '../Components/Services.jsx';
import ContactMe from '../Components/ContactMe.jsx';
function Homepage() {

    const [darkMode, setDarkMode] = useState(true); 

    return (
        <div className={darkMode ? "dark" : ""}>
        <BottomDock/>
        <Sidebar/>
        <main className='bg-white px-10 md:px-20 lg:px-72 dark:bg-gray-900 dark:ease-in-out duration-150 py-0'>
            {/* Navbar */}
            <section id='home'>
                <nav className='py-10 mb-12 flex justify-between '>
                    <h1 className='text-lg dark:text-white font-semibold'>RYAN</h1>
                    <ul className='flex items-center'>
                        <li>
                            <MdSunny onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-lg dark:text-white
                             dark:hover:text-yellow-300'/>
                        </li>
                    </ul>
                </nav>
                {/* Intro Section */}
                {/* text-5xl py-2 text-blue-600 font-medium md:text-6xl dark:text-yellow-300 */}
                <div className='text-center p-10'>
                    <center><h2 className='text-4xl relative inline-block w-full max-w-md text-green-500 font-medium md:text-3xl 
                                    before:absolute before:inset-0 before:animate-typewriter 
                                  before:bg-gray-100 dark:before:bg-gray-900 after:absolute after:inset-1 after:w-[0.200em]
                                    after:animate-caret after:bg-green-500 dark:after:bg-yellow-300 dark:text-yellow-300
                                    xs:text-sm sm:text-2xl ms:text-[15px] lg:text-3xl'>
                                    John Averian Oro</h2></center>
                    <h3 className='text-2xl py-2 md:text-3xl dark:text-white ms:text-md'>Developer / 2D Animator.</h3>
                    <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>
                        I'm an aspiring developer and aims to provide services for programming and motion graphics design.
                    </p>
                </div>
                <div className='flex justify-center'>
                    <a href={CV} download="John_Averian_Oro_Resume" >
                        <button type='submit' className='bg-transparent hover:bg-green-500 text-green-700 font-semibold
                        hover:text-white py-3 px-4 border border-green-500 hover:border-transparent rounded-full
                        hover:ease-in duration-150 dark:text-yellow-300 dark:border-yellow-300 dark:hover:bg-yellow-400 dark:hover:text-white'
                        >Download CV</button>
                    </a>
                </div>
            </section>
            <section className='mt-60'id='about'>
                <div className='max-w-6xl mx-auto lg:px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12'>
                    <div className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-1/3">
                        <img src={Image} className='w-72 h-72 rounded-full object-cover border-2 border-green-500 shadow-lg dark:border-yellow-400' alt='profile'/>
                    </div>
                    <div className="w-full lg:w-2/3 text-center lg:text-left">
                      <h3 className="text-2xl font-semiboldmb-4 dark:text-white text-gray-800 mb-5">About me</h3>
                        <p className="text-md leading-8 text-gray-800 dark:text-white text-justify">
                          I’m passionate about technology and how it can be used to solve problems and create
                          better experiences for people. I enjoy working on projects like web development and animation, where I can apply 
                          both creativity and technical skills to build something functional and user-friendly.
                        </p>
                    </div>
                </div>
            </section>
            <section className='py-10'>
                    <div className='flex justify-center md:justify-center gap-8 text-4xl sm:text-5xl text-gray-600'>
                        <a href='https://www.linkedin.com/in/john-averian-oro-b8ab41280/' rel='nonreferrer' target='blank'>
                            <FaLinkedin className='dark:text-white cursor-pointer text-green-500'/>
                        </a>
                        <a href='https://www.youtube.com/Rayn2D'  rel='nonreferrer'  target='blank'>
                            <FaYoutube  className='dark:text-white cursor-pointer text-green-500'/>
                        </a>
                        <a href='https://github.com/RaynGH' rel='nonreferrer'  target='blank'>
                            <FaGithub   className='dark:text-white cursor-pointer text-green-500'/>
                        </a>
                    </div>
            </section>

            <section className='mt-60' id='skills'>
                <Skills/>
            </section>
            <section className='mt-52' id='projects'>
                <Projects/>
            </section>
            <section className='mt-36'> 
                <Services/>
            </section>
            <section id='contact' className='w-full py-32 mt-36 relative overflow-hidden dark:bg-gray-900 bg-white dark:text-gray-300'>
                <div className='max-w-7xl mx-auto px-6'>
                    <ContactMe/>
                </div>
            </section>
            
        </main>

            {/* <section id='contact' className='w-full py-32 bg-inherit dark:bg-inherit'>
                <ContactMe/>
            </section> */}
        {/* <ScrollBtn/> */}
        </div>
    );
};

export default Homepage;
