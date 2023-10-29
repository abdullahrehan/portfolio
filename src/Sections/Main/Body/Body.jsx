import React from 'react'
import ProfilePic from '../../Images/profile.png'
import arrowHead from '../../Images/arrowHead.png'
import arrowTail from '../../Images/arrowTail.png'
import './Body.css'

function Body({ OpenCV, OpenContact, OpenGrafeti }) {

  return (

    <div className='w-full h-full bg-green-00 flex flex-col md:flex-row text-black'>

      {/*  ---- left-Side ------- */}

      <div className='md:w-1/2 w-full md:h-1/2 h-[45%] md:order-last lg:order-first md:h-full bg-green-00 flex flex-col justify-center items-center'>

        {/*  ---- Row-1 ( Greeting ) ------- */}

        <div className="w-[90%] lg:w-5/6 md:h-[5%] h-[10%] bg-red-00 font-bold">Hi!</div>

        {/*  ---- Row-2 ( Name & Profession ) ------- */}

        <div className="w-[90%] lg:w-5/6 h-[20%] bg-red-00 flex flex-col">

          <div className="w-full h-full bg-green-000 flex items-center md:text-[32px] lg:text-[34px] xl:text-[35px] text-xl font-medium">

            <span> I </span>

            <span className='text-[#AE4747]'>'m</span>

            <span className='text-black ml-[12px]'> Abdullah Rehan</span>

          </div>

          <div className="w-full flex-row h-full bg-green-00 flex items-center md:text-[24px] lg:text-[34px] xl:text-[42px] text-xl font-bold">

            <div className='lg:w-[60%] md:w-[55%] xl:w-[60%] h-full  lg:text-[28px] md:text-[26px] bg-green-00 flex items-center md:pb-2 text-[#AE4747]'> Web Developer </div>

            <div className='lg:w-[60%] md:w-[45%] xl:w-[40%] h-full justify-start '>

              <div className='w-[100%] h-full flex items-center '>

                {/* <img src={arrowTail} className='md:w-[100%] lg:w-auto flex md:pl-5 lg:pl-0 justify-end items-end bg-red-000' /> */}

                {/* <img src={arrowHead} className=' absolute mr-[0px] arrow_head bg-green-000' /> */}

              </div>

            </div>

          </div>

        </div>

        {/*  ---- Row-3 ( introduction ) ------- */}

        <div className="w-[90%] md:w-[90%] lg:w-5/6 lg:h-[22%] md:h-[30%] bg-red-00 pt-[0px] flex items-center justify-start text-[11px] md:text-sm overflow-hidden">

          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          Lorem Ipsum has been the industry's standard dummy text ever since the
          Lorem Ipsum has been the industry's standard dummy text ever since the

        </div>

        {/*  ---- Row-4 ( Buttons ) ------- */}

        <div className="w-[90%] lg:w-5/6 md:gap-[5px] h-[15%] bg-red-000 flex flex-row">

          <div className="lg:w-[24%] md:w-[36%] h-full bg-blue-000 flex justify-center items-center">

            <button className='lg:w-[130px] h-[45px] md:w-[140px] md:h-[55px] transition-all bg-[#343333] rounded-[60px] font-medium hover:w-[145px] hover:h-[60px] hover:bg-[#2B2B2B] text-white hover:text-[#AE4747]' onClick={OpenCV}>

              Open Cv

            </button>

          </div>

          <div className="lg:w-[24%] md:w-[36%] h-full hidden bg-blue-000 md:flex justify-center items-center">

            <button className='lg:w-[130px] h-[45px] md:w-[140px] md:h-[55px] transition-all bg-[#C58484] rounded-[60px] font-medium hover:w-[145px] hover:h-[60px] hover:bg-[#AE4747] hover:text-white' onClick={OpenContact}>

              Lets Talk

            </button>

          </div>

        </div>

      </div>

      {/*  ---- Right-Side ------- */}

      <div className='md:w-1/2 w-full md:h-1/2 h-[55%] md:h-full bg-green-00 center'>

        {/*  ---- Image Section ------- */}

        <div className="w-full lg:h-[100%] bg-orange-00 flex justify-center md:items-center md:items-end ">

          <img src={ProfilePic} className='lg:h-[85%] md:h-[90%] profile_pic' />

        </div>

      </div>

    </div>
  )
}

export default Body
