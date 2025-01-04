"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
interface ServerResponse {
  message: string;
  result: [];
  status: number;
}

interface result {
    name:string,
    email:string,
    message:string,
    date:string,
}
const Page = () => {
  const [message, setMessage] = useState([]);
  const getMessages = () => {
    const response = axios.post<ServerResponse>("/api/messages");
    response.then((res) => {
      setMessage(res.data.result);
    });
  };
  useEffect(() => {
    getMessages();
  }, []);
  return(
  <div className="w-full h-full p-2">
    {message.map((item:result, index:number) => (
      <ul
  key={index}
  className="flex flex-wrap items-center gap-5 p-4 transition-all"
>
  <li className="text-left font-bold w-1/12">{index + 1}</li>
  <li className="text-left w-2/12 text-sm font-medium ">
    {moment(item.date).format("DD/MM/YYYY hh:mm A")}
  </li>
  <li className="text-left w-2/12 text-sm font-medium  truncate">
    {item.name}
  </li>
  <li className="text-left w-3/12 text-sm font-medium  truncate">
    {item.email}
  </li>
  <li className="text-left w-4/12 text-sm font-medium  truncate">
    {item.message}
  </li>
</ul>

        ))}

  </div>
  )
};

export default Page;
