function Continue() {
  for (var i = 0; i < 20; i++) {
    if (i % 2 == 0) {
      continue;
    }
    console.log(i);
  }
}

export { Continue };
