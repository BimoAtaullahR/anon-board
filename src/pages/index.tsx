import React from 'react'
import Link from 'next/link'

function index() {
  return (
    <div className='flex flex-col'>index
        <Link href='/login'>Login</Link>
        <Link href='/anonboard'>anonboard</Link>

    </div>

  )
}

export default index