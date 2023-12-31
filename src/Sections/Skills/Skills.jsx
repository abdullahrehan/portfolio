import React, { useState, useRef } from 'react'
import SkillsApi from '../SkillsApi'
import arrowDown from '../Images/arrowDown.png'
import OpenSkill from './OpenSkill'
import skillsIcon from '../Images/skillsIcon.png'
import { Link } from 'react-scroll'

function Skills() {

    const [enableReadMore, setEnableReadMore] = useState(false)
    const [selectedSkill, setSelectedSkill] = useState("ReactJs")
    const skillsRefs = useRef([]);

    const readMoreFunc = (data, index) => {

        setEnableReadMore(!enableReadMore);
        setSelectedSkill(data.name)

    }

    const addClass=(index)=>{
        console.log(skillsRefs.current[index]);
        skillsRefs.current[index].classList.add("skill_icon_annimation")
    }

    const removeClass=(index)=>{
        console.log(skillsRefs.current[index]);
            skillsRefs.current[index].classList.remove("skill_icon_annimation")            
    }

    return (

        <div className='w-[95%] h-full bg-red-000'>

            {/*  ---- Hidden Heading ------- */}

            <div className="h-[7%] w-full bg-orange-000 md:hidden flex md:items-center items-end font-bold">Skills</div>

            {/*  ---- Main Body ------- */}

            <div className='h-[93%] md:h-[100%] w-full bg-red-000 flex md:flex-row flex-col-reverse relative overflow-hidden'>

                {/*  ---- Skills Cards Section ------- */}

                <div className="h-4/6 md:h-full md:w-[68%] w-full bg-orange-000 flex flex-col relative overflow-hidden">

                    {/*  ---- Skills Heading ------- */}

                    <div className="h-[13%] w-full bg-orange-000 md:flex hidden items-end text-xl font-bold">Skills :</div>

                    {/*  ---- Skills Cards ------- */}

                    <div className={`h-[100%] md:h-[85%] w-full bg-orange-000 flex items-center pl-0 overflow-x-auto gap-6 hide-scrollbar`}>

                        {SkillsApi.map((data, index) =>

                            <div onMouseEnter={()=>addClass(index)} onMouseLeave={()=>removeClass(index)} className={`h-[90%] shadow-lg shadow-[darkgrey] rounded bg-[#EFEFEF] hover:bg-[#E6E6E6] text-black min-w-[200px] flex justify-center flex-col hover:cursor-pointer ${data.name} `}>

                                <div className={`w-full  bg-yellow-000 flex h-[40%] flex-col`}>

                                    <div className={`w-full h-[70%] bg-orange-000 flex flex-row `}>
                                        
                                        <div className='w-[100%] h-full bg-green-000 center'>
                                        
                                            <img src={data.skillIcon} ref={element => skillsRefs.current[index] = element} className={`${data.name == "Mern" || data.name == "Photoshop" ? "md:h-[70px] h-[18px]" : "h-[65px]"} h-[65px] } `} />
                                        
                                        </div>
                                         
                                    </div>

                                    <div className={`w-full h-[30%] bg-orange-000 flex flex-col center`}>

                                        <div className={`w-full bg-orange-000 center ${data.name == "Mern" || data.name == "Photoshop" ? "flex-col" : "flex-row"} `}>

                                            <span className='text-[20px]'>

                                                {data.name == "JavaScript" ? "Js" : data.name}

                                            </span>

                                        </div>

                                    </div>

                                </div>

                                <div className={`w-full h-[60%] bg-yellow-00 center flex-col`}>

                                    <div className={`w-[90%] h-[76%] bg-[#d7d7d7] rounded  text-center text-[13px] center }`}>
                                        
                                        <span>
                                        
                                            Lorem Ipsum is
                                            simply dummy text
                                            of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s,
                                        
                                        </span>
                                    
                                    </div>

                                    <div className='w-[90%] h-[20%] bg-red-000 flex justify-end items-end pr-2 pb-1 text-[14.5px] text-blue-500 hover:text-blue-600 '>
                                    
                                        <button onClick={() => readMoreFunc(data, index)} className={` border-blue-600 border-b-[1px]`}>
                                        
                                            Read More
                                        
                                        </button>
                                    
                                    </div>

                                </div>

                            </div>
                        )}

                    </div>


                    {/*  ---- Button Scroll ------- */}

                    <div className={'w-[89%] h-[20px] bg-green-000 md:justify-center md:items-center flex '}>
                    
                        <div className='w-[220px] h-[7px] rounded bg-[#D9D9D9] flex items-center'>
                    
                            <div className='w-[120px] h-[7px] rounded bg-[#A3AEAB] pl-2'></div>
                    
                        </div>
                    
                    </div>

                </div>


                {/*  ---- Next Button ------- */}

                <div className='h-full w-[4%] bg-green-000 center'>

                    <Link to="Photoshop" className={'w-[35px] h-[35px] bg-[#D9D9D9] rounded-full center hover:bg-[#A3AEAB] hover:cursor-pointer'}>

                        <img src={arrowDown} className='-rotate-90 pt-1' />

                    </Link>

                </div>

                <div className={`w-[930px] h-[335px] bg-[#EFEFEF] text-black absolute ease-linear duration-500 ${enableReadMore ? "bottom-0" : "-bottom-96"}`}>
              
                    <OpenSkill setEnableReadMore={(data) => setEnableReadMore(data)} setSelectedSkill={(data) => setSelectedSkill(data)} selectedSkill={selectedSkill} />
              
                </div>

                {/*  ---- Skills Pic Section ------- */}
              
                <div className='w-[2%] h-full bg-red-000 center '>
              
                    <div className='w-[2px] h-[60%] bg-[#BDBDBD] shadow-md shadow-[darkgray] mt-9'></div>
              
                </div>

                <div className="h-2/6 md:h-full md:w-[26%] w-full bg-orange-000 flex md:flex-col flex-row">

                    {/*  ---- Skills Quotation ------- */}

                    <div className="w-[45%] md:h-[15%] h-full md:w-full bg-orange-000 flex justify-center pb-0 items-end font-bold text-[#C57054] md:items-end items-center">

                    </div>

                    {/*  ---- Skills Vector Image ------- */}

                    <div className="w-[53%] md:h-[85%] h-full md:w-full bg-orange-000 pb-0 center">

                        <img src={skillsIcon} className='h-[90%] pb-2' />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Skills
