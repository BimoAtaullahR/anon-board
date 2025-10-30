// import { useRouter } from 'next/router';
import React from 'react'


export async function getServerSideProps(context){
    const {params} = context;
    const messageId = params.id;
    const res = await fetch('http://localhost:3000/api/posts');
    const response = await res.json();
    // const router = useRouter();
    // return ({props: {pesann: response.filter(({pesan}) => pesan.id===router.query.id)}})
    return({props: {pesann: (response.filter((pesan) => pesan.id===messageId))}})
}

function Post({pesann}) {
  return (
    <div className='justify-center bg-amber-300'>
        {pesann.map((pesan) => (
            <div>
                <p>{pesan.time}</p>
                <p>{pesan.message}</p>
                <p>{pesan.id}</p>
            </div>

        ))}
    </div>
  )
}

export default Post