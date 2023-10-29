import React from 'react'

function Pulse({ showPulse }) {

    return (

        <div className={`w-full h-full bg-red-000 mywork  top-0 left-0 animate-pulse ${showPulse ? "block" : ""}`}  >

            <div className='w-full h-[92%] bg-[#F8F8F8] flex flex-row justify-around shadow-lg flex flex-row center'>

                {/*  ---- Left Side ------- */}

                <div className='w-[33%] h-full bg-[#EFEFEF] center flex-col'>

                    <div className='w-full h-[10%] bg-red-00 flex flex-row'></div>

                    <div className='w-[90%] h-[40%] bg-[#D9D9D9] bg-red-00 center pl-3'></div>

                    <div className='w-full h-[2%] bg-red-00 text-[19px] font-bold flex items-center pl-3'></div>

                    <div className='w-full h-[30%] bg-red-00 flex flex-row'>

                        <div className='w-[100%] h-full bg-green-00 center pl-3 flex-row gap-3'>

                            <div className='w-[110px] h-[130px] bg-[#D9D9D9] rounded-[4px]'></div>

                            <div className='w-[110px] h-[130px] bg-[#D9D9D9] rounded-[4px]'></div>

                            <div className='w-[110px] h-[130px] bg-[#D9D9D9] rounded-[4px]'></div>

                        </div>

                    </div>

                    <div className='w-full h-[17%] bg-red-00 center'>

                        <div className='w-[180px] h-[60px] bg-[#D9D9D9] rounded-full center text-white'></div>

                    </div>

                </div>

                {/*  ---- Right Side ------- */}

                <div className='w-[67%] h-full bg-red-00 flex flex-col center'>

                    <div className='w-[98%] h-[10%] bg-green-00 flex flex-row'></div>

                    <div className='w-full h-[90%]  center'>

                        <div className='w-[95%] h-[95%] bg-[#D9D9D9] center rounded-[4px]'></div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Pulse
