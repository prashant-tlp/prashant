"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
interface ServerResponse {
  message: string;
  result: any;
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
  <div className="bg-red-300 w-full h-full p-2">
    {message.map((item:result, index:number) => (
        <ul key={index} className="flex flex-1 gap-5 m-2 bg-green-300 text-left">
            <li className="text-left " >{index+1}</li>
            <li className="text-left w-3/12">{moment(item.date).format("DD/MM/YYYY hh:mm A")}</li>
            <li className="text-left w-3/12">{item.name}</li>
            <li className="text-left w-3/12">{item.email}</li>
            <li className="text-left w-3/12">{item.message}</li>
        </ul>
        ))}

  </div>
  )
};

export default Page;
