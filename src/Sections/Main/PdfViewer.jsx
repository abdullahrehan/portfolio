import { AiOutlineClose } from 'react-icons/ai';
import CV from '../CV/CV.pdf'

function PdfViewer({ OpenCV }) {

  return (

    //  ----- Black Screen ------- //

    <div className='w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#0009] center'>

      <div className='w-full h-full center '>

        {/*  ---- CV Pdf ------- */}

        <div className='w-[65%] h-full center'>

          <iframe src={CV} className='w-full h-full mt-[10px] pb-[10px] scrollbar shadow-lg shadow-[#0006]' navpanes={1} toolbar={1}></iframe>

        </div>


        {/*  ---- Close Button ------- */}

        <div className='w-[4%] h-full bg-green-000 flex justify-center mt-[10px] hover:cursor-pointer'>

          <div className='w-[35px] h-[35px] rounded-[3px] center relative bg-[#4F4F4F]'>

            <AiOutlineClose size={22} onClick={OpenCV} className='fill-white z-10 rotate-2'/>

            <div className='w-[35px] h-[35px] absolute top-0 left-0 rounded-[3px] center blur-[4px] z-0 hover:bg-[#4F4F4F]'></div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default PdfViewer
