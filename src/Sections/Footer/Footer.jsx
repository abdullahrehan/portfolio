import React, { useState } from 'react'
import facebook_Icon from '../Images/facebook_Icon.png'
import insta_Icon from '../Images/insta_Icon.png'
import twitter_Icon from '../Images/twitter_Icon.png'
import Contact from '../ContactUs/Contact'

function Footer() {


    const [openContact, setopenContact] = useState(false)

    const OpenContact = () => {

        setopenContact(!openContact)

    }

    return (

        <div className='w-[95%] max-w-[1300px] h-full bg-[#343333] flex center rounded shadow-lg'>

            <div className='w-full  h-full flex flex-col text-white'>
                {/*  ---- Upper Portion ------- */}

                <div className='w-full h-[75%] md:h-[60%]  bg-red-000 flex flex-col md:flex-row'>

                    {/*  ---- Left Side ( Quotation & Contact us Button ) ------- */}

                    <div className='w-full h-[30%] md:w-[40%] md:h-full bg-red-000 pl-0 '>

                        {/* <div className='w-full h-full bg-green-000 center '> */}

                            <div className='w-full h-full bg-red-000 flex sm:flex-row md:flex-col lg:flex-col'>

                                {/*  ----  Quotation  ------- */}

                                <div className='w-[50%] md:w-full md:h-[50%] lg:w-full md:pl-10 lg:pl-10  w-[80%] h-full bg-green-000 flex items-end text-3xl pl-2 md:text-[clamp(0rem,calc(350vw/100),2.2rem)] font-medium'>

                                    <span>Your  <span className='text-[#C57054]'>vision</span>, <br /> Our web <span className='text-[#C57054]'>expertise</span></span>

                                </div>

                                {/*  ----  Contact Us Button  ------- */}

                                <div className='w-[50%]  md:h-[50%] flex items-center justify-end md:justify-start pr-2 md:w-full md:pl-10 w-[20%] h-full bg-green-00  '>

                                    <button className='w-[150px] h-[54px] border-[1px] border-[#C57054] text-[#C57054]' onClick={() => setopenContact(true)}>Contact Us</button>

                                </div>

                            {/* </div> */}

                        </div>

                    </div>

                    {/*  ---- Right Side ( Services , Links , Credits ) ------- */}

                    <div className='w-full h-[70%] md:w-[60%] md:h-full bg-red-000 flex-row center md:flex md:justify-end text-[16px] md:gap-[25px] gap-[20px] sm:gap-[50px]'>

                        {/*  ----  Services  ------- */}

                        <div className='w-[20%] max-w-[150px] min-w-[140px] md:min-w-[120px] h-full bg-red-000 flex justify-center flex-col text-[1rem] md:text-sm '>


                                <div className='h-[30px] bg-red-000 flex justify-start items-center md:text-[1.5rem] text-[1.6rem] text-[#9A9A9A]'>

                                    Services

                                </div>

                                <div className='h-[12px] bg-red-000 flex justify-start items-center'></div>

                                <div className='h-[30px] bg-red-000 flex justify-start items-center'>

                                    Web Designing

                                </div>

                                <div className='h-[30px] bg-red-000 flex justify-start items-center'>

                                    Web Development

                                </div>

                                <div className='h-[30px] bg-red-000 flex justify-start items-center'>

                                    SEO Optimization

                                </div>

                                <div className='h-[30px] bg-red-000 flex justify-start items-center'>

                                    Web Hosting

                                </div>


                        </div>

                        {/*  ----  Links  ------- */}

                        <div className='w-[20%] max-w-[150px] min-w-[140px] md:min-w-[125px] h-full bg-red-000 flex justify-center flex-col text-base'>

                                <div className='h-[30px] bg-red-000 flex justify-start items-center md:text-[1.5rem] text-[1.6rem] text-[#9A9A9A]'>

                                    Quick Links

                                </div>

                                <div className='h-[12px] bg-red-000 flex justify-start items-center'></div>

                                <div className='h-[30px] bg-red-000 flex justify-start items-center'>

                                    Home

                                </div>

                                <div className='h-[30px] bg-red-000 flex justify-start items-center'>

                                    Services

                                </div>

                                <div className='h-[30px] bg-red-000 flex justify-start items-center'>

                                    Education

                                </div>

                                <div className='h-[30px] bg-red-000 flex justify-start items-center'>

                                    Skills

                                </div>

                        </div>

                        {/*  ----  Credits  ------- */}

                        <div className='w-[15%] max-w-[150px] min-w-[120px] h-full bg-red-000 flex justify-center flex-col text-base'>

                                <div className='h-[30px] bg-red-000 flex justify-start items-center md:text-[1.5rem] text-[1.6rem] text-[#9A9A9A]'>

                                    Credits

                                </div>

                                <div className='h-[12px] bg-red-000 flex justify-start items-center'></div>

                                <div className='h-[30px] bg-red-000 flex justify-start items-center'>

                                    Vectory

                                </div>

                                <div className='h-[30px] bg-red-000 flex justify-start items-center'>

                                    Storyset

                                </div>

                                <div className='h-[30px] bg-red-000 flex justify-start items-center'>

                                    Freepick

                                </div>

                                <div className='h-[30px] bg-red-000 flex justify-start items-center'>

                                    Storyset

                                </div>

                        </div>

                    </div>

                </div>

                {/*  ---- Lower Portion (Copyright & Icons) ------- */}

                <div className='w-full h-[25%] md:h-[40%] bg-red-000 flex flex-col'>

                    {/*  ----  Icons  ------- */}

                    <div className='w-full h-[55%] flex flex-row bg-red-00 flex items-end justify-center pb-2'>

                            <img src={facebook_Icon} className='w-[40px] h-[38px]' />

                            <img src={twitter_Icon} className='w-[40px] h-[38px]' />

                            <img src={insta_Icon} className='w-[40px] h-[38px]' />

                    </div>

                    {/*  ----  Line  ------- */}

                    <div className='w-full h-[4%] bg-red-000 center'>

                        <div className='w-[90%] h-[1px] bg-[#6B6B6B]'></div>

                    </div>

                    {/*  ----  Copyright   ------- */}

                    <div className='w-full h-[41%] bg-red-000 center text-sm text-[#848080]'>

                        Copyright 2023 Muhammad Abdullah Rehan

                    </div>

                </div>

                {openContact ? <Contact OpenContact={OpenContact} /> : null}

            </div>
        </div>
    )
}

export default Footer
