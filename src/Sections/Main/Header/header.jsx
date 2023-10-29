import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-scroll'

function Header({ sideBarMenu, setSideBarMenu }) {

  const [selectedPage, setSelectedPage]=useState("Home")
  console.log(selectedPage);
  return (

    <div className="bg-[#343333] h-full flex flex-row">

      {/*  ---- Heading ------- */}

      <div className="w-full sm:w-[60%] h-full flex flex-row">

        {/*  ---- Menu Icon ------- */}

        <div title='menu' className="w-1/4 sm:w-[20px] sm:opacity-0  h-full flex justify-start pl-5 items-center" onClick={() => setSideBarMenu(true)}>

          <RxHamburgerMenu size={27} />

        </div>

        {/*  ---- Portfolio ------- */}

        <div title="portfolio" className="w-2/4 sm:w-[100px] cursor-pointer h-full flex justify-center sm:justify-start items-center text-2xl">

          <span  className="text-[#C58484]">P</span>ort<span className="text-[#C58484]">f</span>olio 

        </div>

        <div className="w-1/4 sm:hidden"></div>

      </div>

      {/*  ---- Links ------- */}

      <div className="w-[40%] h-full hidden sm:flex flex-row justify-around cursor-pointer text-basic sm:text-[14px] xl:text-[15px]">

        {/*  ---- Home ------- */}

        <div title="Home" onClick={()=>setSelectedPage("Home")} className="px-10 flex-col h-full cursor-pointer hover:bg-[#0002] rounded delay-100 duration-75 linear hover:cursor-pointer flex flex-column justify-center items-center group">

          <div className="w-full h-3/4 flex justify-center items-end pb-2">Home</div>

          <div className={`w-[10px] h-[3px] rounded block ${selectedPage=="Home" ? "bg-white" : "group-hover:bg-[#4d4a4a]" } flex justify-center items-center`}></div>

        </div>

        {/*  ---- Services ------- */}

        <div title="Services" onClick={()=>setSelectedPage("Services")} className="px-10 flex-col h-full hover:bg-[#0002] rounded hover:cursor-pointer flex flex-col justify-center items-center group">

          <Link activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={500} className="w-full h-3/4 flex justify-center items-end pb-2">Services</Link>

          <div className={`w-[10px] h-[3px] rounded block ${selectedPage=="Services" ? "bg-white" : "group-hover:bg-[#4d4a4a]" } flex justify-center items-center`}></div>

        </div>


        {/*  ---- Skills  ------- */}

        <div title="skills" onClick={()=>setSelectedPage("Skills")} className="px-10 cursor-pointer flex-col h-full hover:bg-[#0002] rounded hover:cursor-pointer flex flex-col justify-center items-center group">
       
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500} className="w-full h-3/4 flex justify-center items-end pb-2">Skills</Link>
       
          <div className={`w-[10px] h-[3px] rounded block ${selectedPage=="Skills" ? "bg-white" : "group-hover:bg-[#4d4a4a]" } flex justify-center items-center`}></div>
       
        </div>

        {/*  ---- Projects ------- */}

        <div title='Projects' onClick={()=>setSelectedPage("Projects")} className="px-10 flex-col cursor-pointer h-full hover:bg-[#0002] rounded delay-100 hover:cursor-pointer flex flex-col justify-center items-center group">

          <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500} className="w-full h-3/4 flex justify-center items-end pb-2">Projects</Link>

          <div className={`w-[10px] h-[3px] rounded block ${selectedPage=="Projects" ? "bg-white" : "group-hover:bg-[#4d4a4a]" } flex justify-center items-center`}></div>

        </div>

      </div>

    </div>


  );
}

export default Header;
