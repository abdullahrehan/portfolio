import React, { useEffect, useState } from 'react'
import gmail_vector from '../Images/gmail_vector.png'
import gmail_icon from '../Images/gmail.png'
import whatsapp_vector from '../Images/whatsapp_vector.png'
import whatsapp_icon from '../Images/whatsapp_icon.png'
import { AiOutlineClose } from 'react-icons/ai';

const tabData = [

    {
        name: "Whatsapp",
        text: "Feel free to reach out to me on WhatsApp . Looking forward to connecting with you! ",
        vector: whatsapp_vector,
        icon: whatsapp_icon,
        buttonColor: "bg-[#102129]",
        buttonTextColor: "text-[#01C823]",
        buttonText: "Open Whatsapp",
        link: "https://wa.me/03104722753"
    },
    {
        name: "gmail",
        text: "Feel free to contact me via Gmail . I look forward to hearing from you ! ",
        vector: gmail_vector,
        icon: gmail_icon,
        buttonColor: "bg-[#ECEFF1]",
        buttonTextColor: "text-[#FF3946]",
        buttonText: "Open Gmail",
        link: "mailto:abdullahrehan8118@gmail.com"
    }

]

function Contact({ OpenContact }) {

    const [tabIndex, setTabIndex] = useState(0)

    return (

        // ---- Black Bacground ------- //

        <div className='w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#0009] center text-[#E6E6E6]'>

            {/*  ---- Main Div ------- */}

            <div className='w-[380px] h-[522px] bg-[#4F4F4F] flex flex-col center shadow-lg shadow-[#0006]'>

                {/*  ---- Heading ------- */}

                <div className='w-full h-[10%] bg-red-000 center text-[20px] font-medium text-[#C57054] flex flex-row'>

                    <div className='w-[20%] h-full '></div>

                    <div className='w-[60%] h-full center'>Contact Me</div>

                    <div className='w-[20%] h-full  flex justify-end items-center pr-2'>

                        <AiOutlineClose className='text-white cursor-pointer hover:rotate-180' size={24} color={"white"} onClick={OpenContact} />

                    </div>

                </div>

                {/*  ---- Tabs headings ( Gmail , Whatsapp ) ------- */}

                <div className='w-full h-[10%] bg-red-000 center'>


                    {/*  ---- Whatsapp ------- */}

                    <div className='w-[50%] h-full bg-red-000 center flex flex-col cursor-pointer' onClick={() => setTabIndex(0)}>

                        <div className='w-full h-[90%] bg-green-000 center text-[18px] font-medium'>Whatsapp</div>

                        <div className='w-full h-[10%] bg-green-000 center'>

                            <div className={`w-[80%] h-[1.5px] bg-white ${tabIndex == 0 ? "flex" : "hidden"}`}></div>

                        </div>

                    </div>

                    {/*  ---- Gmail ------- */}

                    <div className='w-[50%] h-full bg-red-000 center flex flex-col cursor-pointer' onClick={() => setTabIndex(1)}>

                        <div className='w-full h-[90%] bg-green-000 center text-[18px] font-medium '>Gmail</div>

                        <div className='w-full h-[10%] bg-green-000 center'>

                            <div className={`w-[75%] h-[2px] bg-[#858585] ${tabIndex == 1 ? "flex" : "hidden"}`}></div>

                        </div>

                    </div>


                </div>

                {/*  ---- Tabs Content ------- */}

                <div className='w-full h-[80%] bg-red-000 flex flex-col center'>

                    {/*  ---- Text ------- */}

                    <div className='w-[90%] h-[20%] bg-red-000 center text-[16px]'>

                        {tabData[tabIndex].text}

                    </div>

                    {/*  ---- Vector Image ------- */}

                    <div className='w-full h-[55%] bg-red-00 center'>

                        <img src={tabData[tabIndex].vector} className='h-[100%]' />

                    </div>

                    {/*  ---- Open Button ------- */}

                    <div className='w-full h-[25%] bg-red-000 center'>

                        <button className={`w-[180px] h-[55px] ${tabData[tabIndex].buttonColor} flex flex-row rounded-[4px]`}>

                            <div className='w-[25%] h-full bg-red-00 center'>

                                <img src={tabData[tabIndex].icon} className='w-[70%]' />

                            </div>

                            <a href={tabData[tabIndex].link} target='_blank' className={`w-[75%] h-full bg-red-00 center font-medium ${tabData[tabIndex].buttonTextColor}`}>

                                {tabData[tabIndex].buttonText}

                            </a>

                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
