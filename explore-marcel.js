const days = ["Monday", "Wednesday", "Thursday", "Friday"];
days.splice(1, 0, "Tuesday"); // inserts di index 1
console.log("days -> ", days);

const languages = ["js", "go", "php", "rust", "python"];
console.log(languages.slice(1));
console.log(languages.slice(2, 4));
console.log(languages.slice(-3));

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const res1 = arr.map((e) => e * 3);
const res2 = arr.filter((e) => e % 2 == 0);
const res3 = arr.reduce((acc, cur) => cur + acc, 0);
const res4 = arr.find((e) => e > 6);
const res5 = arr.findIndex((e) => e > 6);

console.log("res1 -> ", res1);
console.log("res2 -> ", res2);
console.log("res3 -> ", res3);
console.log("res4 -> ", res4);
console.log("res5 -> ", res5);
