const data = [
  {
    id: "2",
    title: "car",
    description: "a car that moves",
    price: "200,000",
    category: "sport",
    // image:
    quantity: "37",
    rating: {
      rate: "7",
      count: "30",
    },
  },
  {
    id: "3",
    title: "bike",
    description: "a bike that roles",
    price: "1,000",
    category: "sport",
    // image:
    quantity: "32",
    rating: {
      rate: "8",
      count: "22",
    },
  },
];
const getData = () => {
  return data;
};

//find index
const findindex = (_id) => {
  let data = getData();
  const obj = getbyid(_id);
  const index = data.indexOf(obj);
  return index;
};

//מצא על ידי ת"ז
const getbyid = (_id) => {
  let data = getData();
  const obj = data.find((element) => element.id === _id);
  return obj;
};
const addData = (products) => {
  let data = getData();
  data.push(products);
  return data;
};

module.exports.addData = addData;
module.exports.getbyid = getbyid;
module.exports.findindex = findindex;
module.exports.getData = getData;
