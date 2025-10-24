import React from 'react'
import { useState } from 'react'

export async function buatPesan(pesan: string){
    const res
}

function createMessage() {
    const [message, setMessage] = useState("");
  return (
    <div>
        <p>Silakan isi form nya</p>
        <textarea value = {message} onChange={(e) => setMessage(e.target.value)} ></textarea>
        <button className='btn btn-' onSubmit={(e) => buatPesan(e.target.value)}>Submit</button>
    </div>
  )
}

export default createMessage