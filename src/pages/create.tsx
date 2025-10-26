import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react'

export async function buatPesan(pesan: string){
  const res = await fetch('http://localhost:3000/api/posts', {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(pesan),
  })
  
}

function createMessage() {
  const [message, setMessage] = useState("");
  const router = useRouter();
  return (
    <div>
        <p>Silakan isi form nya</p>
        <form onSubmit={(e) => {e.preventDefault(); buatPesan(message); router.push('/')}} className='flex flex-col w-100'>
          <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} className='border-2'/>
          <button type='submit' className='bg-blue-300 hover:bg-blue-400'>Submit</button>
        </form>
    </div>
  )
}

export default createMessage