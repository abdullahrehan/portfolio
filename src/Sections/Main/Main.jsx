import { useState } from 'react'
import Header from './Header/header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import PdfViewer from './PdfViewer.jsx'
import Contact from '../ContactUs/Contact.jsx'
import ThankYou from './ThankYou.jsx'
import './Main.css'

function Main() {

    const [sideBarMenu, setSideBarMenu] = useState(true)
    const [openCV, setopenCV] = useState(false)
    const [openContact, setopenContact] = useState(false)
    const [openGrafeti, setopenGrafeti] = useState(false)

    const OpenCV = () => { setopenCV(!openCV) }
    const OpenContact = () => { setopenContact(!openContact) }
    const OpenGrafeti = () => { setopenGrafeti(!openGrafeti) }


    if(openGrafeti){
        document.body.setAttribute('style','overflow:hidden;');    
        setTimeout(() => {
            OpenGrafeti()
            document.body.setAttribute('style','overflow:auto;');    
          }, 5050);
    }
    
    return (
        <>

            <div className="main_screen bg-red-000 h-full text-white ">
           
                <div className="w-full h-[9vh] bg-red-300">
           
                    <Header sideBarMenu setSideBarMenu={(data) => setSideBarMenu(data)} />
           
                </div>
           
                <div className={`w-full h-[82vh]  bg-red-000 ${ openCV ? "blur-[7px] " : null } `} >
           
                    <Body OpenCV={OpenCV} OpenContact={OpenContact} />
           
                </div>
           
                <div className="w-full h-[9vh]  bg-red-000">
           
                    <Footer OpenGrafeti={OpenGrafeti} />
           
                </div>
           
            </div>

            { openContact ? <Contact OpenContact={OpenContact} /> : null }

            { openCV ? <PdfViewer OpenCV={OpenCV} /> : null }

            { openGrafeti ? <ThankYou OpenGrafeti={OpenGrafeti}/> : null }

        </>

    );
}

export default Main;
