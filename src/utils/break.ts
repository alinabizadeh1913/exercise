const BreakLoop = () => {
  for (let index = 0; index < 15; index++) {
    if (index === 10) {
      break;
    } else {
      alert(index);
    }
  }
};

export { BreakLoop };
