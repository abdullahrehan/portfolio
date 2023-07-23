import React, { useState } from 'react'
import teacher from "../Images/teacher.png";
import leadership_vector from "../Images/leadership_vector.png";

function MyMentors() {
    const [teachers,setTeachers]=useState([
        {name:"Sir Junaid Akram" , profession:"Schoole Teacher" , institute:""},
        {name:"Muhammad Ali Khan" , profession:"Computer Science Lecturer" , institute:"Comsats University"},
        {name:"Sir Akhzar Nazeer" , profession:"Computer Science Lecturer" , institute:"Comsats University"},
        {name:"Sir Usman Akram " , profession:"Computer Science Lecturer" , institute:"Comsats University"},
    ])

    return (
        <div className='w-[95%] h-full '>
            <div className='w-full h-[12%] bg-red-000 flex items-center font-bold text-[20px]'> My Mentors </div>
            <div className='w-full h-[88%] bg-red-000 flex flex-row srounded-[4px] rounded-[3px] flex items-center justify-start gap-8 flex-flex-row'>
            <div className='w-[80%] h-full flex flex-row gap-8'>
            {teachers.map(data=>
                <div className='w-[230px] h-[95%] bg-[#F5F5F5] shadow-lg rounded-[4px] flex flex-col center '>
                    <div className='w-[90%] h-[95%]'>
                        <div className='w-full h-[70%] bg-[#E8E8E8] rounded-[4px] overflow-hidden '><img src={teacher} className='w-full' /></div>
                        <div className='w-full h-[14%] bg-green-00 rounded-[4px] center text-[20px] font-bold'>{data.name}</div>
                        <div className='w-full h-[8%] bg-green-00 rounded-[4px] center'>{data.profession}</div>
                        <div className='w-full h-[8%] bg-green-00 rounded-[4px] center'>{data.institute}</div>

                    </div>

                </div>
            )}
            </div>
            <div className='w-[20%] h-full bg-red-000 center pb-'>
                    <img src={leadership_vector} className='h-[50%] mb-10'/>
            </div>

            </div>
        </div>
    )
}

export default MyMentors
