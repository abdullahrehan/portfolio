import { RxHamburgerMenu } from 'react-icons/rx';

import { Link } from 'react-scroll'

function header({sideBarMenu,setSideBarMenu}) {
  return (
   
        <div className="bg-[#343333] h-full flex flex-row">
         
         {/*  ---- Heading ------- */}

          <div className="w-full sm:w-1/2 h-full flex flex-row">
           
           {/*  ---- Menu Icon ------- */}

            <div className="w-1/4 sm:w-[20px] sm:opacity-0  h-full flex justify-start pl-5 items-center" onClick={()=>setSideBarMenu(true)}>
              <RxHamburgerMenu size={27} />
            </div>

            {/*  ---- Portfolio ------- */}

            <div className="w-2/4 sm:w-[100px]  h-full flex justify-center sm:justify-start items-center text-2xl">
              <span className="text-[#C58484]">P</span>ort<span className="text-[#C58484]">f</span>olio
            </div>

            <div className="w-1/4 sm:hidden"></div>

          </div>
         
         {/*  ---- Links ------- */}

         <div className="w-1/2  h-full hidden sm:flex flex-row justify-end text-basic sm:text-[14px] xl:text-[15px]">
           
            {/*  ---- Home ------- */}

            <div className="w-[18%] md:w-2/8 flex-col h-full hover:bg-[#0002] bg-[#0002] rounded delay-100 duration-75 linear hover:cursor-pointer flex flex-column justify-center items-center group">
              <div className="w-full h-3/4 flex justify-center items-end pb-2">Home</div>
              <div className="w-3/4 h-[3px] rounded block group-hover:bg-white bg-white flex justify-center items-center"></div>
            </div>
           
           {/*  ---- Journey us ------- */}

            <div className="w-[18%] md:w-2/8 flex-col h-full hover:bg-[#0002] rounded hover:cursor-pointer flex flex-column justify-center items-center group">
            <Link activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={500} className="w-full h-3/4 flex justify-center items-end pb-2">Services</Link>
              <div className="w-3/4 h-[3px] rounded block group-hover:bg-white flex justify-center items-center"></div>
            </div>


           {/*  ---- Skills  ------- */}

           <div className="w-[18%] md:w-2/8 flex-col h-full hover:bg-[#0002] rounded hover:cursor-pointer flex flex-column justify-center items-center group">
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500} className="w-full h-3/4 flex justify-center items-end pb-2">Skills</Link>
              <div className="w-3/4 h-[3px] rounded block group-hover:bg-white flex justify-center items-center"></div>
            </div>

            
           {/*  ---- Education ------- */}
{/* 
           <div className="w-[18%] md:w-2/8 flex-col h-full hover:bg-[#0002] rounded hover:cursor-pointer flex flex-column justify-center items-center group">
            <Link activeClass="active" to="education" spy={true} smooth={true} offset={0} duration={500} className="w-full h-3/4 flex justify-center items-end pb-2">Education</Link>
              <div className="w-3/4 h-[3px] rounded block group-hover:bg-white flex justify-center items-center"></div>
            </div> */}


            {/*  ---- Projects ------- */}
           
            <div className="w-[18%] md:w-2/8 flex-col h-full hover:bg-[#0002] rounded delay-100 hover:cursor-pointer flex flex-column justify-center items-center group">
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500} className="w-full h-3/4 flex justify-center items-end pb-2">Projects</Link>
              <div className="w-3/4 h-[3px] rounded block group-hover:bg-white flex justify-center items-center"></div>
            </div>

             {/* ---- Hire Me -------
           
            <div className="w-1/5 md:w-2/8 flex-col h-full hover:bg-[#0002] rounded delay-100 hover:cursor-pointer flex flex-column justify-center items-center group">
              <div className="w-full h-3/4 flex justify-center items-end pb-2">Hire Me</div>
              <div className="w-3/4 h-[3px] rounded block group-hover:bg-white flex justify-center items-center"></div>
            </div>
            */}
          </div>

        </div>
     
    
  );
}

export default header;
