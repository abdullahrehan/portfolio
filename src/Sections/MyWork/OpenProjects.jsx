import React, { useState } from 'react'
import vlcIcon from '../Images/vlcIcon.png'
import ReactIcon from '../Images/react-icon.png'
import arrowDown from '../Images/arrowDown.png'
import { GrFormClose } from 'react-icons/gr';

function OpenProjects({ closeProjects, selectedProject }) {
    const [projectNo, setProjectNumber] = useState(0)
 

    return (
        <div className='w-[100vw] h-[100vh] bg-[#0009] absolute -top-[3px] -left-[34px]  z-10 center text-[#EAEAEA]'>

            <div className='w-[90%] h-[90%] bg-orange-00 center flex flex-col '>

                <div className='w-full h-[8%] bg-green-00 flex flex-row pr-2 hover:cursor-pointer' onClick={closeProjects}>
                    
                    <div className={'w-[20%] h-full bg-green-00'}></div>

                    <div className={'w-[60%] h-full center bg-red-00 flex justify-start items-center text-[31px] font-bold'}>
                  
                        {selectedProject.name}
                  
                    </div>
                  
                    <div className={'w-[20%] h-full flex justify-end items-center'}>
                  
                        <div className={'w-[35px] h-[35px] bg-[#D9D9D9] rounded-full center hover:bg-[#A3AEAB] hover:cursor-pointer'}>
                  
                            <GrFormClose size={32} color="white" />
                  
                        </div>

                    </div>
                </div>

                <div className='w-full h-[92%] bg-green-00 flex flex-row'>

                    <div className='w-[5%] h-full bg-green-00 center'>

                        <div className={'w-[35px] h-[35px] bg-[#D9D9D9] rounded-full center hover:bg-[#A3AEAB] hover:cursor-pointer'}>

                            <img src={arrowDown} className='rotate-90 pt-1' />

                        </div>

                    </div>

                    <div className='w-[90%] h-full bg-[#3A3A3A] center flex-col  backdrop-filter backdrop-blur-[20px] text-[#EAEAEA] shadow-2xl'>
                       
                        <div className='w-[98%] h-[65%] bg-red-00 flex flex-row justify-between '>
                       
                            <div className='w-[33%] h-full bg-red-00'>
                       
                                <div className='w-full h-[10%] bg-orange-00 flex flex-col justify-center  text-[31px] font-bold'>
                                
                                    {selectedProject.projects[projectNo].name}
                                
                                </div>
                       
                                <div className='w-full h-[90%] bg-orange-00  text-[16px] pt-2'>
                       
                                    {selectedProject.projects[projectNo].description}

                                </div>

                            </div>
                       
                            <div className='w-[65%] h-full bg-red-00 flex justify-end items-center '>
                       
                                <iframe className='w-[98%] h-[95%]' src={selectedProject.projects[projectNo].video}> </iframe>
                            
                            </div>

                        </div>
                        
                        <div className='w-[98%] h-[34%] bg-red-00 center flex flex-col'>

                            <div className='w-full h-[20%] bg-red-00 flex items-center text-[22px]'>Other Projects</div>
                            
                            <div className='w-full h-[80%] bg-red-00 flex flex-row '>
                                
                                <div className='w-[80%] h-full bg-red-00 flex items-center gap-1  '>

                                    {selectedProject.projects.map((data, index) =>
                               
                                        <div className={`w-[140px] h-[88%] ${projectNo === index ? "bg-[#626161]" : "hover:bg-[#626161]"} flex flex-col rounded-[3px] ease-linear duration-500 hover:cursor-pointer `} onClick={() => setProjectNumber(index)}>
                                        
                                            <div className='w-full h-[81%] bg-blue-00 flex justify-center items-end'>
                                                
                                                <img src={vlcIcon} className='h-[100px]'/>
                                            
                                            </div>
                                        
                                            <div className={`w-full h-[19%] bg-blue-00 flex justify-center ${projectNo === index ? "text-black" : null}`}>
                                            
                                                {data.name}
                                            
                                            </div>

                                        </div>

                                    )}

                                </div>
                               
                                <div className='w-[20%] h-full bg-red-00 flex justify-end items-end '>
                               
                                    <img src={selectedProject.skillIcon} className='h-[100px]' />
                               
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='w-[5%] h-full bg-green-00 center'>
                      
                        <div className={'w-[35px] h-[35px] bg-[#D9D9D9] rounded-full center hover:bg-[#A3AEAB] hover:cursor-pointer'}>

                            <img src={arrowDown} className='-rotate-90 pt-1' />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default OpenProjects
