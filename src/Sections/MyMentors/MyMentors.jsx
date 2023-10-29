import React from 'react'
import teacher from "../Images/teacher.png";
import teacher_reference from "../Images/reference_teacher.png";
import leadership_vector from "../Images/leadership_vector.png";
import whatsapp_icon from "../Images/whatsapp_icon.png";


const teachers = [
    { name: "Sir Junaid Akram", profession: "Computer Teacher", institute: "School", img: teacher, ref: false },
    { name: "Muhammad Ali Khan", profession: "Computer Science Lecturer", institute: "Comsats University", img: teacher, ref: false },
    { name: "Sir Akhzar Nazeer", profession: "Computer Science Lecturer", institute: "Comsats University", img: teacher_reference, ref: true },
    { name: "Sir Usman Akram ", profession: "Assistant Prof. CS Dept.", institute: "Comsats University", img: teacher_reference, ref: true },
]

function MyMentors() {

    return (

        <div className='w-[95%] h-full '>

            {/*  ---- Heading ------- */}

            <div className='w-full h-[12%] bg-red-000 flex items-center font-bold text-[20px]'>

                My Mentors

            </div>

            {/*  ---- Body ------- */}

            <div className='w-full h-[88%] bg-red-000 flex flex-row srounded-[4px] rounded-[3px] flex items-center justify-start gap-8 flex-flex-row'>

                <div className='w-[80%] h-full flex  flex-row gap-8'>

                    {teachers.map(data =>

                        <div className='w-[230px] h-[95%] bg-[#F5F5F5] shadow-lg rounded-[4px] flex flex-col center relative'>

                            <div className='w-[90%] h-[95%]'>

                                <div className='w-full h-[70%] bg-[#E8E8E8] rounded-[4px] overflow-hidden relative flex justify-end items-end '>

                                    <img src={data.img} className={`${data.ref?"w-[100%]":"w-[95.5%]"} `} />

                                    {data.ref ? 
                                    
                                        <div className='w-[50px] h-[50px] bg-[#0009] rounded-full center absolute right-0 bottom-0'>
                                       
                                            <img src={whatsapp_icon} className=' h-[35px]' />
                                       
                                        </div>

                                    : null}
                                
                                </div>

                                <div className='w-full h-[14%] bg-green-00 rounded-[4px] center text-[20px] font-bold'>

                                    {data.name}

                                </div>

                                <div className='w-full h-[8%] bg-green-00 rounded-[4px] center'>

                                    {data.profession}

                                </div>

                                <div className='w-full h-[8%] bg-green-00 rounded-[4px] center'>

                                    {data.institute}

                                </div>

                            </div>

                        </div>
                    )}

                </div>

                {/*  ---- Vector ------- */}

                <div className='w-[20%] h-full bg-red-000 center pb-'>

                    <img src={leadership_vector} className='h-[50%] mb-10' />

                </div>

            </div>

        </div>

    )
}

export default MyMentors
