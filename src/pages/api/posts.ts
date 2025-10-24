import type { NextApiRequest, NextApiResponse } from "next";

type Pesan = {
  message: string;
  time: Date;
  id: number;
};

const pesann: Pesan[] = [
    { message: "ini pesan pertama", time: new Date(), id: 1 },
    { message: "ini pesan kedua", time: new Date(), id: 2 },
    { message: "ini pesan ketiga", time: new Date(), id: 3 },
  ];

export default function handler(req: NextApiRequest, res: NextApiResponse <Pesan[]>){
  if(req.method==="GET"){
    res.status(200).json(pesann);
  }
}