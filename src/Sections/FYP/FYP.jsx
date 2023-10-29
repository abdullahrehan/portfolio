import React, { useState } from 'react'
import technologies_logos from '../Images/technologies_logos.png'
import comsast_logo from '../Images/comsast_logo.png'
import Deadline from '../Images/Deadline.png'
import my_profile_pic from '../Images/my_profile_pic.png'
import haseeb_profile_pic from '../Images/haseeb_profile_pic.png'
import InProgress from './InProgress.jsx'

const members = [
  {
    name: "Abdullah Rehan",
    duties: "Web Developer",
    img: my_profile_pic,

  },

  {
    name: "Mahad Shahzad",
    duties: "App Developer",
    img: "",

  },

  {
    name: "Abdul Haseeb",
    duties: "Backend Developer",
    img: haseeb_profile_pic,

  }]

function FYP() {

  const [openInProgressMessage, setopenInProgressMessage] = useState(false)
  const OpenInProgressMessage = () => { setopenInProgressMessage(!openInProgressMessage) }

  if(openInProgressMessage){
      document.body.setAttribute('style','overflow:hidden;');    
      setTimeout(() => {
          OpenInProgressMessage()
          document.body.setAttribute('style','overflow:auto;');    
        }, 5000);
  }


  return (

    <div className='w-[95%] h-full '>

      {/*  ---- Heading ------- */}

      <div className='w-full h-[8%] bg-red-000 flex items-start justify-start font-bold text-[20px]'>Final Year Project</div>

      {/*  ---- Body ------- */}

      <div className='w-full h-[92%] bg-red-000 flex flex-col bg-[#343333] shadow-xl rounded-[4px] text-white rounded-[3px] relative'>

        {/*  ---- heading & Logo ------- */}

        <div className='w-full h-[15%] bg-red-000 flex flex-row'>

          <div className='w-[5%] h-full bg-green-000 center'> <img src={comsast_logo} className='h-[80%]' /> </div>

          <div className='w-[90%] h-full bg-green-000 center text-[26px]'> Final Year Project </div>

          <div className='w-[5%] h-full bg-green-000'> </div>

        </div>

        {/*  ---- Center Area (FYP Info) ------- */}

        <div className='w-full h-[70%] bg-red-000 flex flex-row'>

          {/*  ---- Proposal ------- */}

          <div className='w-[53%] h-full bg-orange-000 center flex-col'>

            <div className='w-[90%] h-[15%] bg-pink-00 flex items-center text-[22px] font-medium'>

              Proposal

            </div>

            <div className='w-[90%] h-[70%] bg-pink-00 flex justify-start pt-2'>

              <div className='w-full h-[80%] bg-[#474747] flex items-start pl-4  rounded-[4px] flex flex-col justify-center '>

                <div className='w-[90%] h-[12%] flex items-center'>

                  <div className='w-[90%] h-[2px] bg-[#5F5F5F]'></div>

                </div>

                <div className='w-[85%] h-[12%] flex items-center'>

                  <div className='w-[90%] h-[2px] bg-[#5F5F5F] '></div>

                </div>

                <div className='w-[80%] h-[12%] flex items-center'>

                  <div className='w-[90%] h-[2px] bg-[#5F5F5F]'></div>

                </div>

                <div className='w-[92%] h-[12%] bg-red-000 flex flex-row center'>

                  <div className='w-[35%] h-[2px] bg-[#5F5F5F]'></div>

                  <div className='w-[30%] h-full bg-green-00 center text-[20px] text-[#999999]'>Coming Soon</div>

                  <div className='w-[35%] h-[2px] bg-[#5F5F5F]'></div>

                </div>

                <div className='w-[87%] h-[12%] bg-red-00 flex items-center'>

                  <div className='w-[90%] h-[2px] bg-[#5F5F5F]'></div>

                </div>

                <div className='w-[82%] h-[12%] flex items-center'>

                  <div className='w-[90%] h-[2px] bg-[#5F5F5F]'></div>

                </div>

                <div className='w-[86%] h-[12%] flex items-center'>

                  <div className='w-[90%] h-[2px] bg-[#5F5F5F]'></div>

                </div>

              </div>

            </div>

            <div className='w-[90%] h-[15%] bg-pink-000 center'>

              <img src={technologies_logos} className='w-[150px]' />

            </div>

          </div>

          {/*  ---- Members ------- */}

          <div className='w-[45%] h-full bg-orange-00 flex flex-col'>

          {/*  ---- Members Info ------- */}

          <div className='w-full h-[80%] bg-purple-000 flex items-center justify-around gap-0'>

              {members.map(data =>

                <div className='w-[29%] h-[90%] bg-[#494848] center rounded-[2px] flex flex-col'>

                  <div className='w-[90%] h-[70%] bg-yellow-000 center  '>

                    <div className={`w-[110px] h-[110px] rounded-full ${data.name == "Mahad Shahzad" ? "bg-black" : null} center`}>

                      {data.name !== "Mahad Shahzad" ? <img src={data.img} className='w-full h-full' /> : null}

                    </div>

                  </div>

                  <div className='w-[90%] h-[15%] bg-yellow-000 center text-[19px] font-medium'>

                    {data.name}

                  </div>

                  <div className='w-[90%] h-[15%] bg-yellow-000 center font-medium text-[#D27558] text-[15px]'>

                    {data.duties}

                  </div>

                </div>

              )}

            </div>

          {/*  ---- Members Footer Heading ------- */}

            <div className='w-full h-[20%] bg-purple-000 flex flex-row'>

              <div className='w-[33%] h-full bg-red-000 center'>

                <div className='w-[90%] h-[1px] bg-[#4F4F4F]'></div>

              </div>

              <div className='w-[34%] h-full bg-red-000 center text-[23px] font-medium'>

                Team Members

              </div>

              <div className='w-[33%] h-full bg-red-000 center'>

                <div className='w-[90%] h-[1px] bg-[#4F4F4F]'></div>

              </div>

            </div>

          </div>

          {/*  ---- Extra Div ------- */}

          <div className='w-[2%] h-full bg-orange-00 flex flex-col'></div>

        </div>

        {/*  ---- Footer ------- */}

        <div className='w-full h-[15%] bg-red-00 flex flex-row'>

          <div className='w-[25%] h-full bg-green-00 flex items-end pl-1 pb-1'>

            <img src={Deadline} />

          </div>

          <div className='w-[50%] h-full bg-green-00 center'>

            <button className='w-[145px] h-[48px] bg-[#AE4747] rounded-full' onClick={()=>setopenInProgressMessage(true)}>

              See Details

            </button>

          </div>

          <div className='w-[25%] h-full bg-green-00'></div>

        </div>

      </div>


      { openInProgressMessage ? <InProgress/> : null }

    </div>
  )
}

export default FYP
