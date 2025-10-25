import type { NextApiRequest, NextApiResponse } from "next";

type Pesan = {
  message: string;
  time: Date;
  id: number;
};
let id = 4;

let pesann: Pesan[] = [
    { message: "ini pesan pertama", time: new Date(), id: 1 },
    { message: "ini pesan kedua", time: new Date(), id: 2 },
    { message: "ini pesan ketiga", time: new Date(), id: 3 },
  ];

export default function handler(req: NextApiRequest, res: NextApiResponse <Pesan[]>){
  if(req.method==="GET"){
    res.status(200).json(pesann);
  }
  else if(req.method==="POST"){
    pesann = [{message: JSON.parse(req.body), time: new Date(), id: id}, ...pesann];
    id++;
    res.status(200);
  }
}