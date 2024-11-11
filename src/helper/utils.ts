// get random number
export const getUniqueNumber = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1)
  const day = now.getDate()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()//remove to pass assert

  const uniqueNumber = Number(`${year}${month}${day}${hours}${minutes}`)

  return uniqueNumber;
}

export const getDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;

};

