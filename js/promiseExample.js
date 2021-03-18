const blockingGetEvenRandomNumberBetweenTwoAndTen = (resolve, reject) => {
  const randomNumber = Math.floor(Math.random * 10 + 1);
  const isEven = (number) => number % 2 === 0;

  for (let i = 0; i < 1000000000; i++) {
    1 + 1;
  }

  isEven(randomNumber)
    ? resolve(`Your random even number is ${randomNumber}`)
    : reject(`Number returned was odd.`);
};

const asyncPromiseGetEvenRandomNumberBetweenTwoAndTen = new Promise(
  (resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    const isEven = (number) => number % 2 === 0;

    for (let i = 0; i < 1000000000; i++) {
      1 + 1;
    }
    //   isEven(randomNumber)
    //     ? resolve(`Your random even number is ${randomNumber}`)
    //     : reject(`Number returned was odd.`);

    if (isEven(randomNumber)) {
      resolve(`Your random even number is ${randomNumber}`);
    } else {
      reject(`Number returned was odd.`);
    }
  }
);

//This code will execute once the HTML loads
//This log is going to show up
console.log("Beginning of a 'blocking' function.");
blockingGetEvenRandomNumberBetweenTwoAndTen(
  (res) => console.log(res),
  (err) => console.error(err)
);
console.log("End of a 'blocking' function.");
console.log("============================================\n");

const pElement = document.querySelector(".taco-base-layer_title");
pElement.innerText = "I'm finished";

//Once this starts, we'll notice that line 52 will be executed
//before we see a response from the async function
console.log("Beginning of a 'async' function.");
asyncPromiseGetEvenRandomNumberBetweenTwoAndTen
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
console.log(
  "Stuff that's going on while the promise is waiting to be fulfilled"
);

