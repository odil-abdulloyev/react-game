export default function formatDate(date) {
  const dt = new Date(date);
  const year = dt.getFullYear();
  const month = dt.getMonth() + 1;
  const day = dt.getDate();
  return `${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}.${year}`;
}
