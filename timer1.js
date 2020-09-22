const timer = process.argv.slice(2);
const beep = (array) => {
  if (!array.length) {
    return;
  }
  for (const value of array) {
    if (Number.isNaN(Number(value)) && Number.isInteger(Number(value))) {
      if (Number(value) >= 0) {
        setTimeout(() => {
          process.stdout.write('\x07');
        }, Number(value) * 1000);
      }
    }
  }
};
beep(timer);