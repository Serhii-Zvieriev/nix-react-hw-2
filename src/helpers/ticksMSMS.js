import { getPadTime, getPadTimeMSMS } from "./getPadTime";

export const tickMSMS = (arrTime) => {
  let MSMS = arrTime[3];
  let sec = arrTime[2];
  let minutes = arrTime[1];
  let hour = arrTime[0];

  MSMS += 1;
  if (MSMS >= 1000) {
    sec += 1;
    MSMS = MSMS - 1000;
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

  //   console.log(
  //     getPadTime(hour) +
  //       ":" +
  //       getPadTime(minutes) +
  //       ":" +
  //       getPadTime(sec) +
  //       ":" +
  //       getPadTimeMSMS(MSMS)
  //   );

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

// setInterval(() => console.log(tick()), 1);

// setInterval(() => console.log(tickMSMS("00:00:00:0000")), 1);
