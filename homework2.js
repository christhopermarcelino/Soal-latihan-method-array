const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    array = array.map((arr) => {
      if (typeof arr != "string") {
        reject("Invalid input. Parameter contains not string element");
      }
      return arr.toUpperCase();
    });
    resolve(array);
  });
};

const sortWords = (array) => {
  return new Promise((resolve) => {
    resolve(array.sort());
  });
};

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
