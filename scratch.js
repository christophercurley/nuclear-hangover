const axios = require("axios");
const url = "https://ghibliapi.herokuapp.com/films";

const getData = () => {
  return axios
    .get(url)
    .then((response) => response.data[0].title)
    .catch((error) => console.log("WE HAVE AN ERROR :)"));
};
