import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ParticlesComponent from './components/particles';

import './App.css';
// import anu from '../src/images/Anu2.3crop.png';
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
import gloomdev from '../src/images/gloomdev.png';
import timer from '../src/images/timer.png';


import Navbar from './components/Navbar';
import Hero from './components/Hero';


<script src="https://kit.fontawesome.com/a53285079f.js" crossorigin="anonymous"></script>

function App() {

  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <ParticlesComponent id="particle-bg"></ParticlesComponent>
      <div className="z-20 p-4 md:p-4 lg:p-0 relative Page font-[poppins] text-white flex flex-col justify-between backdrop-blur-[0px]">
        <header className="header m-auto min-h-dvh flex flex-col justify-between " >
          {/* <div className="-z-10 dotted-background"></div> */}
          <Navbar />
          <Hero />
        </header>
        <main className='relative main w-full bg-gradient-to-b from-[#101010] to-[#000000]'>
          <div className='p-3 md:p-10'>
            <div className='relative about z-20 m-auto my-20 lg:max-w-screen-lg lg:w-full  flex flex-col justify-between '>
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
              <div className='relative z-20 abt-head flex justify-left items-center' id='abt'>
                <h1 className='text-6xl lg:text-9xl font-thin bebas' data-aos="zoom-in">About</h1>
              </div>
              <div className='realtive z-20 abt-me leading-10 flex items-center md:max-w-7xl' data-aos="fade-up">
                <section className='flex flex-col gap-3'>
                  <p className='font-extralight'>
                    Hello! <span className=' text-2xl font-semibold text-fuchsia-500'>I'm</span>, a full-stack web developer specializing in the <span className='font-bold  text-fuchsia-500'>MERN stack</span>. My skills include <span className='font-bold  text-fuchsia-500'>C, Java, JavaScript, and Python</span>, with a strong foundation in <span className='font-bold  text-fuchsia-500'>HTML</span> and <span className='font-bold  text-fuchsia-500'>CSS</span>. I create dynamic UIs with <span className='font-bold  text-fuchsia-500'>React</span>.
                  </p>
                  <p className='m-t-2 font-extralight'>
                    Passionate about cutting-edge technology, I continuously learn and adapt. My strong <span className='font-bold  text-fuchsia-500'>problem-solving</span> and <span className='font-bold  text-fuchsia-500'>logical reasoning</span> skills enable me to tackle complex challenges effectively.
                  </p>

                </section>
              </div>
            </div>
          </div>
          <div className='bg-[#101010] p-3 md:p-10'>
            <div className='relative edu z-20 m-auto  lg:max-w-screen-lg lg:w-full flex gap-6 flex-col justify-between' id='edu'>
              <div className='edu-head flex gap-4 justify-left items-center' data-aos="zoom-in">
                <h1 className='text-6xl lg:text-9xl font-thin bebas '>Education</h1>
              </div>
              <div className='edu-me leading-4 flex flex-wrap md:max-w-5xl justify-between' data-aos="zoom-in">
                <div className='border-l p-2'>
                  <h2 className='text-3xl bebas text-left'>Bachelors of Technology {`(2025)`}</h2>
                  <p className='text-xl text-zinc-400 max-w-sm'><strong> Jawaharlal Nehru Technological University of Hyderabad University College Of Engineering Manthani </strong></p>
                  <p className='italic text-gray-600'>- Currently pursuing in {`CSE(AI and ML)`} domain</p>
                </div>
                <div className='border-l p-2'>
                  <h2 className='text-3xl bebas text-left'>Senior Secondary School {`(2021)`}</h2>
                  <p className='text-xl text-zinc-400'><strong> Narayana Junior College </strong></p>
                  <p className='italic text-gray-600'>-Completed my class 11 and 12</p>
                </div>

              </div>
            </div>
          </div>

          {/* ************************************************ */}
          <div className='p-3 md:p-10 bg-gradient-to-b from-[#101010] to-[#000000] '>
            <div className='relative skills z-20 m-auto my-12 lg:max-w-7xl  flex flex-col gap-3 justify-between ' id='skills'>
              <div className='skills-head flex justify-left items-center' data-aos="zoom-in">
                <h1 className='text-6xl lg:text-9xl font-thin bebas text-left '>Skills</h1>
              </div>
              <div className='skills-me leading-4 rounded-sm flex justify-start flex-wrap gap bg-zinc-800 '>
                <div className='skills-expert m-5'>
                  <h2 className='text-3xl lg:text-4xl font-semibold'>Technical Skills</h2>
                  <div className='programming-skills flex flex-wrap my-2 gap-3'>

                    <div className=' md:max-w-96 p-3 bg-zinc-900 rounded-lg flex flex-col flex-wrap '>
                      <h3 className='mb-4 text-2xl lg:text-2xl font-semibold border-b'>Programming Languages</h3>
                      <div className='p-1 rounded-lg flex flex-wrap gap-3 justify-center'>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="100" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={js} alt='js'></img>
                          <span className=' text-amber-300'>JavaScript</span>
                        </section>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="200" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={c} alt='c'></img>
                          <span className=' text-amber-300'>C Language</span>
                        </section>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="300" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={java} alt='java'></img>
                          <span className=' text-amber-300'>Java</span>
                        </section>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="400" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={python} alt='python'></img>
                          <span className=' text-amber-300'>Python</span>
                        </section>
                      </div>
                    </div>

                    <div className=' md:max-w-96 p-3 bg-zinc-900 rounded-lg flex flex-col flex-wrap'>
                      <h3 className='mb-4 text-2xl lg:text-2xl font-semibold border-b'>Frontend Frameworks and Libraries</h3>
                      <div className='p-1 rounded-lg flex flex-wrap gap-3 justify-center'>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="500" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={html5} alt='html'></img>
                          <span className=' text-amber-300'>HTML</span>
                        </section>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="600" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={css3} alt='css'></img>
                          <span className=' text-amber-300'>CSS3</span>
                        </section>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="700" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={react} alt='reactjs'></img>
                          <span className=' text-amber-300'>React.js</span>
                        </section>
                        <section className='flex flex-col justify-between items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="800" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-14 mt-4' src={tailwind} alt='tailwind'></img>
                          <span className=' text-amber-300'>Tailwind</span>
                        </section>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="900" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={bootstrap} alt='bootstrap'></img>
                          <span className=' text-amber-300'>Bootstrap</span>
                        </section>
                      </div>
                    </div>

                    {/* <div className=' md:max-w-lg p-3 bg-zinc-900 rounded-lg flex flex-col flex-wrap '>
                    <h3 className='border-b mb-4 text-2xl lg:text-3xl font-semibold'>Backend Technologies</h3>
                    <div className='p-1 rounded-lg flex flex-wrap gap-3 justify-center'>
                      <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="100" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={node} alt='js'></img>
                        <span className=' text-amber-300'>Node.js</span>
                      </section>
                      <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="300" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={express} alt='c'></img>
                        <span className=' text-amber-300'>Express.js</span>
                      </section>
                    </div>
                  </div> */}


                    <div className=' md:max-w-96 p-3 bg-zinc-900 rounded-lg flex flex-col flex-wrap'>
                      <h3 className='mb-4 text-2xl lg:text-2xl font-semibold border-b'>DevOps and <br></br> Tools</h3>
                      <div className='p-1 rounded-lg flex flex-wrap gap-3 justify-center'>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="1000" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={docker} alt='dockerjs'></img>
                          <span className=' text-amber-300'>Docker</span>
                        </section>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="1100" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={git} alt='git'></img>
                          <span className=' text-amber-300'>Git</span>
                        </section>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="1200" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2 invert' src={github} alt='github'></img>
                          <span className=' text-amber-300'>GitHub</span>
                        </section>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="1300" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={netlify} alt='netlify'></img>
                          <span className=' text-amber-300'>Netlify</span>
                        </section>
                      </div>
                    </div>

                    <div className=' md:max-w-96 p-3 bg-zinc-900 rounded-lg flex flex-col flex-wrap'>
                      <h3 className='mb-4 text-2xl lg:text-2xl font-semibold border-b'>Database</h3>
                      <div className='p-1 rounded-lg flex flex-wrap gap-3 justify-center'>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300"  data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={mysql} alt='js'></img>
                          <span className=' text-amber-300'>MySQL</span>
                        </section>
                        {/* <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="300" data-aos-easing="ease-in" data-aos-duration="200">
                        <img className='h-10 md:h-20 m-2' src={mongodb} alt='c'></img>
                        <span className=' text-amber-300'>MongoDB</span>
                      </section> */}
                      </div>
                    </div>


                  </div>
                </div>
              </div>

              <div className='skills-me leading-4 rounded-sm flex justify-start flex-wrap bg-zinc-800 '>
                <div className='skills-expert m-5'>
                  <h2 className='text-3xl lg:text-4xl font-semibold '>Non-Technical Skills</h2>
                  <div className='programming-skills flex flex-wrap my-2 gap-3'>

                    <div className='p-3 bg-zinc-900 rounded-lg flex flex-col flex-wrap '>
                      <h3 className='mb-4 text-2xl lg:text-2xl font-semibold border-b'>Design Tools</h3>
                      <div className='p-1 rounded-lg flex flex-wrap gap-3 justify-center'>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="100" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={fig} alt='js'></img>
                          <span className=' text-amber-300'>Figma</span>
                        </section>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="200" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={photoshop} alt='c'></img>
                          <span className=' text-amber-300'> Photoshop</span>
                        </section>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="300" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={gimp} alt='java'></img>
                          <span className=' text-amber-300'>Gimp</span>
                        </section>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="400" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={lightroom} alt='react'></img>
                          <span className=' text-amber-300'>Lightroom</span>
                        </section>
                      </div>
                    </div>

                    <div className=' md:max-w-96 p-3 bg-zinc-900 rounded-lg flex flex-col flex-wrap '>
                      <h3 className='mb-4 text-2xl lg:text-2xl font-semibold border-b'>Video Editing</h3>
                      <div className='p-1 rounded-lg flex flex-wrap gap-3 justify-center'>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="500" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={aftereffects} alt='js'></img>
                          <span className=' text-amber-300'>After Effects</span>
                        </section>
                        <section className='flex flex-col justify-center items-center' data-aos="fade" data-aos-offset="300" data-aos-delay="600" data-aos-easing="ease-in" data-aos-duration="200">
                          <img className='h-10 md:h-20 m-2' src={premierepro} alt='c'></img>
                          <span className=' text-amber-300'>Premiere Pro</span>
                        </section>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/********************************************/}
          <div className='bg-[#101010] md:p-10 max-w-6xl m-auto rounded-xl'>
            <div className='relative edu z-20 m-auto my-20 p- rounded-lg lg:w-full flex flex-col gap-4 justify-between items-center' id='projects'>
              <div className='edu-head flex justify-center items-center'>
                <h1 className='text-6xl lg:text-9xl font-thin bebas '>Projects</h1>
              </div>
              <div className='flex flex-col gap-6'>

              <div className='edu-me bg-zinc-900 p-3 rounded-lg max-w-3xl' data-aos="fade-up" data-aos-offset="200">
                  <div className="flex md:flex-row flex-wrap md:flex-nowrap justify-center gap-6">
                    <div className='flex md:order-1'>
                      <img className="w-full md:w-80 h-48 rounded-md border-white border" src={gloomdev} alt="gloomdev"></img>
                    </div>
                    <div className='flex flex-col gap-4 justify-between max-w-96'>
                      <div className="">
                        <div className="font-bold text-xl mb-2">GLOOMDEV-Official Site </div>
                        <p className="text-gray-400 text-base">
                        Collaborated on the creation of GloomDev’s official corporate website. Enhanced user engagement and optimized
                        performance across all devices, ensuring a seamless and efficient user experience.                        </p>
                      </div>
                      <div>
                        <code className=' text-rose-100'><span className='px-2 bg-amber-700 rounded-md'>#React.js</span> <span className='px-2 bg-amber-700 rounded-md'>#Particle.js</span> <span className='px-2 bg-amber-700 rounded-md'>#AOS Library</span>  <span className='px-2 bg-amber-700 rounded-md'>#TailwindCss</span> </code>
                      </div>
                      <div className="">
                        {/* <a href='https://github.com/Anu277/react-aakriti' target='_blank'><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Github </span></a> */}
                        <a href='https://gloom-dev.com/' target='_blank'><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Site </span></a>
                      </div>
                    </div>
                      
                    </div>
                  </div>
                </div>

                <div className='edu-me bg-zinc-900 p-3 rounded-lg max-w-3xl' data-aos="fade-up" data-aos-offset="200">
                  <div className="flex md:flex-row flex-wrap justify-center  items-center  md:flex-nowrap gap-4">
                    <div>
                      <img className="w-full md:w-80 h-48 rounded-md border-white border" src={aakriti} alt="Aakriti"></img>
                    </div>
                    <div className='flex flex-col gap-2 justify-between max-w-96'>
                      <div className="">
                        <div className="font-bold text-xl mb-2">Aakriti-College Festival Site</div>
                        <p className="text-gray-400 text-base">
                        Designed and implemented a responsive website for the Aakriti college festival. Integrated animations, event
                        details, and registration links to deliver a seamless and accessible user experience across multiple devices.                        </p>
                      </div>
                      <div className="">
                        <a href='https://github.com/Anu277/react-aakriti' target='_blank'><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Github </span></a>
                        <a href='https://aakriti.club/' target='_blank'><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Site </span></a>
                      </div>
                      <div>
                        <code className=' text-rose-100'><span className='px-2 bg-pink-700 rounded-md'>#React.js</span> <span className='px-2 bg-pink-700 rounded-md'>#Three.js</span> <span className='px-2 bg-pink-700 rounded-md'>#AOS Library</span>  <span className='px-2 bg-pink-700 rounded-md'>#TailwindCss</span> </code>
                      </div>
                      
                  </div>
                </div>

                <div className='edu-me bg-zinc-900 p-3 rounded-lg max-w-3xl' data-aos="fade-up" data-aos-offset="200">
                  <div className="flex md:flex-row flex-wrap justify-center items-center md:flex-nowrap gap-4">
                    <div className='flex md:order-2'>
                      <img className="w-full md:w-80 h-48 rounded-md border-white border" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65681c5701894f6333bd8c06/screenshot_2023-11-30-05-23-40-0000.png&fit=cover&h=500&w=800" alt="HoloDocs"></img>
                    </div>
                    <div className='flex flex-col md:order-1 gap-2  justify-between max-w-96'>
                      <div>
                        <div className="font-bold text-xl mb-2">HoloDocs-Academic Resources Site</div>
                        <p className="text-gray-400 text-base">
                        Developed a platform to store academic documents and PDFs, featuring links to courses and tech stacks.
                        Centralized resources to support academic and professional development                        </p>
                      </div>
                      <div>
                        <code className=' text-black'><span className='px-2 bg-green-500 rounded-md'>#HTML</span> <span className='px-2 bg-green-500 rounded-md'>#CSS</span> <span className='px-2 bg-green-500 rounded-md'>#JavaScript</span></code>
                      </div>
                      <div>
                        <a href='https://github.com/Anu277/Holodoc' target='_blank'><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Github </span></a>
                        <a href='https://holodocs.netlify.app/' target='_blank'><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Site </span></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='edu-me bg-zinc-900 p-3 rounded-lg max-w-3xl' data-aos="fade-up" data-aos-offset="200">
                  <div className="flex md:flex-row flex-wrap justify-center items-center  md:flex-nowrap gap-4">
                    <div className=''>
                      <img className="w-full md:w-80 h-48 rounded-md border-white border" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/648cb0d144734c04b24f17fa/screenshot_2023-06-16-18-58-29-0000.png&fit=cover&h=500&w=800" alt="Season Now"></img>
                    </div>
                    <div className='flex flex-col  gap-2  justify-between max-w-96'>
                      <div>
                        <div className="font-bold text-xl mb-2">Season Now-Weather App</div>
                        <p className="text-gray-400 text-base">
                        Developed a weather application with dynamic themes tailored to current weather conditions. Integrated a weather
                        API to provide accurate, real-time data for searched locations                        </p>
                      </div>
                      <div>
                        <code className=' text-black'><span className='px-2 bg-lime-500 rounded-md'>#HTML</span> <span className='px-2 bg-lime-500 rounded-md'>#CSS</span> <span className='px-2 bg-lime-500 rounded-md'>#JavaScript</span> <span className='px-2 bg-lime-500 rounded-md'>#WeatherAPI</span></code>
                      </div>
                      <div>
                        <a href='https://github.com/Anu277/Season-Now' target='_blank'><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Github </span></a>
                        <a href='https://season-now.netlify.app/' target='_blank'><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Site </span></a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='edu-me bg-zinc-900 p-3 rounded-lg max-w-3xl' data-aos="fade-up" data-aos-offset="200">
                  <div className="flex md:flex-row flex-wrap justify-center items-center  md:flex-nowrap gap-4">
                    <div className='md:order-1'>
                      <img className="w-full md:w-80 h-48 rounded-md border-white border" src="https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/648cb2d612fa58055f402150/screenshot_2023-06-16-19-07-08-0000.png&fit=cover&h=500&w=800" alt="GlassMovies"></img>
                    </div>
                    <div className='flex flex-col gap-2  justify-between max-w-96'>
                      <div>
                        <div className="font-bold text-xl mb-2">GlassMovies</div>
                        <p className="text-gray-400 text-base">
                          Created this site to download movies with many pages for MARVEL and DC as separate sections. I know it's illegal but they aren't mine.
                        </p>
                      </div>
                      <div>
                        <code className=' text-black'><span className='px-2 bg-yellow-500 rounded-md'>#HTML</span> <span className='px-2 bg-yellow-500 rounded-md'>#CSS</span> <span className='px-2 bg-yellow-500 rounded-md'>#JavaScript</span></code>
                      </div>
                      <div>
                        <a href='https://github.com/Anu277/Glassmovies' target='_blank'><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Github </span></a>
                        <a href='https://glassmovies.netlify.app' target='_blank'><span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Site </span></a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className='contact-me flex flex-col justify-center items-center py-20' id='contactme'>
            <h1 className='text-6xl lg:text-9xl bebas' data-aos="zoom-in"> Contact me</h1>
            <div className='contact-links flex flex-col' data-aos="fade-up">
              <a href='mailto:anub0709@gmail.com?subject=From your portfolio Iam...' className='my-10 text-xl md:text-4xl hover:underline'># anub0709@gmail.com</a>
              <a href='https://www.linkedin.com/in/anurag-bheemani-285430217' target='_blank' className='my-10 text-xl md:text-4xl hover:underline'># LinkedIn</a>
              <a href='https://twitter.com/Anu_b_27' target='_blank' className='my-10 text-xl md:text-4xl hover:underline'># Twitter</a>
            </div>
          </div>
          <div className='text-center py-5 text-gray-400 bg-[#141414]' >
            <p >Made by me :{`)`} with React.js</p>
            <p>Anurag Bheemani</p>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
