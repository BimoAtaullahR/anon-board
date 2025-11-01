// import { useRouter } from 'next/router';
import React from "react";

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const res = await fetch("http://localhost:3000/api/posts");
  const response = await res.json();
  // const router = useRouter();
  // return ({props: {pesann: response.filter(({pesan}) => pesan.id===router.query.id)}})
  return {
    props: { pesann: response.find((pesan) => pesan.id == Number(id)) },
  };
}

function Post({ pesann }) {
  return (
    <div className=" bg-amber-300 w-100 h-100">
      <div className="bg-amber-600">
        <p>{new Date(pesann.time).toLocaleDateString()}</p>
        <p>{pesann.message}</p>
        <p>{pesann.id}</p>
      </div>
    </div>
  );
}

export default Post;
