export default (() => {
  const hours = [];
  let i = 0;
  while (i < 25) {
    hours.push(i * 100);
    i += 1;
  }
  return hours;
})();
