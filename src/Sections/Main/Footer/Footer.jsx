import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { TbBrandFiverr } from 'react-icons/tb';
import { FaLinkedin } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';
import liked_icon from '../../Images/like.png'
import { BsEyeFill } from 'react-icons/bs';
import { BiCommentDetail } from 'react-icons/bi';
import Yayy from '../../Audio/yayy.mp3'
import arrowDown from '../../Images/arrowDown.png'
import { Link } from 'react-scroll'
import "./footer.css"

function Footer({ OpenGrafeti }) {

  const playLikeAudio = () => {
    OpenGrafeti()
    new Audio(Yayy).play();
  }


  return (
    <div className='w-full h-full flex flex-row'>

      {/*  ---- Profiles Links ------- */}

      <div className="lg:w-[200px] md:w-[28%] h-full hidden bg-orange-200 md:flex flex-row justify-around items-center lg:pl-8 lg:pr-8 md:pl-5 md:pr-5">

        <BsGithub color={"black"}  title="Github Account" className='hover:cursor-pointer lg:h-[25px] lg:w-[25px] md:h-[23px] md:w-[23px]' />
        <TbBrandFiverr color={"black"} title="Fiverr" className='hover:cursor-pointer lg:h-[25px] lg:w-[25px] md:h-[23px] md:w-[23px]'  />
        <FaLinkedin color={"black"} title="Linkdin" className='hover:cursor-pointer lg:h-[25px] lg:w-[25px] md:h-[23px] md:w-[23px]'  />
        <ImWhatsapp color={"black"} title="Whatsapp " className='hover:cursor-pointer lg:h-[25px] lg:w-[25px] md:h-[23px] md:w-[23px]'  />

      </div>

      {/*  ---- Explore More ------- */}

      <div className="w-full lg:w-4/6 md:w-[44%] h-full bg-orange-000 flex flex-row">

        {/*  ---- line 1 ------- */}

        <div className="lg:w-[45%] md:w-[44%] h-full bg-red-000 center ">

          <div className='w-[90%] h-[1px] border border-black'></div>

        </div>

        {/*  ---- show more button ------- */}

        <div className="lg:w-[10%] md:w-[12%] h-full bg-red-000 center">

          <Link activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={500} title="scroll down" className='lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] rounded-full center bg-[#D9D9D9] text-black hover:cursor-pointer hover:bg-[#adaaaa]'>

            <img src={arrowDown} size={20} className='pr-0' />

          </Link>

        </div>

        {/*  ---- line 2 ------- */}

        <div className="lg:w-[45%] md:w-[44%] h-full bg-red-000 center">

          <div className='w-[90%] h-[1px] border border-black'></div>

        </div>

      </div>

      {/*  ---- Bottom Right Icons ------- */}

      <div className="lg:w-1/6 md:w-[28%] h-full bg-orange-000 hidden md:flex gap-5 justify-center md:items-center">

        <div className='flex flex-row gap-2'>

          <spam className="text-black font-medium lg:text-[18px] md:text-[16px]">12</spam>

          <BsEyeFill color="black" className='lg:h-[25px] lg:w-[25px] md:h-[23px] md:w-[23px]' />

        </div>

        <div className='flex flex-row gap-1 bg-green-000'>

          <spam className="text-black font-medium lg:text-[18px] md:text-[16px] bg-green-000 center">8</spam>

          <img src={liked_icon} className='lg:h-[25px] lg:w-[25px] md:h-[23px] md:w-[23px] cursor-pointer  bg-red-000 mb-1' onClick={playLikeAudio} />

        </div>
        
        <div className='flex flex-row gap-2'>

          <spam className="text-black font-medium text-[18px]">4</spam>

          <BiCommentDetail size={28} color="black" />
        
        </div>
      </div>

    </div>
  )
}

export default Footer
