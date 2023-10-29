import React, { useState } from 'react'
import SkillsApi from '../SkillsApi'
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import "./Annimation.css"

function OpenSkill({ setEnableReadMore, setSelectedSkill, selectedSkill }) {

    const closeSelectedSkill = () => { setEnableReadMore(false) }
    const [skillData, setSkillData] = useState(SkillsApi.find(data => data.name == selectedSkill))
    const skillIndex = SkillsApi.findIndex(data => data.name == skillData.name)

    const nextSkill = () => {

        if (skillIndex != SkillsApi.length - 1) setSkillData(SkillsApi[skillIndex + 1])

    }

    const prevSkill = () => {

        if (skillIndex != 0) setSkillData(SkillsApi[skillIndex - 1])

    }

    return (

        <div className='w-[100%] h-[100%] bg-red-000 flex flex-col'>

            {/*  ---- Skill Name , Cross Icon ------- */}

            <div className='w-full h-[11%] bg-red-000 flex flex-row'>

                <div className='w-[70%] h-full bg-green-000 flex items-center pl-2 text-[22px]'>{skillData.name}</div>

                <div className='w-[30%] h-full bg-green-000 flex justify-end hover:cursor-pointer' onClick={closeSelectedSkill}>

                    <AiOutlineClose size={24} color={"black"} />

                </div>

            </div>

            {/*  ---- Center Area ( Text, Skill Big Icon ) ------- */}

            <div className='w-full h-[71%] bg-red-000 flex flex-row flex '>

                <div className='w-[65%] h-full bg-green-000 text-left flex pt-2 pl-2 pr-[22px] overflow-y-auto scrollbar'>

                    {skillData.text}

                </div>

                <div className='w-[30%] h-full bg-green-000  border-l-[2px] border-[#5F5F5F]  center'>

                    <img src={skillData.skillIcon} className={`${skillData.name == "Mern" ? "h-[150px]" : "h-[185px]"}`} />

                </div>

            </div>

            {/*  ---- Other Skills ------- */}

            <div className='w-full h-[18%] bg-red-000 flex items-start justify-start relative'>

                {/*  ---- Prev Button ------- */}

                <div className='w-[10%] h-full bg-green-000 center '>

                    <div className='w-[35px] h-[35px] hover:bg-green-300 hover:cursor-pointer rounded-full center' onClick={prevSkill}>

                        <IoIosArrowBack size={24} color={"black"} />

                    </div>

                </div>

                {/*  ---- Other Skills Buttons ------- */}

                <div className='w-[50%] h-[100%] bg-[C8C5C5]  flex-row gap-0 flex justify-center'>

                    <div className='w-[100%] h-full flex flex-row center gap-2 pb-3'>

                        {SkillsApi.map(data =>

                            <div className={` rounded-full ease-linear duration-75  ${data.name == skillData.name ? "bg-[#D9D9D9] min-w-[60px] h-[60px] border border-[darkgrey] " : "bg-[#605E5E] min-w-[42px] h-[42px]"} center overflow-hidden text-[30px] hover:cursor-pointer hover:bg-[#9D9D9D]`} onClick={() => setSelectedSkill(data.name)}>

                                <img src={data.name == "Mern" ? data.skillSmallIcon : data.skillIcon} className={data.name == skillData.name ? "h-[50px] icons_annimation" : "h-[32px]"} />

                            </div>)}

                    </div>

                </div>

                {/*  ---- Next Button ------- */}

                <div className='w-[10%] h-full bg-green-000 center '>

                    <div className='w-[35px] h-[35px] hover:bg-green-300 hover:cursor-pointer rounded-full center' onClick={nextSkill}>

                        <IoIosArrowForward size={24} color={"black"} />

                    </div>

                </div>

                <div className='w-[30%] h-full bg-green-000 center'></div>

            </div>

        </div>

    )
}

export default OpenSkill
