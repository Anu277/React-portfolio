import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './App.css';
import anu from '../src/images/Anu2.2.webp';
import js from '../src/images/js.svg';
import aftereffects from '../src/images/after-effects.svg';
import bootstrap from '../src/images/bootstrap.svg';
import c from '../src/images/c.svg';
import canva from '../src/images/canva.svg';
import css3 from '../src/images/css-3.svg';
import docker from '../src/images/docker.svg';
import express from '../src/images/express.png';
import fig from '../src/images/figma.png';
import gimp from '../src/images/gimp.svg';
import git from '../src/images/git.svg';
import github from '../src/images/github.svg';
import html5 from '../src/images/html-5.svg';
import java from '../src/images/java.svg';
import lightroom from '../src/images/lightroom.svg';
import mongodb from '../src/images/mongodb.svg';
import mysql from '../src/images/mysql.svg';
import netlify from '../src/images/netlify.svg';
import node from '../src/images/node.svg';
import photoshop from '../src/images/photoshop.svg';
import premierepro from '../src/images/premiere-pro.svg';
import python from '../src/images/python.svg';
import react from '../src/images/react.svg';
import redux from '../src/images/redux.svg';
import tailwind from '../src/images/tailwind-.svg';
import wordpress from '../src/images/wordpress.svg';

import aakriti from '../src/images/aakriti.png';
import timer from '../src/images/timer.png';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { lightBlue } from '@mui/material/colors';


<script src="https://kit.fontawesome.com/a53285079f.js" crossorigin="anonymous"></script>
function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className="z-20 p-4 lg:p-0 relative Page font-[poppins] text-white flex flex-col justify-between">
      <header className="header m-auto min-h-dvh flex flex-col justify-between" >
        <div className="-z-10 dotted-background"></div>
        <nav className='navbar w-full max-w-5xl m-auto py-3 flex flex-col lg:flex-row justify-between items-center bg-[#10101061] border-b' data-aos="slide-down">
          <ul className='list-none lg:text-2xl'>
            <li className='px-3 decoration-white hover:underline'> <a href=''>Anurag</a></li>
          </ul>
          <ul className='list-none flex justify-between lg:text-2xl'>
            <li className='px-3 decoration-white hover:underline'> <a href='#abt'>About</a> </li>
            <li className='px-3 decoration-white hover:underline'> <a href='#edu'>Education</a></li>
            <li className='px-3 decoration-white hover:underline'> <a href='#skills'>Skills</a></li>
            <li className='px-3 decoration-white hover:underline'> <a href='#projects'>Projects</a></li>
            <li className='px-3 decoration-white hover:underline'> <a href='#contactme'>Contact</a></li>
          </ul>
        </nav>
        <div className='intro flex flex-wrap justify-around lg:min-w-4xl m-auto my-40' data-aos="fade-up">
          <div className='intro-mat flex flex-col archivo max-w-xl m-auto'>
            <h1 className='text-2xl lg:text-5xl'>Hello, it's me</h1>
            <h1 className='text-6xl lg:text-9xl'>Anurag.</h1>
            <h2 className='text-96 lg:text-4xl text-zinc-500'>Full-Stack Developer <p className='lg:text-4xl'>&</p> Web Designer</h2>
            <p className='font-[poppins] my-3 text-2xl  text-zinc-300 '>
              I am a Web Developer specializing in Frontend and Backend technologies.
              Expertise in <strong className='text-white'> HTML, CSS, JavaScript and React </strong>.
              Also a web designer, can create designs using <strong className='text-white'>Figma</strong>.
            </p>
            <section className='socialMedia w-auto flex items-center gap-3 border-t mt-1 p-4'>
              <a href='https://www.linkedin.com/in/anurag-bheemani-285430217/' target='_blank'>
                <LinkedInIcon  sx={{ color: lightBlue[50], fontSize: 40 }} />
              </a>
              <a href='https://x.com/Anu_b_27' target='_blank'>
                <XIcon  sx={{ color: lightBlue[50], fontSize: 30 }} />
              </a>
              <a href='https://drive.google.com/file/d/1iUPFG4jfzz1wPXB6lADynywn56Jorjy_/view?usp=sharing'><button className='type="button" class="text-black bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"'>Resume</button></a>
            </section>
          </div>
          <div className='intro-me'>
            <div className='me-img '>
              <img src={anu} className='md:max-h-[50vh] anu-img' alt="Anurag" />
            </div>
          </div>
        </div>
      </header>
      <main className='relative main w-full bg-gradient-to-b from-[#101010] to-[#000000]'>
        <div className=''>
          <div className='relative about z-20 m-auto my-20 lg:max-w-screen-lg lg:w-full  flex flex-col lg:flex-row justify-between '>
            <div className=' abt-head absolute  left-0 top-0 flex flex-wrap justify-center max-w-full max-h-full overflow-hidden'>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
              <h1 className='text-9xl font-thin inline p-5 bebas text-transparent text-stroke text-stroke-zinc-900'>About</h1>
            </div>
            <div className='relative z-20 abt-head flex justify-center items-center' id='abt'>
              <h1 className='text-6xl lg:text-9xl font-thin bebas' data-aos="zoom-in">About</h1>
            </div>
            <div className='realtive z-20 abt-me leading-10 flex items-center md:max-w-lg' data-aos="fade-up">
              <section className='flex flex-col gap-3'>
                <p className='font-extralight'>
                  Hello! I’m <span className='text-amber-300 text-2xl font-semibold'>Bheemani Anurag</span> , a passionate full-stack web developer with a focus on the <span className='text-rose-600 font-bold'>MERN stack</span> for building dynamic web applications. 
                  My expertise spans multiple programming languages, including  <span className='text-fuchsia-500 font-bold'>C, Java, JavaScript, and Python</span>. I have a solid foundation in HTML and CSS, 
                  and I excel in creating engaging user interfaces using React for the frontend. I prefer Figma for design work and rely on 
                  VSCode for efficient project development.
                </p>
                <p className='m-t-2 font-extralight'>
                  My enthusiasm for staying at the forefront of technology drives me to continually learn and adapt. I am adept at problem-solving and 
                  logical reasoning, which allows me to tackle complex challenges effectively.
                </p>
              </section>
            </div>
          </div>
        </div>
        <div className='bg-[#101010] p-10'>
          <div className='relative edu z-20 m-auto my-20 lg:max-w-screen-lg lg:w-full  flex flex-col lg:flex-row justify-between' id='edu'>
            <div className='edu-head flex justify-center items-center' data-aos="zoom-in">
              <h1 className='text-6xl lg:text-9xl font-thin bebas '>Education</h1>
            </div>
            <div className='edu-me leading-4 flex flex-col items-left  md:max-w-sm' data-aos="zoom-in">
              <h2 className='text-3xl mt-5 bebas text-left'>Bachelors of Technology {`(2025)`}</h2>
              <p className='text-xl text-zinc-400'><strong> Jawaharlal Nehru Technological University of Hyderabad University College Of Engineering Manthani </strong></p>
              <p>- Currently pursuing in {`CSE(AI and ML)`} domain</p>
              <h2 className='text-3xl mt-10 bebas text-left'>Senior Secondary School {`(2021)`}</h2>
              <p className='text-xl text-zinc-400'><strong> Narayana Junior College </strong></p>
              <p>-Completed my class 11 and 12</p>
              <h2 className='text-3xl mt-10 bebas text-left'>High School {`(2019)`}</h2>
              <p className='text-xl text-zinc-400'><strong> Trinity Model Secondary School </strong></p>
              <p>-Completed till my class 10</p>
            </div>
          </div>
        </div>
        <div className='bg-gradient-to-b from-[#101010] to-[#000000]'>
          <div className='relative skills z-20 m-auto my-44 lg:p-20 lg:w-full flex flex-col justify-between items-center' id='skills'>
            <div className='skills-head flex justify-center items-center' data-aos="zoom-in">
              <h1 className='text-6xl lg:text-9xl font-thin bebas'>Skills</h1>
            </div>
            <div className='skills-me leading-4 flex flex-col justify-center flex-wrap'>

              {/* Technical Skills Section */}
              <div className='skills-tech m-5 p-5 bg-zinc-800 rounded-md'>
                <h2 className='text-4xl font-semibold'>Technical Skills</h2>
                <div className='flex gap-2'>
                  <div className='skills-programming-languages my-4 p-3 max-w-96 bg-zinc-900 '>
                    <h3 className='text-3xl font-semibold'>Programming Languages</h3>
                    <div className='flex flex-wrap'>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="100" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={js} alt='js' />
                        <span className='text-yellow-200'>JavaScript</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="300" data-aos-easing="ease-in" data-aos-duration="200" >
                        <img className='h-10 md:h-20 m-2' src={c} alt='c' />
                        <span className='text-yellow-200'>C</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="500" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={java} alt='java' />
                        <span className='text-yellow-200'>Java</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="700" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={python} alt='python' />
                        <span className='text-yellow-200'>Python</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="900" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={html5} alt='html' />
                        <span className='text-yellow-200'>HTML</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="1100" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={css3} alt='css' />
                        <span className='text-yellow-200'>CSS3</span>
                      </section>
                    </div>
                  </div>

                  <div className='skills-frontend-frameworks my-4 p-3 max-w-96 bg-zinc-900'>
                    <h3 className='text-3xl font-semibold'>Frontend Frameworks and Libraries</h3>
                    <div className='flex flex-wrap'>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="100" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={react} alt='react' />
                        <span className='text-yellow-200'>React.js</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="300" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={tailwind} alt='tailwind' />
                        <span className='text-yellow-200'>Tailwind CSS</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="500" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={bootstrap} alt='bootstrap' />
                        <span className='text-yellow-200'>Bootstrap</span>
                      </section>
                    </div>
                  </div>

                  <div className='skills-backend-technologies my-4 p-3 max-w-96 bg-zinc-900'>
                    <h3 className='text-3xl font-semibold'>Backend Technologies</h3>
                    <div className='flex flex-wrap'>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="100" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={node} alt='node' />
                        <span className='text-yellow-200'>Node.js</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="300" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={express} alt='express' />
                        <span className='text-yellow-200'>Express.js</span>
                      </section>
                    </div>
                  </div>

                  <div className='skills-databases my-4 p-3 max-w-96 bg-zinc-900'>
                    <h3 className='text-3xl font-semibold'>Databases</h3>
                    <div className='flex flex-wrap'>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="100" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={mysql} alt='mysql' />
                        <span className='text-yellow-200'>MySQL</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="300" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={mongodb} alt='mongodb' />
                        <span className='text-yellow-200'>MongoDB</span>
                      </section>
                    </div>
                  </div>

                  <div className='skills-devops my-4 p-3 max-w-96 bg-zinc-900'>
                    <h3 className='text-3xl font-semibold'>DevOps and Tools</h3>
                    <div className='flex flex-wrap'>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="100" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={docker} alt='docker' />
                        <span className='text-yellow-200'>Docker</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="300" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={git} alt='git' />
                        <span className='text-yellow-200'>Git</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="500" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2 invert' src={github} alt='github' />
                        <span className='text-yellow-200'>GitHub</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="700" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={netlify} alt='netlify' />
                        <span className='text-yellow-200'>Netlify</span>
                      </section>
                    </div>
                  </div>
                </div>
              </div>

              {/* Non-Technical Skills Section */}
              <div className='skills-non-tech m-5 p-5 bg-zinc-800 rounded-md'>
                <h2 className='text-4xl font-semibold'>Non-Technical Skills</h2>
                <div className='flex gap-2'>

                  <div className='skills-design-tools my-4 p-3 bg-zinc-900'>
                    <h3 className='text-3xl font-semibold'>Design Tools</h3>
                    <div className='flex flex-wrap p-3 gap-3'>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="100" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={fig} alt='figma' />
                        <span className='text-yellow-200'>Figma</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="300" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={photoshop} alt='photoshop' />
                        <span className='text-yellow-200'>Photoshop</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="500" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={gimp} alt='gimp' />
                        <span className='text-yellow-200'>GIMP</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="700" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={lightroom} alt='lightroom' />
                        <span className='text-yellow-200'>Lightroom</span>
                      </section>
                    </div>
                  </div>

                  <div className='skills-cms my-4 p-3 max-w-96 bg-zinc-900'>
                    <h3 className='text-3xl font-semibold'>Content Management Systems</h3>
                    <div className='flex flex-wrap gap-2'>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="100" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2 invert' src={wordpress} alt='wordpress' />
                        <span className='text-yellow-200'>WordPress</span>
                      </section>
                    </div>
                  </div>

                  <div className='skills-video-editing my-4 p-3 max-w-96 bg-zinc-900'>
                    <h3 className='text-3xl font-semibold'>Video Editing</h3>
                    <div className='flex flex-wrap gap-3'>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="100" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={aftereffects} alt='aftereffects' />
                        <span className='text-yellow-200'>After Effects</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade-up" data-aos-offset="300" data-aos-delay="300" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={premierepro} alt='premierepro' />
                        <span className='text-yellow-200'>Premiere Pro</span>
                      </section>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* <div className='bg-gradient-to-b from-[#101010] to-[#000000] '>
          <div className='relative skills z-20 m-auto my-44 lg:p-20 lg:w-full  flex flex-col justify-between ' id='skills'>
            <div className='skills-head flex justify-center items-center' data-aos="zoom-in">
              <h1 className='text-6xl lg:text-9xl font-thin bebas '>Skills</h1>
            </div>
            <div className='skills-me leading-4 flex justify-center flex-wrap '>
              <div className='skills-expert m-5'>
                <h2 className='text-3xl font-semibold'>Expertise</h2>
                <p>Expertise in these languages and framework</p>
                <div className='expertise-skills flex flex-wrap my-2  md:max-w-lg' data-aos="flip-right">
                  <div className='p-1 bg-zinc-200 rounded-lg flex flex-wrap justify-center'>
                    <section className='flex flex-col justify-center items-center '>
                      <img className='h-10 md:h-20 m-2' src={js} alt='js'></img>
                      <span className=' text-slate-900'>JavaScript</span>
                    </section>
                    <section className='flex flex-col justify-center items-center '>
                      <img className='h-10 md:h-20 m-2' src={react} alt='react'></img>
                      <span className=' text-slate-900'>React.js</span>
                    </section>
                    <section className='flex flex-col justify-center items-center '>
                      <img className='h-10 md:h-20 m-2' src={c} alt='c'></img>
                      <span className=' text-slate-900'>C Language</span>
                    </section>
                    <section className='flex flex-col justify-center items-center '>
                      <img className='h-10 md:h-20 m-2' src={java} alt='java'></img>
                      <span className=' text-slate-900'>Java</span>
                    </section>
                    <section className='flex flex-col justify-center items-center '>
                      <img className='h-10 md:h-20 m-2' src={html5} alt='html'></img>
                      <span className=' text-slate-900'>HTML</span>
                    </section>
                    <section className='flex flex-col justify-center items-center '>
                      <img className='h-10 md:h-20 m-2' src={css3} alt='css'></img>
                      <span className=' text-slate-900'>CSS3</span>
                    </section>
                    <section className='flex flex-col justify-center items-center '>
                      <img className='h-10 md:h-20 m-2' src={js} alt='js'></img>
                      <span className=' text-slate-900'>JavaScript</span>
                    </section> 
                    <img className='h-10 md:h-20 m-2' src={node} alt='nodejs'></img>
                    <img className='h-10 md:h-20 m-2' src={mongodb} alt='mongo'></img> 
                    <img className='h-10 md:h-20 m-2' src={express} alt='express'></img>
                  </div>
                </div>
              </div>
              <div className='skills-fam m-5'>
                <h2 className='text-3xl font-semibold'>Familiar</h2>
                <p>Familiar in using these languages</p>
                <div className='expertise-skills flex flex-wrap my-2'>
                  <div className='p-1 bg-zinc-200 rounded-lg flex flex-wrap justify-center  md:max-w-lg' data-aos="flip-right">
                    <img className='h-10 md:h-20 m-2' src={python} alt='js'></img>
                    <img className='h-10 md:h-20 m-2' src={docker} alt='dock'></img>
                    <img className='h-10 md:h-20 m-2' src={mysql} alt='mysql'></img>
                    <img className='h-10 md:h-20 m-2' src={tailwind} alt='tailwind'></img>
                    <img className='h-10 md:h-20 m-2' src={bootstrap} alt='boot'></img>
                    <img className='h-10 md:h-20 m-2' src={git} alt='git'></img>
                    <img className='h-10 md:h-20 m-2' src={github} alt='gith'></img>
                    <img className='h-10 md:h-20 m-2' src={netlify} alt='netlify'></img>
                  </div>
                </div>
              </div>
              <div className='skills-design m-5'>
                <h2 className='text-3xl font-semibold'>Design and Editing applications</h2>
                <p>Used these applications for designing and editing purpose</p>
                <div className='expertise-skills flex flex-wrap my-2'>
                  <div className='p-1 bg-zinc-200 rounded-lg flex flex-wrap justify-center  md:max-w-lg' data-aos="flip-right">
                    <img className='h-10 md:h-20 m-2' src={fig} alt='figma'></img>
                    <img className='h-10 md:h-20 m-2' src={wordpress} alt='wordpress'></img>
                    <img className='h-10 md:h-20 m-2' src={photoshop} alt='photoshop'></img>
                    <img className='h-10 md:h-20 m-2' src={gimp} alt='gimp'></img>
                    <img className='h-10 md:h-20 m-2' src={lightroom} alt='lightroom'></img>
                    <img className='h-10 md:h-20 m-2' src={canva} alt='canava'></img>
                    <img className='h-10 md:h-20 m-2' src={aftereffects} alt='after effects'></img>
                    <img className='h-10 md:h-20 m-2' src={premierepro} alt='premiere pro'></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className='bg-[#101010] md:p-10'>
          <div className='relative edu z-20 m-auto my-20 p- rounded-lg lg:w-full  flex flex-col justify-between items-center' id='projects'>
            <div className='edu-head flex justify-center items-center'>
              <h1 className='text-6xl lg:text-9xl font-thin bebas '>Projects</h1>
            </div>
            <h2 className='text-3xl my-6 underline text-left'>Actual Projects</h2>
            <div className='Actual-projects w-full flex lg:flex-wrap lg:justify-center overflow-auto'>

              <div className='edu-me leading-4 m-3 flex flex-col items-left min-w-sm md:max-w-sm bg-zinc-900'>
                <div class="w-72 md:max-w-sm rounded overflow-hidden shadow-lg">
                  <img class="w-full h-48" src={aakriti} alt="Aakriti"></img>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Aakriti</div>
                    <p class="text-gray-400 text-base">
                      This website is for our college festival event and made with React.js and a part of Three.js. Its totally responsive with animation, simple and clean.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <a href='https://github.com/Anu277/react-aakriti' target='_blank'><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Github </span></a>
                    <a href='https://aakriti.club/' target='_blank'><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Site </span></a>
                  </div>
                </div>
              </div>

              <div className='edu-me leading-4 m-3 flex flex-col items-left min-w-sm md:max-w-sm bg-zinc-900'>
                <div class="w-72 md:max-w-sm rounded overflow-hidden shadow-lg">
                  <img class="w-full" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65681c5701894f6333bd8c06/screenshot_2023-11-30-05-23-40-0000.png&fit=cover&h=500&w=800" alt="HoloDocs"></img>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Holo Docs</div>
                    <p class="text-gray-400 text-base">
                      I made this to store documents and pdfs of our academics. Also provided url and torrent links courses for learning new  tech stacks.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <a href='https://github.com/Anu277/Holodoc' target='_blank'><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Github </span></a>
                    <a href='https://holodocs.netlify.app/' target='_blank'><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Site </span></a>
                  </div>
                </div>
              </div>

              <div className='edu-me leading-4 m-3 flex flex-col items-left  md:max-w-sm bg-zinc-900'>
                <div class="w-72 md:max-w-sm rounded overflow-hidden shadow-lg">
                  <img class="w-full" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/648cb0d144734c04b24f17fa/screenshot_2023-06-16-18-58-29-0000.png&fit=cover&h=500&w=800" alt="SeasonNow"></img>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Season Now</div>
                    <p class="text-gray-400 text-base">
                      This website is designed to display weather details for a searched area. I've implemented various themes tailored to different weather conditions, utilizing a weather API for this purpose.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <a href='https://github.com/Anu277/Season-Now' target='_blank'><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Github </span></a>
                    <a href='https://season-now.netlify.app/' target='_blank'><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Site </span></a>
                  </div>
                </div>
              </div>
              <div className='edu-me leading-4 m-3 flex flex-col items-left  md:max-w-sm bg-zinc-900'>
                <div class="w-72 md:max-w-sm rounded overflow-hidden shadow-lg">
                  <img class="w-full" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/648cb2d612fa58055f402150/screenshot_2023-06-16-19-07-08-0000.png&fit=cover&h=500&w=800" alt="GlassMovies"></img>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">GlassMovies</div>
                    <p class="text-gray-400 text-base">
                      Created this site to downlaod movies with many pages ofr MARVEL and DC as seperate section. I know its illegal but they aren't mine.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <a href='https://github.com/Anu277/Glassmovies' target='_blank'><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Github </span></a>
                    <a href='https://glassmovies.netlify.app' target='_blank'><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Site </span></a>
                  </div>
                </div>
              </div>
            </div>
            <h2 className='text-3xl my-6 underline text-center'>Made for Fun and Practice</h2>
            <div className='fun-projects w-full flex lg:flex-wrap lg:justify-center overflow-auto'>
              <div className='edu-me leading-4 m-3 flex flex-col items-left  md:max-w-sm bg-zinc-900'>
                <div class="w-72 md:max-w-sm rounded overflow-hidden shadow-lg">
                  <img class="w-full" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65e32ccbdd2735c05ae18a51/screenshot_2024-03-02-13-42-38-0000.webp&fit=cover&h=500&w=800" alt="Pinet"></img>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Pi-Net</div>
                    <p class="text-gray-400 text-base">
                      Created this dite for my pi-net crypto referral.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <a href='https://github.com/Anu277/pi-net' target='_blank'><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Github </span></a>
                    <a href='https://pi-net.netlify.app/' target='_blank'><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Site </span></a>
                  </div>
                </div>
              </div>
              <div className='edu-me leading-4 m-3 flex flex-col items-left  md:max-w-sm bg-zinc-900'>
                <div class="w-72 md:max-w-sm rounded overflow-hidden shadow-lg">
                  <img class="w-full" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6481af00c305be12405a1bc9/screenshot_2023-06-08-10-35-50-0000.png&fit=cover&h=500&w=800" alt="Ist time"></img>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Ist now</div>
                    <p class="text-gray-400 text-base">
                      Created just a regular time based on IST standard using Javascript.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <a href='https://ist-time.netlify.app' target='_blank'><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Site </span></a>
                  </div>
                </div>
              </div>
              <div className='edu-me leading-4 m-3 flex flex-col items-left  md:max-w-sm bg-zinc-900'>
                <div class="w-72 md:max-w-sm rounded overflow-hidden shadow-lg">
                  <img class="w-full" src={timer} alt="GlassMovies"></img>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Timer</div>
                    <p class="text-gray-400 text-base">
                      Created this site for timer. Manually enter the tmie ans just start the countdown.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <a href='https://github.com/Anu277/timer' target='_blank'><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Github </span></a>
                    <a href='https://timer-anu277.netlify.app' target='_blank'><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Site </span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='contact-me flex flex-col justify-center items-center py-20' id='contactme'>
          <h1 className='text-6xl lg:text-9xl bebas' data-aos="zoom-in"> Contact me</h1>
          <div className='contact-links flex flex-col' data-aos="fade-up">
            <a href='mailto:anub0709@gmail.com?subject=From your portfolio Iam...' className='my-10 text-xl md:text-4xl hover:underline'>#Email anub0709@gmail.com</a>
            <a href='https://www.linkedin.com/in/anurag-bheemani-285430217' target='_blank' className='my-10 text-xl md:text-4xl hover:underline'>#LinkedIn</a>
            <a href='https://twitter.com/Anu_b_27' target='_blank' className='my-10 text-xl md:text-4xl hover:underline'>#Twitter</a>
          </div>
        </div>
        <div className='text-center py-5 text-gray-400 bg-[#141414]' >
          <p >Made by me :{`)`}</p>
          <p>Anurag Bheemani</p>
        </div>
      </main>
    </div>
  );
}

export default App;
