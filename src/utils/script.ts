const Script = () => {
  const data = [
    {
      name: "ali",
      family: "nabizadeh",
      age: 23,
      gender: "male",
      email: "ali.nabizadeh@gmail.com",
      website: "https://alinnb.ir",
      github: "https://github.com/alinnb",
      linkedin: "https://linkedin.com/in/alinnb",
      twitter: "https://twitter.com/alinnb",
      instagram: "https://instagram.com/alinnb",
      facebook: "https://facebook.com/alinnb",
    },
    {
      name: "reza",
      family: "shakeri",
      age: 19,
      gender: "male",
      email: "reza.sh@gmail.com",
      website: "https://reza.ir",
      github: "https://github.com/rezash",
      linkedin: "https://linkedin.com/in/reza_sh",
      twitter: "https://twitter.com/rezazz",
      instagram: "https://instagram.com/rezazz_sh",
      facebook: "https://facebook.com/rezzz",
    },
    {
      name: "mohammad",
      family: "ali",
      age: 20,
      gender: "male",
      email: "mohammad.ali@gmail.com",
      website: "https://mohammad.ir",
      github: "https://github.com/mohammadali",
    },
    {
      name: "alireza",
      family: "nabizadeh",
      age: 26,
      gender: "male",
      email: "alireza.nabizadeh@gmail.com",
      website: "https://alinnb.ir",
      github: "https://github.com/alinnb",
      linkedin: "https://linkedin.com/in/alinnb",
      twitter: "https://twitter.com/alinnb",
    },
  ];

  data.slice(0, 3).forEach((item) => {
    console.log(item);
  });

  const text = "apple | peach | banana | coconut | watermelon";

  const fruits = text.split(" | ");

  for (let index = 0; index < fruits.length; index++) {
    alert(`fruit of ${index + 1} : ${fruits[index]}`);
  }
};

export { Script };
