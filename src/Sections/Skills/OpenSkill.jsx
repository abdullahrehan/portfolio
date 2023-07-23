import React from 'react'
import { GrFormClose } from 'react-icons/gr';
import SkillsApi from '../SkillsApi'
import arrowDown from '../Images/arrowDown.png'

function OpenSkill({ setEnableReadMore, setSelectedSkill, selectedSkill }) {
    const closeSelectedSkill = () => {
        setEnableReadMore(false);

    }
    const item = SkillsApi().find(data => data.name == selectedSkill)

    const nextSkill=()=>{

        if(selectedSkill=="ReactJs"){ setSelectedSkill("JavaScript") }

        else if(selectedSkill=="JavaScript"){ setSelectedSkill("Mern")}
        
        else if(selectedSkill=="Mern"){setSelectedSkill("React Native")}
        
        else if(selectedSkill=="React Native"){ setSelectedSkill("Figma")}

        else if(selectedSkill=="Figma"){setSelectedSkill("Photoshop") }

        }

    const prevSkill=()=>{

        if(selectedSkill=="JavaScript"){ setSelectedSkill("ReactJs")}
        
        else if(selectedSkill=="Mern"){setSelectedSkill("JavaScript")}
        
        else if(selectedSkill=="React Native"){ setSelectedSkill("Mern")}

        else if(selectedSkill=="Figma"){setSelectedSkill("React Native") }

        else if(selectedSkill=="Photoshop"){setSelectedSkill("Figma")}
    }


    return (
        <div className='w-[100%] h-[100%] bg-red-000 flex flex-col '>

            {[SkillsApi().find(data => data.name == selectedSkill)].map(data =>
                <>
                    <div className='w-full h-[11%] bg-red-000 flex flex-row'>
                        <div className='w-[70%] h-full bg-green-000 flex items-center pl-2 text-[22px]'>{data.name}</div>
                        <div className='w-[30%] h-full bg-green-000 flex justify-end hover:cursor-pointer' onClick={closeSelectedSkill}>
                            <GrFormClose size={34} />
                        </div>
                    </div>
                    <div className='w-full h-[71%] bg-red-000 flex flex-row flex '>
                        <div className='w-[65%] h-full bg-green-000 text-left flex pt-2 pl-2 pr-[22px] overflow-y-auto scrollbar'>
                            {data.text}
                        </div>
                        <div className='w-[30%] h-full bg-green-000  border-l-[2px] border-[#C8C5C5]  center'>
                            <img src={data.skillIcon} className={`${data.name == "Mern" ? "h-[150px]" : "h-[185px]"}`} />

                        </div>
                    </div>
                    <div className='w-full h-[18%] bg-red-000 flex items-start justify-start relative'>
                        <div className='w-[10%] h-full bg-green-000 center '>
                            <div className='w-[35px] h-[35px] hover:bg-green-300 hover:cursor-pointer rounded-full center' onClick={prevSkill}>
                                <img src={arrowDown} className='rotate-90 pt-1' />
                            </div>
                        </div>

                        <div className='w-[50%] h-[100%] bg-[C8C5C5]  flex-row gap-0 flex justify-center'>
                            <div className='w-[100%] h-full flex flex-row center gap-2 pb-3'>
                                {SkillsApi().map(data =>
                                    <div className={` rounded-full ease-linear duration-75  ${data.name == selectedSkill ? "bg-[#D9D9D9] min-w-[70px] h-[70px]" : "bg-[#605E5E] min-w-[42px] h-[42px]"} center overflow-hidden text-[30px] hover:cursor-pointer hover:bg-[#9D9D9D]`} onClick={() => setSelectedSkill(data.name)}>
                                        <img src={data.name == "Mern" ? data.skillSmallIcon : data.skillIcon} className={data.name == selectedSkill ? "h-[60px]" : "h-[32px]"} />
                                    </div>)}
                            </div>
                        </div>
                        <div className='w-[10%] h-full bg-green-000 center '>
                            <div className='w-[35px] h-[35px] hover:bg-green-300 hover:cursor-pointer rounded-full center' onClick={nextSkill}>
                                <img src={arrowDown} className='-rotate-90 pt-1' />
                            </div>

                        </div>

                        <div className='w-[30%] h-full bg-green-000 center'>
                        </div>

                    </div>
                </>
            )}



        </div>

    )
}

export default OpenSkill
