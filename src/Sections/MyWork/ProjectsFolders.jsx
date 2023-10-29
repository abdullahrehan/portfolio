import React, { useRef, useState } from 'react'
import FolderIcon from '../Images/folder.png'
import SkillsApi from '../SkillsApi'
import OpenProjects from './OpenProjects'
import Services_vector from '../Images/services vector.png'
import { Link } from 'react-scroll'

function ProjectsFolder({showProjectDetails,setShowProjectDetails,selectedProject, setSelectedProject}) {

    const [OpenProject, setOpenProject] = useState(false)
    const mywork = useRef()

    const openProjectFunc = (data) => {
        setSelectedProject(data)
        setShowProjectDetails(!showProjectDetails)
    }
    
    const closeProjects = () => {
        setOpenProject(false)
        document.body.style.overflowY = "scroll"
    }

    return (
        <div className='w-[95%] h-full bg-red-000 mywork relative' ref={mywork}>

            {/*  ---- Title Row ------- */}

            <div className='w-full h-[15%] bg-green-000 flex items-center text-xl font-bold'>Projects (My Work)</div>

            {/*  ---- Body Row ------- */}

            <div className='w-full h-[85%] bg-[#F8F8F8] flex flex-row justify-around shadow-lg'>

                <div className='w-[20%] h-full bg-orange-000 flex items-end justify-end'>
           
                    <img src={Services_vector} className='w-[95%]' />
           
                </div>

                <div className='min-w-[80%] h-full  center gap-3 ml-6s '>

                    {/*  ---- Skills ------- */}

                    {SkillsApi.map((data,index) =>

                        <Link key={index} activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500} className='min-w-[150px] h-[75%] hover:bg-[#e8e8e8] hover:cursor-pointer flex flex-col rounded-[4px] shadow-lg' onClick={() => openProjectFunc(data)}>

                            <div key={index} className='w-full h-[80%] bg-green-000 center'>

                                <img key={index} src={FolderIcon} className='h-[100px]'/>

                            </div>

                            <div key={index} className='w-full h-[20%] bg-green-000 flex flex-row center'>

                                <span key={index}>
                                    
                                    <img key={index} src={data.skillIcon} className='h-[35px]'/>
                                
                                </span>

                                <span key={index} className='h-[40px] bg-red-000 center'>
                                    
                                    {data.name}
                                
                                </span>

                            </div>

                        </Link>
                    )}

                </div>


            </div>

            {OpenProject ? <OpenProjects closeProjects={closeProjects} selectedProject={selectedProject} /> : null}

        </div>
    )
}

export default ProjectsFolder
