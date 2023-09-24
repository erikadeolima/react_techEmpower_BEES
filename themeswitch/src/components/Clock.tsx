import Context from "@/Context/Context";
import { getMonthName } from "@/untils/getMonthName";
import React, { useContext, useEffect, useState } from "react";
import styles from '@/styles/Clock.module.css'

export default function Clock(){
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [seconds, setSeconds] = useState<string>("");
  const {theme} = useContext(Context);

  const themeClass = theme === "light" ? styles.themeLight : styles.themeDark;

  function getCurrentDateTime() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    if(day <= 9) {
      let dayString = `0${day.toString()}`;
      setDay(dayString);
    }else{
      setDay(day.toString())
    };
  
    const monthNumber = currentDate.getMonth();
    const month = getMonthName(monthNumber);
    setMonth(month.toString());
  
    const year = currentDate.getFullYear();
    setYear(year.toString());
  
    const hours = currentDate.getHours();
    if(hours <= 9) {
      let hoursString = `0${hours.toString()}`;
      setHours(hoursString);
    }else{
      setHours(hours.toString())
    };
  
    const minutes = currentDate.getMinutes();
    if(minutes <= 9) {
      let minutesString = `0${minutes.toString()}`;
      setMinutes(minutesString);
    }else{
      setMinutes(minutes.toString())
    };
  
    const seconds = currentDate.getSeconds();
    if(seconds <= 9) {
      let secondsString = `0${seconds.toString()}`;
      setSeconds(secondsString);
    }else{
      setSeconds(seconds.toString())
    };
  };

  useEffect(() => {
    setInterval(() => {getCurrentDateTime()}, 1000);
  }, []);

  return (
    <>
      {seconds.length === 0 ? (
        <div className={`${styles.main} ${themeClass}`}>
          <h1 className={styles.time}>loading ...</h1>
        </div>
      ):(
        <div className={`${styles.main} ${themeClass}`}>
          <div className={styles.date}>
            <h1>{day} de {month} de {year}</h1>
          </div>
          <div className={styles.time}>
            <h1>{hours}:{minutes}:{seconds}</h1>
          </div>
        </div>
      )}
    </>
  )

}