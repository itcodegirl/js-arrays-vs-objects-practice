let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true
};
console.log(paris);

//JS Challenge 1
//Given an object called paris, log its temperature
console.log(paris.name);
console.log(paris.country);
console.log(paris.temperature);
console.log(paris.language);
console.log(paris.capitalCity);

//JS Challenge 2
//Create an object called sydney similar
//to paris and log its temperature (use fake data)
let sydney = {
  name: "Sydney",
  city: "New South Wales",
  country: "Australia",
  language: "English",
  temperature: "43"
};

console.log(sydney);
console.log(sydney.name);
console.log(sydney.city);
console.log(sydney.country);
console.log(sydney.language);
console.log(sydney.temperature);

//JS Challenge 3
//Create an array with 3 different Australian
//city names only and log each name
let cityName = ["Melbourne", "Blue Mountains", "Perth"];
console.log(cityName[0]);
console.log(cityName[1]);
console.log(cityName[2]);

//JS Challenge 4
//Create an array of 3 cities with the
//same properties as paris and console log
//each city temperature

let cities = [
  {
    name: "Chicago",
    country: "United States",
    language: "Engish",
    temperature: 99
  },
  {
    name: "London",
    country: "United States",
    language: "English",
    temperature: 15
  },
  {
    name: "Madrid",
    country: "Spain",
    language: "Spanish",
    temperature: 25
  }
];

console.log(cities);
console.log(cities[0].temperature);
console.log(cities[1].temperature);
console.log(cities[2].temperature);
