export const formatDate = (date) => {
  const string = date
    .toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
    })
    .toUpperCase()
    .split(" ")
    .reverse();
  const day = string[0].slice(0, 3);
  const number = string[1];
  return +string[1] < 10 ? `${day}0${number}` : `${day}${number}`;
};
