import React from "react";



function MessageCard({ message, time, key, id }) {
  return (
    <div className="w-100 h-auto p-5 my-10 rounded-2xl bg-amber-400 text-center items-center mx-auto flex flex-col">
      <p className="text-left">Pesan ke-{id}</p>
      <p>{time}</p>
      <p>{message}</p>
      <button>Like</button>
      <button>Lihat Detail</button>
    </div>
  );
}

export default MessageCard;
