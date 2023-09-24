import { useEffect, useState } from "react";

export default function Home() {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [seconds,setSeconds] = useState<string>("");

  function getMonthName(month:number) {
    const monthNames = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    return monthNames[month];
  };

  function getCurrentDateTime() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    setDay(day.toString());

    const monthNumber = currentDate.getMonth() + 1;
    const month = getMonthName(monthNumber);
    setMonth(month.toString());

    const year = currentDate.getFullYear();
    setYear(year.toString());

    const hours = currentDate.getHours();
    setHours(hours.toString());

    const minutes = currentDate.getMinutes();
    setMinutes(minutes.toString());

    const seconds = currentDate.getSeconds();
    if(seconds <= 9) {
      setSeconds(`0${seconds.toString()}`);
    }else{
    setSeconds(seconds.toString())
  };
  };

  useEffect(() => {
    const intervalId = setInterval(() => {getCurrentDateTime()}, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>
        <div>
        <h1>{day} de {month} de {year}</h1>
        </div>
        <div></div>
        <div>
        <h3>{hours}:{minutes}:{seconds}</h3>
        </div>
      </div>
    </>
  )
}
