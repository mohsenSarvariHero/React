
import React, { useState } from 'react'



const Upload = ({setFile}) => {
const [selectedFile , setSelectedFile] = useState()
  return (
    <div className='bg-[#e9e9e9] h-[450px] rounded-lg'>
     
      <label className='m-5 flex flex-col justify-center items-center cursor-pointer h-[90%] border-[2px] border-gray-300 border-dashed rounded-lg text-gray-600'>
     
        {!selectedFile?
        
          <div className='flex items-center flex-col'>
              <h1>+</h1>
             <h2 className='  font-semibold  '>Click to Upload</h2> 
          </div>

          : null
      }
      {selectedFile ?
        <img src={window.URL.createObjectURL(selectedFile)} alt="selected file"
          width={500}
          height={800}
          className='object-contain h-[90%]' 
          /> 
          :
          null
        }  
        <input type='file' class='hidden' id='dropzone-file' onChange={(e)=>{setFile(e.target.files[0]); setSelectedFile(e.target.files[0])}}/>

      </label>
                
    </div>
  )
}

export default Upload
