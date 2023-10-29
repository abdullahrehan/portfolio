import React from 'react'
import timelasp from '../Images/timelasp.png'

function certificatePending() {

    return (

        <div className='w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#0009] center text-[#737373] z-10'>

            <div className='w-[550px] h-[250px] bg-white flex flex-col center rounded-[4px]'>

                <div className='w-full h-[20%] bg-red-000 center text-[26px]'>

                    Certificate Pending

                </div>

                <div className='w-full h-[80%] bg-red-00 center flex flex-row'>

                    <div className='w-[40%] h-full bg-red-000 flex items-start justify-center'>

                        <img src={timelasp} className='h-[90%]' />

                    </div>

                    <div className='w-[60%] h-full bg-red-000 flex flex-col'>

                        <div className='w-full h-[70%] bg-red-000 flex pl-2 pr-3 center text-[18px] font-medium'>

                            Certificate will be provided by the
                            end of Degree.

                        </div>

                        <div className='w-[95%] h-[30%] center flex flex-row'>

                            <div className='w-[50%] h-full flex justify-end items-center'>

                                <div className='w-[80%] h-[1px] bg-black'></div>

                            </div>

                            <div className='w-[50%] h-full center'>Abdullah Rehan</div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default certificatePending
