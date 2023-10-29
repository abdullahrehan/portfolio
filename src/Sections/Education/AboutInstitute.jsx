import React from 'react'
import EducationQutation from '../Images/EducationQutation.png'
import { BiArrowBack } from 'react-icons/bi';

function AboutInstitute({ institute, AllInstitutes }) {

    const goBack = () => {
        AllInstitutes() 
    }

    return (

        <>

            {/*  ---- Column 1 ------- */}

            <div className={`md:w-[25%] w-[50%] md:h-full h-[35%] bg-green-000 flex justify-center items-center border-x-1 divide-slate-200 `}>
          
                {institute !== undefined ? institute.image : null}
          
            </div>


            {/*  ---- Column 2 (About Instiutute) ------- */}

            <div className='w-[100vw] md:w-[50%] md:h-full h-[65%] bg-green-000 order-3 md:order-2 md:overflow-hidden overflow-x-scroll'>

                <div className='md:w-full w-[185vw] h-full bg-green-000'>

                    <div className='w-full h-[21%] bg-orange-000 flex flex-row divide-slate-200 '>
                   
                        <div className='w-[5%] h-full flex items-center justify-start hover:cursor-pointer' onClick={goBack}><BiArrowBack size={22} /></div>
                   
                        <div className='md:w-[90%] w-[90px] h-full bg-blue-000 center font-bold text-[23px] '>{institute !== undefined ? institute.institute : null}</div>
                   
                        <div className='w-[5%] h-full'></div>
                   
                    </div>

                    <div className='w-full h-[58%] bg-orange-000 flex flex-row  border-t-2 divide-slate-200 flex justify-center  text-justify'>
                 
                        {institute !== undefined ? institute.text : null}
                 
                    </div>

                    <div className='w-full h-[21%] pb-5 bg-red-000 center'>
                 
                        <button className='w-[142px] h-[50px] bg-[#BD6161] hover:bg-[#AE4747] text-white rounded-full'>See Certificate</button>
                 
                    </div>
                
                </div>
            
            </div>

            {/*---- Column 3 (Qutation Image) ------- */}

            <div className='md:w-[25%] w-[50%] md:h-full h-[35%] bg-green-000 flex justify-center items-center order-2 md:order-3'>
       
                <img src={EducationQutation} className='w-[210px]' />
       
            </div>

        </>
    )
}

export default AboutInstitute
