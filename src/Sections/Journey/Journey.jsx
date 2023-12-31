import React, { useEffect, useState } from 'react'
import shapes from '../Images/shapes.png'
import figmaIcon from '../Images/figmaIcon.png'
import css3Icon from '../Images/css3Icon.png'
import roadmap_checkpoints from '../Images/roadmap_checkpoints.png'
import roadmap_destination from '../Images/roadmap_destination.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import arrowDown from '../Images/arrowDown.png'
import  './annimation.css'

function Journey() {

    const [selectItem, setSeletedItem] = useState(0)
    const [readingMode, setReadingMode] = useState(false)
    
    useEffect(() => {
        if (selectItem == 0) {

            setReadingMode(false)
        }
        else {
            setReadingMode(true)
        }

    }, [selectItem])

    return (

        <div className='w-[95%] h-full bg-red-000 flex justify-center flex-col'>

            {/*  ---- Journey Heading ------- */}

            <div className="w-full md:h-[14%] h-[10%] bg-red-000 flex flex-col md:flex-row">

                <div className="h-3/5 md:h-full w-full md:w-1/2 bg-blue-000 flex items-center flex-row">

                    <div className="h-full  bg-blue-000 flex items-center lg:text-xl text-lg font-semi-bold  ">
                  
                        Journey of <span className='text-[#C57054] pl-2 pr-2 '> Web Development </span> :
                  
                    </div>

                    <div className="h-full bg-blue-000 flex items-center pl-2 ">
                  
                        <img src={shapes} className='h-[41px]' />
                  
                    </div>

                </div>

                <div className="h-2/5 md:h-full w-full md:w-1/2  hidden md:flex bg-blue-000 flex items-center justify-end pr-3 text-[#528885] text-md md:text-lg">
                  
                    started from 2019
                
                </div>

            </div>

            {/*  ---- Journey Body ------- */}

            <div className="w-full rounded h-[90%] bg-[#F8F8F8] flex flex-col md:flex-row shadow-md">

                {/*  ---- Column 1 ------- */}

                <div className="h-[20%] md:h-full w-full md:w-[28%] bg-orange-000 center md:flex-col flex-row relative">

                    <div className='w-[91%] h-[80%] flex justify-start items-end bg-[#ECECEC] rounded-[3px] shadow-lg'>
                
                        <img src={roadmap_checkpoints} className='w-[95%] ' />
                
                    </div>

                    <div className='w-[91%] absolute h-[80%] flex justify-start items-end shadow-lg '>
                
                        <img src={roadmap_destination} className='w-[95%] destination_annimation ' />
                
                    </div>

                </div>


                <div className="h-[10%] md:h-full w-full md:w-[1%] bg-orange-000 center">

                    <div className="h-[80%] w-[1px] bg-black "></div>

                </div>

                {/*  ---- Column 2 ------- */}

                <div className="h-full md:w-[65%] w-full bg-orange-00 overflow-hidden">

                    {/*  ---- Heading ------- */}

                    <div className="h-[18%] md:h-[26%] w-full bg-pink-000 center font-bold md:text-xl text-md">
                
                        <div className={'center ease-in duration-00 hover:cursor-pointer ' + (selectItem == 1 ? 'border-b-2 border-[#C57054] h-[60px]' : 0)} onClick={() => setSeletedItem(1)}>
                
                            <span className='text-[40px] md:text-[45px] pb-0 text-[#C57054] hover:text-[55px] hover:cursor-pointer ease-in duration-300'>D</span>esign ,
                
                        </div>
                
                        <div className={'center ease-in duration-00 hover:cursor-pointer pl-2 ' + (selectItem == 2 ? 'border-b-2 border-[#C57054] h-[60px]' : 0)} onClick={() => setSeletedItem(2)}>
                
                            <span className='text-[40px] md:text-[45px] pb-0 text-[#C57054] hover:text-[55px] ease-in duration-300 hover:cursor-pointer'>D</span>evelope &
                
                        </div>
                
                        <div className={'center ease-in duration-00 hover:cursor-pointer pl-2 ' + (selectItem == 3 ? 'border-b-2 border-[#C57054] h-[60px]' : 0)} onClick={() => setSeletedItem(3)}>
                
                            <span className='text-[40px] md:text-[45px] pb-0 text-[#C57054] hover:text-[55px] hover:cursor-pointer ease-in duration-300 '>D</span>eploy
                
                        </div>
                
                    </div>

                    {/*  ---- Journey Text ------- */}

                    <div className="h-[58%] md:h-[50%]  w-full bg-pink-000 flex justify-center md:text-[18px] text-sm text-center ">

                        <div className={'w-[10%] h-[100%] bg-green-000 ' + (readingMode ? 'center' : 'hidden')} >
                            
                            <button className={'w-[35px] h-[35px] hover:bg-[#9C4F4F] rounded-full center'} onClick={() => setSeletedItem(selectItem - 1)} disabled={selectItem == 0 ? true : false}>
                            
                                <img src={arrowDown} className='rotate-90 pt-1' />
                            
                            </button>

                        </div>
                        
                        <div className={' h-[100%] bg-green-000 center ' + (readingMode ? 'w-[80%]' : 'w-[90%]')}>
                        
                            <Carousel selectedItem={selectItem} showArrows={false} showStatus={false} infiniteLoop={true} showThumbs={false} showIndicators={false}>
                        
                                <div>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged but also the leap into electronic typesetting, remaining essentially unchanged.
                                </div>

                                <div>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged but also the leap into electronic typesetting, remaining essentially unchanged.
                                </div>

                                <div>
                                    Lorem is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged but also the leap into electronic typesetting, remaining essentially unchanged.
                                </div>

                                <div>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged but also the leap into electronic typesetting, remaining essentially unchanged.
                                </div>

                            </Carousel>
                        
                        </div>
                        
                        <div className={'w-[10%] h-[100%] bg-green-000 ' + (readingMode ? 'center' : 'hidden')}>
                        
                            <button className='w-[35px] h-[35px] hover:bg-[#9C4F4F] rounded-full center' onClick={() => setSeletedItem(selectItem + 1)} disabled={selectItem == 3 ? true : false}>
                        
                                <img src={arrowDown} className='-rotate-90' />
                        
                            </button>
                        
                        </div>

                    </div>

                    <div className="h-[20%] md:h-[24%]  w-full bg-pink-000 flex justify-center md:text-[18px] text-sm text-center center flex-col">

                        <div className={'w-[200px] h-[50px] bg-green-000 ' + (selectItem == 0 || selectItem==3 ? 'hidden' : 'center')}>
                        
                            <input type='radio' className='border-0 mr-1' checked={selectItem == 1 ? true : false} />
                            <input type='radio' className='border-0 mr-1' checked={selectItem == 2 ? true : false} />
                            <input type='radio' className='border-0 mr-1' checked={selectItem == 3 ? true : false} />
                        
                        </div>

                        <div className={'w-[200px] h-[50px] bg-green-000 ' + (selectItem==3 ? 'center' : 'hidden')} onClick={()=>setSeletedItem(0)}>
                        
                            <button className={'w-[120px] h-[50px] bg-[#374240] hover:bg-[#2B3231] text-white text-[16px] rounded-full ' }>Go Back</button>
                        
                        </div>

                        <button className={'w-[180px] h-[50px] bg-[#374240] hover:bg-[#2B3231] text-white text-[16px] rounded-full ' + (selectItem != 0 ? 'hidden' : 'centet')} onClick={() => setSeletedItem(1)}>
                        
                            Continue Reading
                        
                        </button>

                    </div>

                </div>

                {/*  ---- Column 3 ------- */}

                <div className="h-[16%] md:h-full w-full md:w-[15%] bg-orange-000 flex flex-row md:flex-col">

                    {/*  ---- Row 1 ------- */}

                    <div className="h-full md:h-[50%] w-full bg-violet-00 center">

                        <div className='w-[70%] h-[70%] bg-green-00 -rotate-[25deg]'>

                            <img src={css3Icon} className='w-[55px]  rotation_annimaton' />

                        </div>

                    </div>

                    {/*  ---- Row 2 ------- */}

                    <div className="h-full md:h-[50%] w-full bg-violet-0 flex flex-row center">

                        <img src={figmaIcon} className='md:w-[45px] h-[45px] hover:-rotate-45 ease-linear duration-300 figma_icon_annimation' />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Journey
