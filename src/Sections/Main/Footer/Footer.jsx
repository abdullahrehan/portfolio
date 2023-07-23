import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { TbBrandFiverr } from 'react-icons/tb';
import { FaLinkedin } from 'react-icons/fa';
import bottomIcons from '../../Images/bottomIcons.png'
import triangle from '../../Images/triangle.png'
import rectangle from '../../Images/rectangle.png'
import circle from '../../Images/circle.png'
import { ImWhatsapp } from 'react-icons/im';
import arrowDown from '../../Images/arrowDown.png'
import { Link } from 'react-scroll'
import "./footer.css"

function Footer() {
  return (
    <div className='w-full h-full flex flex-row'>

      {/*  ---- Profiles Links ------- */}

      <div className="md:w-1/6 h-full hidden bg-orange 000 md:flex flex-row justify-around items-center pl-7 pr-7">
        <BsGithub color={"black"} size={26} title="Github Account" className='hover:cursor-pointer'/>
        <TbBrandFiverr color={"black"} title="Fiverr" className='hover:cursor-pointer' size={26} />
        <FaLinkedin color={"black"} title="Linkdin" className='hover:cursor-pointer' size={26} />
        <ImWhatsapp color={"black"} title="Whatsapp " className='hover:cursor-pointer' size={26} />
      </div>

      {/*  ---- Explore More ------- */}

      <div className="w-full md:w-4/6 h-full bg-orange-000 flex flex-row">
        
        {/*  ---- line 1 ------- */}

        <div className="w-[45%] md:w-[46%] h-full bg-red-000 center ">
          <div className='w-[90%] h-[1px] border border-black'></div>
        </div>

        {/*  ---- show more button ------- */}
        
        <div className="w-[10%] md:w-[8%] h-full bg-red-000 center">
          <Link activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={500} title="scroll down" className='w-[32px] h-[32px] md:w-[40px] md:h-[40px] rounded-full center bg-[#D9D9D9] text-black hover:cursor-pointer hover:bg-[#adaaaa]'>
            <img src={arrowDown} size={20} className='pr-0'/>
          </Link>
        </div>
        
        {/*  ---- line 2 ------- */}

        <div className="w-[45%] md:w-[46%] h-full bg-red-000 center">
          <div className='w-[90%] h-[1px] border border-black'></div>
        </div>

      </div>

      {/*  ---- Bottom Right Icons ------- */}

      <div className="md:w-1/6 h-full bg-orange-000 hidden md:flex md:justify-center md:items-center">
        <img src={triangle} className='h-[26px] pl-[12px]'/>
        <img src={rectangle} className='h-[26px] pl-[12px] box'/>
        <img src={circle} className='h-[26px] pl-[12px] animate-bounce'/>
      </div>

    </div>
  )
}

export default Footer
