// used CHATGPT
function formatDateWithNamedDayAndMonth(timestamp) {
  const daysOfWeek = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(timestamp);

  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = months[date.getUTCMonth()];
  const year = String(date.getUTCFullYear());

  return `${dayOfWeek}, ${day} ${month} ${year}`;
}

export default formatDateWithNamedDayAndMonth;
