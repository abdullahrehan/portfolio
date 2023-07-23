import { useState } from 'react'
import Header from './Header/header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import arrowDown from '../Images/arrowDown.png'
import './Main.css'
import PdfViewer from './PdfViewer.jsx'

function Main() {

    const [sideBarMenu, setSideBarMenu] = useState(true)
    const [openCV, setopenCV] = useState(false)

    const OpenCV = () => {
        setopenCV(!openCV)

    }

    return (
        <>

            <div className="main_screen bg-red-000 h-full text-white ">
                <div className="w-full h-[9vh] bg-red-300">
                    <Header sideBarMenu setSideBarMenu={(data) => setSideBarMenu(data)} />
                </div>
                <div className={`w-full h-[82vh]  bg-red-000 ${openCV?"blur-[7px]":null}`}>
                    <Body OpenCV={OpenCV} />
                </div>
                <div className="w-full h-[9vh]  bg-red-000">
                    <Footer />
                </div>
            </div>

            {openCV ? <div className='w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#0009] center'>

                <PdfViewer OpenCV={OpenCV} />

            </div>
                : null}

        </>

    );
}

export default Main;
