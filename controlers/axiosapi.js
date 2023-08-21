const axios = require("axios");
const { getData } = require("../dal/dal");
const { addData } = require("../dal/dal");
const { error } = require("console");

const getFromApi = () => {
  axios
    .get("https://fakestoreapi.com/products ")
    .then((response) => {
      products = response.data;
      products.forEach((element) => {
        let _id = element.id;
        _id = _id.toString();
        element.id = _id;
        let randomInteger = Math.floor(Math.random() * 99) + 1;
        element.quantity = randomInteger;
        addData(element);
      });
      let data = getData;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports.getFromApi = getFromApi;
