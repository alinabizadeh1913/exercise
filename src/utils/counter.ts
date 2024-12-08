const counters = () => {
  const firstSections = document.querySelectorAll<HTMLElement>(".first");
  const numbers = document.querySelectorAll<HTMLElement>(".first .number");

  for (let index = 0; index < firstSections.length; index++) {
    const numberElement = numbers[index];
    if (numberElement) {
      numberElement.textContent = (index + 1).toString();
    }
  }
};

export { counters };
