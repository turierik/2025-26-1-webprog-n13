let numbers = [5, 60, -8, 0, 53, 7, 9, 2, 1];

// 0. feladat: válogasd ki a páros számokat egy új tömbbe

let even = [];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
        // even[even.length] = numbers[i];
        even.push(numbers[i]);
    }
}
console.log(even);

even = [];
for (const number of numbers){
    if (number % 2 === 0) even.push(number);
}
console.log(even);

console.log(numbers.filter(x => x % 2 === 0));

// 1. feladat: numbers tömb köbe
console.log(numbers.map(x => x ** 3));

// 2. feladat: numbers tömb legnagyobb száma
// a. Math.max
console.log(Math.max(...numbers));
// b. reduce
console.log(numbers.reduce((prevResult, element) => prevResult > element ? prevResult : element, -Infinity));

// 3. feladat: hány negatív szám van a tömbben?
console.log(numbers.filter(x => x < 0).length);
console.log(numbers.reduce((prevResult, element) => prevResult + (element < 0 ? 1 : 0), 0));

// objektum

let car = {
    model: "Tesla M",
    year: 2023,
    broken: false
};
console.log(car);
console.log(car.year);
console.log(car["year"]);

// objektumok tömbje - nagyon szeretjük pl. zh-n :)

let cars = [
    { model: "Kia Ceed", year: 2021, broken: false },
    { model: "Hyundai Aiaiai", year: 2018, broken: true },
    { model: "Yugo 55", year: 1987, broken: false }
];

console.log(cars.filter(car => car.year > 2010).map(car => car.model));