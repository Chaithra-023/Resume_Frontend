import React, {useRef, useState} from 'react'

export default function FileDrop({onFile}){
  const [hover, setHover] = useState(false)
  const inputRef = useRef()

  const handle = (e) => {
    e.preventDefault()
    setHover(false)
    const f = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0]
    if(f) onFile(f)
  }

  return (
    <div>
      <div onDragOver={(e)=>{e.preventDefault(); setHover(true)}} onDragLeave={()=>setHover(false)} onDrop={handle}
           className={`border-2 ${hover ? 'border-primary bg-white' : 'border-dashed border-gray-300'} rounded-lg p-6 text-center cursor-pointer`}
           onClick={()=>inputRef.current.click()}>
        <p className="text-gray-600">Drag & drop PDF or DOCX here, or click to browse</p>
      </div>
      <input ref={inputRef} type="file" className="hidden" accept=".pdf,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handle} />
    </div>
  )
}
