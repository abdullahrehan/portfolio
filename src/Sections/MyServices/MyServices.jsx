import React, { useState } from 'react'
import Services_vector from '../Images/services vector.png'
import ReactGig from '../Images/React.png'
import MernGig from '../Images/Mern Stack.png'
import htmlCssJsGig from '../Images/html , css, js.png'
import FigmaGig from '../Images/Figma.png'
import TeachingMernGig from '../Images/Teaching Mern.png'
import fiverrSmallIcon from '../Images/fiverrSmallIcon.png'
import arrowDown from '../Images/arrowDown.png'
import fiverrText from '../Images/fiver_logo.png'

function MyServices() {

    const [gigs, setGigs] = useState([
        { name: "React JS", title: "“I will be your frontend designer and developer in react ”", image: <img src={ReactGig} className='w-full scale-100 rounded-t-[2px]' /> },
        { name: "Mern Stack", title: "“I will be your mern stack developer in reactjs nodejs ”", image: <img src={MernGig} className='w- scale-100' /> },
        { name: "html,Css,Js", title: "“I will create your frontend website using html,css,js ”", image: <img src={htmlCssJsGig} className='w- scale-100' /> },
        { name: "Figma", title: "“I will do your website ui ux design on figma ”", image: <img src={FigmaGig} className='w- scale-100' /> },
        // { name: "Web Teaching", title: "“I will be your html , css , js ,nodejs , mongodb and react tutor ”", image: <img src={TeachingMernGig} className='w- scale-100' /> },
    ])

    return (

        <div className='w-[95%] h-full flex flex-col ' >

            <div className='w-full h-[10%] bg-green-000 flex items-start text-[22px]'>

                {/* <img src={fiverrSmallIcon} className='w-[30px]' /> */}

                <span className='pl-0 font-bold'>

                    My Services

                </span>

            </div>

            <div className='w-full h-[90%] bg-green-000 flex flex-row justify-between bg-[#343333] rounded-[3px]'>

                <div className='w-[20%] h-full bg-green-000 center flex flex-col'>

                    <div className='h-[50%] w-full bg-red-000 flex justify-center pl-2 items-end '>

                        {/* <img src={Services_vector} className='w-[85[%]]' /> */}
                        <img src={fiverrText} className='h-[45%]'/>
.

                    </div>

                    <div className='h-[50%] w-full bg-red-000 flex items-start pt-2 justify-center font-[cursive] text-[18px] text-[#00B16D]'>

                        Open to Work !

                    </div>

                </div>
                
                <div className='w-[80%] ml-2 h-full pr-4 bg-green-000 justify-start items-center pl-1 flex flex-row gap-4 overflow-scroll hide-scrollbar  '>

                    {gigs.map(data =>

                        <div className='min-w-[240px] h-[90%] bg-[#FFFFFF] flex center rounded-[4px] shadow-md shadow-[darkgray] hover:cursor-pointer   '>

                            <div className='w-[95%] h-[95%] bg-[#E8E8E8] rounded-[4px] flex flex-col overflow-hidden'>

                                <div className='w-full h-[45%] bg-green-000 flex justify-start items-start  border-black border-b-[0px] overflow-hidden hover:scale-110 ease-linear duration-500'>

                                    {data.image}

                                </div>

                                <div className='w-full h-[55%] bg-green-000 center flex flex-col'>

                                    <div className='w-[95%] h-[30%] bg-green-000 flex justify-start items-center text-[20px] font-bold-500'>

                                        {data.name}

                                    </div>

                                    <div className='w-[95%] h-[35%] bg-green-000 center'>

                                        {data.title}

                                    </div>

                                    <div className='w-full h-[50%] bg-green-000 center'>

                                        <div className='w-[100px] h-[40px] bg-[#374240] center rounded-full text-white hover:cursor-pointer'>
                                            View
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    )}
                </div>

                {/* <div className='w-[1%] h-full bg-red-000 center '>
                    <div className='w-[1px] h-[80%] bg-white shadow-md shadow-[darkgray]'></div>
                </div> */}
{/* 
                <div className='w-[4%] h-full bg-green-00 center flex flex-col'>

                    <div className='w-full h-1/2 bg-red-000 flex justify-center items-end'>

                        <div to="Photoshop" className={'w-[35px] h-[35px] bg-[#00B16D] rounded-full center hover:bg-[#A3AEAB] hover:cursor-pointer'}>

                            <img src={arrowDown} className='-rotate-90 pt-1 '  />

                        </div>

                    </div>

                    <div className='w-full h-1/2 bg-red-000 flex justify-center items-end'>

                       

                    </div>

                </div> */}

            </div>

        </div>
    )
}

export default MyServices
