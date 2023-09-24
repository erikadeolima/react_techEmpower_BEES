import Context from "@/Context/Context";
import { useContext } from "react";
import { getMonthName } from "./getMonthName";

//tentativa de usar o context como set de dados de tempo, porém não funcinou, estudar forma de melhorar
''
/* export function getCurrentDateTime() {
  const context = useContext(Context);

  if (!context) {
    throw new Error('O contexto não foi fornecido corretamente.');
  }
  const { setDay,setMonth, setYear, setHours, setMinutes, setSeconds } = context;
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
    let secondsString = `0${seconds.toString()}`;
    setSeconds(secondsString);
  }else{
  setSeconds(seconds.toString())
};
}; */