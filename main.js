// function getMiddle(s) {
//   const length = s.length;
//   const mid = Math.floor(length / 2);
  
//   if (length % 2 === 0) {
//     return s.slice(mid - 1, mid + 1);
//   } else
//     return s.charAt(mid);
// }

const getMiddle = s => {
  //const length = s.length;
  //Find the numerical value of the middle digit in the string
  const mid = Math.floor(s.length / 2);
  //If the stirng is divisible by 2; 
  return (s.length % 2 === 0) 
  //return the two middle characters because its even
  ? s.slice(mid - 1, mid + 1)
  //If not, return the middle char
  : s.charAt(mid);