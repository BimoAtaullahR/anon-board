import React from "react";
// import {pesan} from "@/app/pages//api/posts.js"
import MessageCard from "@/component/MessageCard";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Link from "next/link";
// import handler from "./api/posts";

type Pesan = {
  message: string;
  time: Date;
  id: number;
};

// satisfies GetServerSideProps<{ pesann: Pesan }>
export const getServerSideProps: GetServerSideProps<{
  pesan: Pesan[];
}> = async () => {
  const res = await fetch('http://localhost:3000/api/posts')
  const pesann = await res.json()
  return { props: { pesan: pesann } };
};

export default function HomePage({
  pesan,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="w-screen">
      <hr className="mt-10" />
      <Link href="/create" className="btn bg-amber-400 border-2">Kirim Pesan</Link>
      {pesan.map((post) => (
        // <div key={id}>
        //   <p>Waktu: {time}</p>
        //   <p>Pesan: {message}</p>
        // </div>
        <Link href={`/posts/${post.id}`}>
        <MessageCard
          message={post.message}
          time={new Date(post.time).toLocaleString()}
          key={post.id}
          id={post.id}
          />
        </Link>
      ))}
    </div>
  );
}
