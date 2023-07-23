import React from 'react'
import ProfilePic from '../../Images/ProfilePic.png'
import arrow from '../../Images/arrow.png'
import arrowHead from '../../Images/arrowHead.png'
import arrowTail from '../../Images/arrowTail.png'
import browserIcon from '../../Images/browserIcon.png'
import signature from '../../Images/signature.png'
import coffeeLogo from '../../Images/coffeeLogo.png'
import coffeeLogoFilled from '../../Images/coffeeLogoFilled.png'
import Typewriter from 'typewriter-effect';
import { BiDownload } from 'react-icons/bi';
import './Body.css'

function Body({ OpenCV }) {
  return (
    <div className='w-full h-full bg-green-000 flex flex-col md:flex-row text-black'>

      {/*  ---- left-Side ------- */}

      <div className='md:w-1/2 w-full md:h-1/2 h-[45%] order-2 md:order-1 md:h-full bg-green-000 flex flex-col justify-center items-center'>

        {/*  ---- Row-1 ------- */}

        <div className="w-[90%] lg:w-5/6 md:h-[5%] h-[10%] bg-red-000 font-bold">Hi!</div>

        {/*  ---- Row-2 ------- */}

        <div className="w-[90%] lg:w-5/6 h-[20%] bg-red-000 flex flex-col">

          <div className="w-full h-full bg-green-000 flex items-center md:text-[22px] lg:text-[34px] xl:text-[39px] text-xl font-medium">
            I
            <span className='text-[#AE4747]'>'m</span>
            <span className='text-black ml-[12px]'> Abdullah Rehan</span>
          
          </div>
          
          <div className="w-full flex-row h-full bg-green-000 flex items-center md:text-[25px] lg:text-[34px] xl:text-[42px] text-xl font-bold">

            <div className='w-[40%] h-full  text-[28px] flex items-center text-[#AE4747]'> Web Developer </div>
          
            <div className='w-[60%] h-full center'>
         
              <div className='w-[60%] h-full flex items-center'>
                <img src={arrowTail} className='md:h-4/6 pl-[10px] bg-red-000' />
                <img src={arrowHead} className=' absolute mr-[20px] arrow_head bg-green-000' />  
              </div>
         
            </div>
          
          </div>

        </div>

        {/*  ---- Row-3 ------- */}

        <div className="w-[50%] lg:w-5/6 h-[40%] md:h-[20%] bg-red-000 pt-[20px] flex items-center text-[11px] md:text-sm overflow-hidden">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          Lorem Ipsum has been the industry's standard dummy text ever since the
          Lorem Ipsum has been the industry's standard dummy text ever since the
        </div>

        {/*  ---- Row-4 ------- */}

        <div className="w-[90%] lg:w-5/6 md:h-[30%] h-[20%] bg-red-000 flex flex-row">

          <div className="w-full md:w-[27%] h-full bg-blue-000 flex justify-center items-center">
            <div className='w-[100px] hover:w-[175px] flex flex-row md:w-[140px] h-[45px] hover:h-[60px] transition-all hover:bg-[#6b6666] text-white md:h-[55px] bg-[#343333] rounded-[60px] font-medium hover:text-base'>
              {/* <div className='w-[30%] h-full bg-red-000 rounded-tl-full rounded-bl-full center border-white border-r-[1px]'>
                <BiDownload size={25}/>
              </div> */}
              
              <div className='w-[100%] h-full bg-green-000 center rounded-br-full rounded-tr-full '>
                <button className='' onClick={OpenCV}>Open CV</button>
              </div>
            </div>
          </div>
          <div className="w-[27%] h-full hidden bg-blue-000 md:flex justify-center items-center">
            <button className='w-[100px] hover:w-[175px] md:w-[140px] h-[45px] hover:h-[60px] transition-all hover:bg-[#6b6666] hover:text-white md:h-[55px] bg-[#C58484] rounded-[60px] font-medium hover:text-base'>Lets Talk</button>

          </div>

        </div>

      </div>

      {/*  ---- Right-Side ------- */}

      <div className='md:w-1/2 w-full md:h-1/2 h-[55%] order-1 md:order-2 md:h-full bg-green-000 pl-[10px]'>

        {/*  ---- Row-1 ------- */}

        <div className="w-full h-[100%] md:h-[95%] bg-orange-000 flex justify-center items-center pt-1">
          <img src={ProfilePic} className='h-full md:h-5/6 profile_pic' />
        </div>

      </div>

    </div>
  )
}

export default Body
