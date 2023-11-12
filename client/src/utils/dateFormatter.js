// used CHATGPT
function formatDateWithNamedDayAndMonth(timestamp) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(timestamp);

  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = months[date.getUTCMonth()];
  const year = String(date.getUTCFullYear()).slice(2);

  return `${dayOfWeek}, ${day} ${month} ${year}`;
}

export default formatDateWithNamedDayAndMonth;
