import { getPadTime, getPadTimeMSMS } from "./getPadTime";

let startTime = new Date().getTime();

export const tickMSMS = (arrTime) => {
  let MSMS = arrTime[3];
  let sec = arrTime[2];
  let minutes = arrTime[1];
  let hour = arrTime[0];

  MSMS = new Date().getTime() - startTime; // считает вроде бы правильно, но начинает отсчет
  // не с 00 секунд а с 01 секунды, потому что при первом отнимании разница больше 1000
  //  а уже со второй итерации всё становиться нормально
  if (new Date().getTime() - startTime > 1010) {
    sec += -1; // это конечно костыль, но только так получаеться избавиться от первой итерации
  }
  if (MSMS > 999) {
    sec += 1;
    startTime = new Date().getTime();
  }

  if (sec >= 60) {
    minutes += 1;
    sec = sec - 60;
  }
  if (minutes >= 60) {
    hour += 1;
    minutes = minutes - 60;
  }
  if (hour >= 24) {
    hour = 0;
  }

  return (
    getPadTime(hour) +
    ":" +
    getPadTime(minutes) +
    ":" +
    getPadTime(sec) +
    ":" +
    getPadTimeMSMS(MSMS)
  );
};
