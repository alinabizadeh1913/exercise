const seeProperties = (name: string, family: string, age: number) => {
  let object = {
    name: name,
    family: family,
    age: age,
  };

  for (let propertyName in object) {
    alert(propertyName);
  }
};
