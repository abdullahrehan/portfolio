import React, { useState, useRef } from 'react'
import ReactGig from '../Images/React.png'
import MernGig from '../Images/Mern Stack.png'
import htmlCssJsGig from '../Images/html , css, js.png'
import FigmaGig from '../Images/Figma.png'
import fiverrText from '../Images/fiver_logo.png'
import ServicesOffline from './ServicesOffline.jsx'

const gigs = [

    {
        name: "React JS",
        title: "“I will be your frontend developer in react ”",
        image: ReactGig
    },

    {
        name: "Mern Stack",
        title: "“I will be your mern stack developer ”",
        image: MernGig
    },

    {
        name: "html,Css,Js",
        title: "“I will create your frontend using html,css,js ”",
        image: htmlCssJsGig
    },

    {
        name: "Figma",
        title: "“I will do your website ui ux design on figma ”",
        image: FigmaGig
    },

]

function MyServices() {

    const gigImageRef = useRef([])

    const [openOfflineMessage, setopenOfflineMessage] = useState(false)
    const OpenOfflineMessage = () => { setopenOfflineMessage(!openOfflineMessage) }

    if(openOfflineMessage){
     
        document.body.setAttribute('style','overflow:hidden;');    
     
        setTimeout(() => {
            OpenOfflineMessage()
            document.body.setAttribute('style','overflow:auto;');    
          }, 6500);
    
    }

    const viewHoverOnMouseEnter = (index) => {
        gigImageRef.current[index].style.transform = "scale(1.1)"
        gigImageRef.current[index].style.transitionDuration = "700ms"

    }


    const viewHoverOnMouseleave = (index) => {
        gigImageRef.current[index].style.transform = "scale(1)"
    }

    return (

        <div className='w-[95%] h-full flex flex-col'>

            {/*  ---- Heading ------- */}

            <div className='w-full h-[10%] bg-green-000 flex items-start text-[22px]'>

                <span className='pl-0 font-bold'>

                    My Services

                </span>

            </div>

            {/*  ---- Body ------- */}

            <div className='w-full h-[90%] bg-green-000 flex flex-row justify-between bg-[#343333] rounded-[3px]'>

                {/*  ---- Fiverr Logo ------- */}

                <div className='w-[20%] h-full bg-green-000 center flex flex-col'>

                    <div className='h-[45%] w-full bg-red-000 flex justify-center pl-2  items-end '>

                        <img src={fiverrText} className='h-[50%]' />

                    </div>

                    <div className='h-[8%] w-[65%] bg-red-000 center flex flex-row '>

                        <div className='h-full w-[45%] bg-red-000 center'>

                            <div className='h-[2px] w-[90%] bg-white center'></div>

                        </div>

                        <div className='h-full w-[10%] bg-red-000 center'>

                            <div className='h-[10px] w-[10px] rounded-full bg-[#00B16D] center'></div>

                        </div>

                        <div className='h-full w-[45%] bg-red-000 center'>

                            <div className='h-[2px] w-[90%] bg-white center'></div>

                        </div>

                    </div>

                    <div className='h-[45%] w-full bg-red-000 flex items-start justify-center font-[cursive] text-[18px] text-[#00B16D]'>

                        Open to Work !

                    </div>

                </div>

                {/*  ---- My Gigs ------- */}

                <div className='w-[80%] ml-2 h-full pr-4 bg-green-000 justify-start items-center pl-1 flex flex-row gap-4 overflow-scroll hide-scrollbar  '>

                    {gigs.map((data, index) =>

                        <div className='min-w-[240px] h-[90%] bg-[#FFFFFF] flex center rounded-[4px] shadow-md shadow-[darkgray] hover:cursor-pointer' onMouseEnter={() => viewHoverOnMouseEnter(index)} onMouseLeave={() => viewHoverOnMouseleave(index)}>

                            <div className='w-[95%] h-[95%] bg-[#E8E8E8] rounded-[4px] flex flex-col overflow-hidden'>

                                {/*  ---- Gig Image ------- */}
                                
                                <div className='w-full h-[50%] bg-green-000 flex justify-start items-start  border-black border-b-[0px] overflow-hidden'>

                                    <img src={data.image} className='w-full h-[138px] scale-100 rounded-t-[2px]' ref={(el) => gigImageRef.current.push(el)} />

                                </div>

                                {/*  ---- Gig Info ------- */}

                                <div className='w-full h-[50%] bg-green-000 center flex flex-col'>

                                    <div className='w-[95%] h-[22%] bg-green-000 flex justify-start items-center text-[20px] font-bold-500'>

                                        <div className='w-[50%] h-full bg-red-000 flex justify-start items-center' >

                                            {data.name}

                                        </div>

                                        <div className='w-[50%] h-full bg-red-000 flex justify-center items-center' >

                                            <div className='w-full h-[2px] bg-[#2D2D2D]'></div>

                                        </div>

                                    </div>

                                    <div className='w-[95%] h-[38%] bg-green-000 center leading-5'>

                                        {data.title}

                                    </div>

                                    <div className='w-full h-[40%] bg-green-000 center'>

                                        <div className='w-[115px] h-[45px] bg-[#374240] hover:bg-[#262727] center rounded-full text-white hover:cursor-pointer' onClick={()=>setopenOfflineMessage(true)}>

                                            View Gig

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    )}
                </div>

            </div>

            { openOfflineMessage ? <ServicesOffline/> : null }

        </div>
    )
}

export default MyServices
