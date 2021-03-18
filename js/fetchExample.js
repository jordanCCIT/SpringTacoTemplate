fetch("http://taco-randomizer.herokuapp.com/random/")
  .then((response) => response.json())
  .then((jsonData) => {
    console.log(jsonData);

  })
  .catch((err) => `Lmao, it's broken ${err}`);
