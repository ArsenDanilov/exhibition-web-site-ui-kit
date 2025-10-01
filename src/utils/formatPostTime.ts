export const formatPostTime = (dateString: string): string => {
  const date = new Date(dateString);

  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");

  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const monthName = months[month];

  return `${day} ${monthName} в ${hours}:${minutes}`;
};
