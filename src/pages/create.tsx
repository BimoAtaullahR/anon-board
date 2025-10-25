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
  return (
    <div>
        <p>Silakan isi form nya</p>
        <form onSubmit={(e) => {e.preventDefault(); buatPesan(message)}}>
          <input type='text' value={message} onChange={(e) => setMessage(e.target.value)}/>
          <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default createMessage