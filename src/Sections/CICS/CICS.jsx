import React, { useState } from 'react'
import events from '../Images/events.png'
import cics_logo from '../Images/cics_logo.png'
import CertificatePending from './certificatePending.jsx'

function CICS() {

    const [openCertificatePendingMessage, setopenCertificatePendingMessage] = useState(false)
    const OpenCertificatePendingMessage = () => { setopenCertificatePendingMessage(!openCertificatePendingMessage) }

    if (openCertificatePendingMessage) {

        document.body.setAttribute('style', 'overflow:hidden;');
        setTimeout(() => {
            OpenCertificatePendingMessage()
            document.body.setAttribute('style', 'overflow:auto;');
        }, 4000);
    
    }

    return (

        <div className='w-[95%] h-full '>

            {/*  ---- Heading ------- */}

            <div className='w-full h-[12%] bg-red-000 flex items-center font-bold text-[20px]'>Extra Curricular Extivities</div>

            {/*  ---- Body ------- */}

            <div className='w-full h-[88%] bg-red-000 flex flex-row bg-[#F8F8F8] rounded-[4px] rounded-[3px] relative shadow-md'>

                <div className='w-full h-full flex '>

                    {/*  ---- Left Section (About Society) ------- */}

                    <div className='w-[70%] h-full bg-red-000 flex flex-col'>

                        <div className='w-full h-[80%] bg-green-00 flex flex-col'>

                            {/*  ---- Name & Logo ------- */}

                            <div className='w-full h-[22%] bg-green-000 center flex-row text-[25px]'>

                                <div className='w-[15%] h-full '>

                                    <img src={cics_logo} className='h-[100%]' />

                                </div>

                                <div className='w-[70%] h-full center'>

                                    Comsats Islamic & Cultural Society

                                </div>

                                <div className='w-[15%] h-full'></div>

                            </div>

                            {/*  ---- About Society ------- */}

                            <div className='w-full h-[78%] bg-green-000 center pr-2 pl-2'>

                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's  standard dummy text ever since the 1000s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                                essentially unchanged. It was popularised in the 1960s with the release
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's  standard dummy text ever since the 1000s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has and scrambled it to make a type specimen book. It has

                            </div>

                        </div>

                        {/*  ---- Certificate Button ------- */}

                        <div className='w-full h-[22%] bg-green-00 flex justify-center items-start'>

                            <button className='w-[150px] h-[52px] bg-[#AE4747] rounded-full mr-2 text-white' onClick={OpenCertificatePendingMessage}>

                                See Certificate

                            </button>

                        </div>

                    </div>

                    {/*  ---- Line ------- */}

                    <div className='w-[2%] h-full bg-red-00 center'>

                        <div className='w-[1px] h-[90%] bg-black'></div>

                    </div>


                    {/*  ---- Right Section (Events Pics) ------- */}

                    <div className='w-[28%] h-full bg-red-000 center flex flex-row'>

                        <img src={events} className='w-[90%]' />

                    </div>

                </div>

            </div>

            {openCertificatePendingMessage ? <CertificatePending /> : null}

        </div>
    )
}

export default CICS
