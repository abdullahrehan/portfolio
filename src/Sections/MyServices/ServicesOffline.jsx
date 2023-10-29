import React from 'react'
import closed_png from '../Images/closed2.png'

function ServicesOffline() {
    
    return (

        <div className='w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#0009] center text-[#737373] z-10'>

            <div className='w-[550px] h-[250px] bg-white flex flex-col center rounded-[4px]'>

                <div className='w-full h-[20%] bg-red-000 center text-[26px]'>

                    Currently Offline

                </div>

                <div className='w-full h-[80%] bg-red-00 center flex flex-row'>

                    <div className='w-[40%] h-full bg-red-000 center'>

                        <img src={closed_png} className='h-[90%]' />

                    </div>

                    <div className='w-[60%] h-full bg-red-000 flex flex-col'>
                     
                        <div className='w-full h-[70%] bg-red-000 flex pl-2 pr-2 center text-[18px] font-medium'>
                     
                            Unfortunately Fiverr Services are
                            currently Offline due to FYP . If you
                            have any query feel free to contact
                            me on gmail or whatsapp.
                     
                        </div>

                        <div className='w-[95%] h-[30%] center flex flex-row'>
                     
                            <div className='w-[50%] h-full center'>
                     
                                <div className='w-[90%] h-[1px] bg-black'></div>
                     
                            </div>
                     
                            <div className='w-[50%] h-full center'>Abdullah Rehan</div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )

}

export default ServicesOffline
