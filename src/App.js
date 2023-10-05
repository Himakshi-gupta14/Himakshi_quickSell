import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home"
import "./index.scss";
 import { useEffect, useState } from "react";


export default function App() {
  const [data, setData] = useState(null);
  const [sortPriority, setSortPriority] = useState(false);
  
  // useEffect(() => {
  //   // Fetch data from the API and store it in the 'data' state
  //   fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
  //     .then((response) => response.json())
  //     .then((responseData) => handleData(responseData))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);


  // const handleData=(responseData)=>
  // {
  //   setData(responseData);
  //   {
  //     responseData.tickets.map((ticket)=>{
  //       let idd=statusMap[ticket.status];
  //       addCardHandler(idd,ticket.id,ticket.title,ticket.userId, ticket.status,ticket.tag[0],ticket.priority)
  //     })
  //   }
  // }
  // console.log(data);
  return (
    <div>  
      <Navbar sortPriority={sortPriority} setSortPriority={setSortPriority}/>
      <Home sortPriority={sortPriority} setSortPriority={setSortPriority}/>
    </div>
  );
}