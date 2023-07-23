import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { GrFormClose } from 'react-icons/gr';
import CV from '../CV/CV.pdf'

function PdfViewer({OpenCV}) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);


  return (
    <div className='w-full h-full center '>
      <div className='w-[65%] h-full center'>
        <iframe tool src={CV} className='w-full h-full mt-[10px] pb-[10px]' navpanes={1} toolbar={1}></iframe>
      </div>
      <div className='w-[4%] h-full bg-green-000 flex justify-center mt-[10px]'>
        <div className='w-[35px] h-[35px] bg-white hover:bg-red-400 rounded-[3px] center'>
          <GrFormClose size={32} onClick={OpenCV} className='cursor-pointer' color="white"/>
        </div>
      </div>
    </div>
  );
}

export default PdfViewer
