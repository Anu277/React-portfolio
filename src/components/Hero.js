import '../App.css';

import anu from '../../src/images/Anu2.4.webp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { lightBlue } from '@mui/material/colors';
import { GitHub } from '@mui/icons-material';;

<script src="https://kit.fontawesome.com/a53285079f.js" crossorigin="anonymous"></script>

const Hero=()=>{
    return(
        <div className='intro flex flex-wrap justify-between items-center align-middle lg:min-w-[1200px] m-auto my-40' data-aos="fade-up">
            <div className='intro-mat flex flex-col rounded-md archivo max-w-xl m-auto md:m-2 backdrop-blur-sm'>
              <h1 className='text-2xl lg:text-5xl'>Hello, it's me</h1>
              <h1 className='text-6xl lg:text-9xl text-amber-0'>Anurag.</h1>
              <h2 className='text-xl lg:text-4xl text-zinc-500 '>Full-Stack Developer <p className='lg:text-4xl'></p> </h2>
              <p className='font-[poppins] my-3 text-2xl  text-zinc-300 '>
                I am a Web Developer specializing in Frontend and Backend technologies.
                Expertise in <strong className='text-white'> HTML, CSS, JavaScript and React </strong>.
                {/* Also a web designer, can create designs using <strong className='text-white'>Figma</strong>. */}
              </p>
              <section className='socialMedia w-auto flex items-center gap-3 border-t mt-1 p-4'>
                <a href='https://www.linkedin.com/in/anurag-bheemani/' target='_blank'>
                  <LinkedInIcon sx={{ color: lightBlue[50], fontSize: 40 }} />
                </a>
                <a href='https://x.com/Anu_b_27' target='_blank'>
                  <XIcon sx={{ color: lightBlue[50], fontSize: 30 }} />
                </a>
                <a href='https://drive.google.com/file/d/1Aes3N4_LI0weZWpw7F-kaN_0NasFjyIt/view?usp=sharing' target='_blank'><button type="button" className=" text-black hover:text-white bg-white hover:bg-zinc-900 p-2 rounded-full border-2 border-zinc-100">Resume</button></a>
              </section>
            </div>
            <div className='intro-me rounded-2xl flex justify-center align-middle'>
              <div className='me-img m-auto'>
                <img src={anu} className='max-h-96 md:max-h-[60vh] anu-img m-auto' alt="Anurag" />
              </div>
            </div>
          </div>
    )
}
export default Hero