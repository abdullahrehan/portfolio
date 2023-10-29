import React from 'react'
import thank_you_vector from '../Images/thank_you_vector.jpg'
import Confetti from 'react-confetti-boom'
import { AiOutlineClose } from 'react-icons/ai'

function ThankYou({OpenGrafeti}) {
    return (
        <div className='w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#0009] center text-[#737373]'>

                <div className='w-[335px] h-[335px] bg-white flex flex-col center rounded-[4px]'>
               
                    <div className='w-full h-[40%] bg-red-000 center pb-3 text-[26px]'>
                        
                        Thank You For<br/>Liking My Portfolio
                        
                    </div>
               
                    <div className='w-full h-[10%] bg-red-000 center'>
               
                        <div className='w-[60%] h-full bg-red-000 flex items-center justify-end'>
               
                            <div className='w-[70%] h-[1.5px] bg-[#737373]'></div>
               
                        </div>
               
                        <div className='w-[40%] h-full bg-red-000 center'>
               
                            Abdullah Rehan
               
                        </div>
               
                    </div>
               
                    <div className='w-full h-[60%] bg-red-000 center'>
               
                        <img src={thank_you_vector} className='h-[90%]' />
               
                    </div>
               
                </div>
               
                <Confetti deg={-125} effectCount={1} particleCount={100} x={0.69} y={0.62} spreadDeg={45}/>
        
        </div>
    )
}

export default ThankYou
