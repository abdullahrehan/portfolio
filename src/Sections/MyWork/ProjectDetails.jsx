import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';
import { MdArrowForwardIos } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import vlcIcon from '../Images/vlcIcon.png'
import Pulse from './Pulse.jsx'

function ProjectDetails({ showProjectDetails, setShowProjectDetails, selectedProject, setSelectedProject }) {

    const [showPulse, setShowPulse] = useState(true)
    const [loadProject, setloadProject] = useState(false)
    const [openProjectDetails, setOpenProjectDetails] = useState(true)
    const [projectNo, setprojectNo] = useState(0)
    const [loadVideo, setloadVideo] = useState(false)

    if (loadProject) {
        console.log("pulse will change is 1s");
        setTimeout(() => {
            setShowPulse(false)
        }, 10);
    }
    const openOtherProject = (index) => {
        setprojectNo(index)
        setloadProject(false);
        setloadVideo(true)
    }

    const loadIframe = () => {

        setloadProject(true)
        setloadVideo(false)

    }

    return (


        <div className='w-[95%] h-full bg-red-000 mywork relative'>

            {/*  ---- Title Row ------- */}

            <div className='w-full h-[8%] bg-green-00 flex items-center text-xl font-bold'>

                Projects (My Work)

            </div>

            {/*  ---- Body Row ------- */}

            <>
                <div className={`w-full h-[92%] bg-green-00  ${showPulse ? "flex" : "hidden"}`}>

                    <Pulse />

                </div>


                {/*  ---- Project Details ------- */}

                <div className={`w-full h-[92%] bg-[#F8F8F8] flex-row justify-around shadow-lg  flex-row ${showPulse ? "hidden" : "flex"}`} >

                    {/*  ---- Left Div ------- */}

                    <div className={`${openProjectDetails ? "w-[33%]" : "w-[0%]"} h-full bg-[#EFEFEF] flex-flex-col overflow-hidden`}>

                        {/*  ---- Project Details ------- */}

                        <div className='w-full h-[10%] bg-red-00 flex flex-row'>

                            <div className='w-[20%] h-full bg-red-00 flex flex-row text-[15px] text-[#D27558] center' onClick={() => setSelectedProject([])}>

                                <IoIosArrowBack size={25} />

                                Close

                            </div>

                            <div className='w-[60%] h-full bg-red-00 center text-[19px] font-bold'>{selectedProject.projects[projectNo].name}</div>

                            <div className='w-[20%] h-full bg-red-00'></div>

                        </div>

                        {/*  ---- Project Description ------- */}

                        <div className='w-full h-[40%] bg-red-00 center pl-3'>

                            {selectedProject.projects[projectNo].description}

                        </div>


                        <div className='w-full h-[8%] bg-red-00 text-[19px] font-bold flex items-center pl-3'>Other Projects</div>

                        {/*  ---- Other Projects Videos Vlc ------- */}

                        <div className='w-full h-[30%] bg-red-00 flex flex-row'>

                            <div className='w-[85%] h-full bg-green-00 flex items-center pl-3 flex-row gap-3'>

                                {selectedProject.projects.map((data, index) =>

                                    <div className={`w-[110px] h-[130px] ${projectNo == index ? "bg-[#D9D9D9]" : null} rounded-[4px]`} onClick={() => openOtherProject(index)}>

                                        <div className='w-full h-full bg-red-00 rounded-[4px] flex flex-col'>

                                            <div className='w-full h-[80%] bg-red-00 rounded-[4px] center'>

                                                <img src={vlcIcon} className='h-[90%]' />

                                            </div>

                                            <div className='w-full h-[20%] bg-red-00 rounded-[4px] center'>{data.name}</div>

                                        </div>

                                    </div>

                                )}


                            </div>

                            {/*  ---- Next Project Button ( If Projects are more than 3 ) ------- */}

                            <div className='w-[15%] h-full bg-green-00 rounded-[4px] center'>

                                <div className='w-[35px] h-[35px] rounded-full bg-[#374240] center'>

                                    <MdArrowForwardIos size={18} color="white" />

                                </div>

                            </div>

                        </div>

                        {/*  ---- Open In Github Button ------- */}

                        <div className='w-full h-[12%] bg-red-00 center'>

                            <div className='w-[180px] h-[50px] bg-[#374240] rounded-full center text-white'>

                                <div className='w-[30%] h-full bg-red-00 center'>

                                    <AiFillGithub size={40} color="white" />

                                </div>

                                <div className='w-[70%] h-full bg-red-00 flex items-center ml-1'>

                                    open in Github

                                </div>

                            </div>

                        </div>

                    </div>

                    {/*  ---- Project Video & Technology Titile  ------- */}

                    <div className={`${openProjectDetails ? "w-[67%]" : "w-full"} h-full bg-red-00 flex flex-col center`}>

                        <div className='w-[98%] h-[10%] bg-green-00 flex flex-row'>

                            <div className='w-[10%] h-full bg-red-00'></div>

                            {/*  ---- Skill Heading ------- */}

                            <div className='w-[80%] h-full bg-red-00 flex flex-row'>

                                {/*  ---- Line In heading ------- */}

                                <div className='w-[40%] h-full bg-green-00 center'>

                                    <div className='w-[90%] h-[2px] bg-black'></div>

                                </div>

                                {/*  ---- heading ------- */}

                                <div className='w-[20%] h-full bg-green-00 center'>

                                    <span>

                                        <img src={selectedProject.skillIcon} className='w-[60px] mr-2' />

                                    </span>

                                    <span className='text-[28px] text-[#374240] font-medium'>

                                        {selectedProject.name}

                                    </span>

                                </div>

                                {/*  ---- Line In heading ------- */}

                                <div className='w-[40%] h-full bg-green-00 center'>

                                    <div className='w-[90%] h-[2px] bg-black'></div>

                                </div>

                            </div>


                            {/*  ---- Cross Icon ------- */}

                            <div className='w-[10%] h-full bg-red-00 flex items-center justify-end ' onClick={() => setShowProjectDetails(!showProjectDetails)}>

                                <RxCross2 size={32} />

                            </div>

                        </div>

                        {/*  ---- Vide Section ------- */}

                        <div className='w-full h-[90%]  center'>

                            <div className='w-[98%] h-[95%] bg-[#D9D9D9] center rounded-[4px] relative'>

                                <iframe onLoad={() => loadIframe()} id="frame" className='w-[98%] h-[95%]' src={selectedProject.projects[projectNo].video} rel={0} > </iframe>

                                <div className={`w-full h-full absolute top-0 left-0 bg-[#F8F8F8] ${loadVideo ? "opacity-100" : "opacity-0"}`}>

                                    <div className={`w-full h-full center animate-pulse bg-[#D9D9D9] text-[#696969]`}>

                                        Loading...

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </>

        </div>

    )
}

export default ProjectDetails
