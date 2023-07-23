import React, { useEffect, useRef, useState } from 'react'
import EducationIcon from '../Images/EducationIcon.png'
import EducationVector from '../Images/EducationVector.png'
import study from '../Images/study.png'
import EducationQutation from '../Images/EducationQutation.png'
import AboutInstitute from './AboutInstitute'
import suffa from '../Images/school.png'
import comsats from '../Images/comsats.png'


function Education() {

    const education = [
        { type: "School", name: "Metric", year: "2006-2017", grade: "B+", institute: "Suffa Secoundary School", certificate: "", image: <img src={suffa} className='w-[285px]' alt='asd' />, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing ." },
        { type: "College", name: "Inter", year: "20017-2019", grade: "B+", institute: "Govt. College Muridke", certificate: "", image: <img src={suffa} className='w-[285px]' alt='asd' />, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing ." },
        { type: "Universty", name: "BS(CS)", year: "2019-2024", grade: "Grade", institute: "COMSATS Universty Lahore", certificate: "", image: <img src={comsats} className='w-[285px]' alt='asd' />, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing ." },
    ]

    const [showInstitute, setShowInstitute] = useState(false);
    const [institute, setInstitute] = useState()
    const allInstitutes = useRef()
    const selectedInstitutes = useRef()

    const OpenInstitute = (data) => {
        setShowInstitute(true)
        setInstitute(data)

        setTimeout(() => {

            allInstitutes.current.style.opacity = "0"
            allInstitutes.current.style.display = "none"
            selectedInstitutes.current.style.display = "flex"
            setTimeout(() => {
                selectedInstitutes.current.style.opacity = "100"
            }, [100])

        }, [400])
    }

    const AllInstitutes = () => {
        setShowInstitute(false)
        // setInstitute()   

        setTimeout(() => {

            selectedInstitutes.current.style.opacity = "0"
            selectedInstitutes.current.style.display = "none"
            allInstitutes.current.style.display = "flex"
            setTimeout(() => {
                allInstitutes.current.style.opacity = "100"
            }, [100])

        }, [400])
    }



    return (

        <div className='w-[95%] h-full bg-red-00 relative overflow-hidden '>

            {/*  ---- Heading ------- */}

            <div className={`w-full h-[15%] bg-red-000 flex items-center text-xl font-bold hover:cursor-pointer`} onClick={() => setShowInstitute(false)}>
                <span>
                    <img src={EducationIcon} className='pr-1' />
                </span>
                Education
            </div>

            {/*  ---- Body ------- */}

            <div ref={allInstitutes} className={`w-full h-[85%] bg-[#F8F8F8] flex flex-row flex-wrap ease-linear duration-100 opacity-100`}>

                {/*  ---- Column 1 ------- */}



                <div className={`md:w-[25%] w-[50%] md:h-full h-[35%] bg-green-000 flex justify-center items-center order-2 border-x-1 divide-slate-200 ease-linear duration-100 `}>
                    <img src={study} className='w-[90%]' />
                </div>



                {/*  ---- Column 2 ------- */}

                <div className='w-[100vw] md:w-[72%] md:h-full flex justify-start items-center h-[65%] bg-green-000 order-1 md:order-1 md:overflow-hidden overflow-x-scroll flex flex-col'>
                    <div className='w-full bg-red-000 h-[15%] flex justify-center items-center  text-[22px] font-[cursive] text-[#00B16D] border-b-[0px] divide-slate-200 border-[00B16D]'>
                        Educational Background
                    </div>

                    <div className='md:w-[85%] w-[185vw] h-[80%] pt-2 bg-green-00 '>

                        <div className='w-full h-[20%] bg-orange-000 flex flex-row divide-slate-200 '>
                            <div className='md:w-[14%] w-[90px] h-full bg-blue-000 center font-bold'></div>
                            <div className='md:w-[14%] w-[90px] h-full bg-blue-000 center font-bold'>Degree</div>
                            <div className='md:w-[14%] w-[100px] h-full bg-blue-000 center font-bold'>Year</div>
                            <div className='md:w-[26%] w-[250px] h-full bg-blue-000 center font-bold'>Institute</div>
                            <div className='md:w-[14%] w-[75px] h-full bg-blue-000 center font-bold'>Grade</div>
                            {/* <div className='md:w-[18%] w-[120px] h-full bg-blue-000 center font-bold'>Certification</div> */}
                            <div className='md:w-[15%] w-[120px] h-full bg-blue-000 center font-bold'>Open</div>
                        </div>

                        {education.map(data =>
                            <div className='w-full h-[25%] bg-orange-000 flex flex-row  border-t-2 divide-slate-200  rounded-[2px] hover:bg-[#F5F5F5] hover:rounded-[6px] hover:cursor-pointer' onClick={() => OpenInstitute(data)}>
                                <div className='md:w-[14%] w-[90px] h-full bg-blue-000 center text-[15px] font-bold'>{data.type}</div>
                                <div className='md:w-[14%] w-[90px] h-full bg-blue-000 center text-[15px]'>{data.name}</div>
                                <div className='md:w-[14%] w-[100px] h-full bg-blue-000 center text-[15px]'>{data.year}</div>
                                <div className='md:w-[26%] w-[250px] h-full bg-blue-000 center text-[15px]'>{data.institute}</div>
                                <div className='md:w-[14%] w-[75px] h-full bg-blue-000 center text-[15px]'>{data.grade}</div>
                                {/* <div className='w-[18%] h-full bg-blue-000 center text-[15px]'>View</div> */}
                                <div className='w-[15%] h-full bg-blue-000 center text-[15px]'>open</div>
                            </div>
                        )}
                    </div>
                </div>




            </div>

            <div className={`w-full h-[88%] bg-[#F8F8F8] flex flex-row flex-wrap hidden opacity-0 ease-linear duration-100`} onClick={AllInstitutes} ref={selectedInstitutes}>
                <AboutInstitute institute={institute} AllInstitutes={AllInstitutes} setInstitute={(data) => setInstitute(data)} />
            </div>
        </div>
    )
}

export default Education
