import React from "react";
// import {pesan} from "@/app/pages//api/posts.js"
import MessageCard from "@/component/MessageCard";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Link from "next/link";
import type { User } from '@supabase/supabase-js'
import type { GetServerSidePropsContext } from 'next'
import { createClient } from '@/../utils/supabase/server-props'
// import handler from "./api/posts";

type Pesan = {
  message: string;
  time: Date;
  id: number;
};

// satisfies GetServerSideProps<{ pesann: Pesan }>
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const supabase = createClient(context);
  const res = await fetch('http://localhost:3000/api/posts')
  const pesann = await res.json()

  const {data, error} = await supabase.auth.getUser();

  if(error || !data){
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return { props: { user: data.user, pesan: pesann } };
};

export default function HomePage({user}: {user: User}, {pesan}: {pesan: Pesan[]}) {
  return (
    <div className="w-screen">
      <hr className="mt-10" />
      <h1>Hello, {user.email || 'user'}!</h1>
      <Link href="/create" className="btn bg-amber-400 border-2">Kirim Pesan</Link>
      {pesan.map((post) => (
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
