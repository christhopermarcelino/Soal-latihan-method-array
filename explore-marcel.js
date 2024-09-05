// SPLICE
const days = ["Monday", "Wednesday", "Thursday", "Friday"];
days.splice(1, 0, "Tuesday");
console.log("days after insert -> ", days);

// SLICE
const languages = ["js", "go", "php", "rust", "python"];
console.log(languages.slice(1));
console.log(languages.slice(2, 4));
console.log(languages.slice(-3));
console.log(languages.slice(-1));

// BUILT-IN FUNCTIONS
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const resultMap = arr.map((e) => e * 3);
const resultFilter = arr.filter((e) => e % 2 == 0);
const resultReduce = arr.reduce((acc, cur) => cur + acc, 0);
const resultFind = arr.find((e) => e > 6);
const resultFindIndex = arr.findIndex((e) => e > 6);
console.log("resultMap -> ", resultMap);
console.log("resultFilter -> ", resultFilter);
console.log("resultReduce -> ", resultReduce);
console.log("resultFind -> ", resultFind);
console.log("resultFindIndex -> ", resultFindIndex);

// FILTER
const words = ["apple", "banana", "grape", "kiwi", "watermelon"];
const wordsLongerThanFiveCharacters = words.filter((w) => w.length > 5);
console.log("wordsLongerThanFiveCharacters -> ", wordsLongerThanFiveCharacters);

// MAP
// return full name
const people = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
];
const fullNames = people.map((p) => `${p.firstName} ${p.lastName}`);
console.log("fullNames -> ", fullNames);

// SORT
// simple sort
const numbers = [3, 4, 5, 2, 1];
numbers.sort();
console.log("simple sort -> ", numbers);
// sort by value inside object
const cities = [
  {
    country: "surabaya",
    score: 93,
  },
  {
    country: "jakarta",
    score: 95,
  },

  {
    country: "bandung",
    score: 90,
  },
  {
    country: "semarang",
    score: 91,
  },
];
cities.sort((prev, next) => prev.score - next.score);
console.log("cities after ascending sort -> ", cities);
cities.sort((prev, next) => next.score - prev.score);
console.log("cities after descending sort -> ", cities);

const totalScore = cities.reduce((acc, cur) => cur.score + acc, 0);
console.log("totalScore -> ", totalScore);

// calculate total occurence
const fruits = ["Banana", "Orange", "Apple", "Orange", "Pear", "Banana"];
const totalOccurence = fruits.reduce(
  (acc, cur) => ({ ...acc, [cur]: (acc[cur] ?? 0) + 1 }),
  {}
);
console.log("totalOccurence -> ", totalOccurence);

const me = {
  firstName: "Mar",
  lastName: "cel",
  home: "Jakarta",
};
const { firstName, lastName, home } = me;
console.log("firstName -> ", firstName);
console.log("lastName -> ", lastName);
console.log("home -> ", home);
