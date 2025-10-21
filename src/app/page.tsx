import React from 'react'
import pesan from "@/app/pages//api/posts.js"
import MessageCard from "@/component/MessageCard"

function HomePage() {
  return (
    <div className='w-screen'>
      <hr className='mt-10' />
      {pesan.map(({message, time, id}) => (
        // <div key={id}>
        //   <p>Waktu: {time}</p>
        //   <p>Pesan: {message}</p>
        // </div>
        <MessageCard message={message} time={time} key={id} id={id}/>
        
      ))}
    </div>
  )
}

export default HomePage