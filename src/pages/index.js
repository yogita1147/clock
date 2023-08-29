import React from "react";
import Navbar from '../components/Navbar';
import Image from "next/image";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useState,useEffect } from "react";


function Main()
{
    const [color,setColor]=useState('');
  const [opening,setOpening]=useState('');
  const [data,setData]=useState('');
  const [loading,setLoading]=useState(true);
    useEffect(() => {
        setInterval(() => {
          const now = new Date();
          
          const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
          const hours = now.getHours();
          const minutes = now.getMinutes();
          const seconds = now.getSeconds();
          if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
           if(hours>=10 && hours <19 || hours == 19  && minutes == 0)
           {
            setColor('green');
            setOpening('Open');
           }
           else{
            setColor('red');
            setOpening('closed');
           } 
          }
          else if(day==6)
          {
            if((hours>=12 && hours<15)||(hours==15 && minutes==0))
            {
              setColor('green');
              setOpening('open');
            }
            else{
              setColor('red');
              setOpening('closed');
            
            }
    
          }
          else{
            setColor('red');
            setOpening('closed');
          }
          // console.log(`Today is day ${day} and the time is ${hours}:${minutes}:${seconds}.`);
          setData(`Time:${hours}:${minutes}:${seconds}`)
        }, 1000);
        setLoading(false);
      }, []);
    const imgUrl='/images/bg.jpg'
    return(
        <>
        <Navbar/>
        {/* <div>
        <Image src='/images/bg.jpg' width={100} layout="responsive" height={100}/>

        </div> */}
       <div sx={{ width: '50%' }} >
       <Typography variant="h4" component="h2" style={{color:`${color}`}}>
        {
            !loading?`${opening}||${data}`:''
        } 
        </Typography>
      </div>
        </>
    )
} 
export default Main;