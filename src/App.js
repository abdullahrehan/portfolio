import { useState } from "react";
import Main from "./Sections/Main/Main";
import Journey from "./Sections/Journey/Journey";
import Skills from "./Sections/Skills/Skills";
import Education from "./Sections/Education/Education";
import MyWork from "./Sections/MyWork/MyWork";
import Footer from "./Sections/Footer/Footer";
import MyServices from "./Sections/MyServices/MyServices";
import FYP from './Sections/FYP/FYP'
import CICS from './Sections/CICS/CICS'
import MyMentors from './Sections/MyMentors/MyMentors'
import "./App.css";

function App() {
  return (
    <div className="h-[645vh] overflow-hidden flex gap-5 flex-col">
      <div className="w-full h-[100vh]">
        <Main />
      </div>

      <div className="w-full md:h-[60vh] bg-green-000 pt-1 h-[77vh] center services">
        <MyServices />
      </div>

      <div className="w-full md:h-[55vh] h-[70vh] center bg-red-000 education">
        <Education />
      </div>

      <div className="w-full md:h-[66vh] h-[77vh] center skills">
        <Skills />
      </div>

      <div className="w-full  md:h-[62vh] h-[100vh] center pt-2 journey">
        <Journey />
      </div>

      
      <div className="w-full h-[55vh] center pt-5 projects">
        <MyWork />
      </div>

      <div className="w-full h-[60vh] bg-green-000 mt-5 center">
        <FYP/>
      </div>

      <div className="w-full h-[60vh] bg-green-000 mt-5 center">
        <CICS/>
      </div>

      <div className="w-full h-[58vh] bg-green-000 mt-5 center">
      <MyMentors/>
      </div>

      <div className="w-full h-[70vh] center pt-5">
        <Footer />
      </div>
    </div>
  );
}

export default App;
