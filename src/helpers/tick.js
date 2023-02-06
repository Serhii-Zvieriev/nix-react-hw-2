import { getPadTime } from "./getPadTime";

export const tick = (arrTime) => {
  let sec = arrTime[2];
  let minutes = arrTime[1];
  let hour = arrTime[0];

  sec += 1;
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

  // console.log(
  //   getPadTime(hour) + ":" + getPadTime(minutes) + ":" + getPadTime(sec)
  // );
  return getPadTime(hour) + ":" + getPadTime(minutes) + ":" + getPadTime(sec);
};

// setInterval(() => console.log(tick()), 1000);
