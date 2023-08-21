const users = [
  {
    id: "2",
    email: "elshdu5@gmail.com",
    password: "12345678",
    isAdmin: true,
  },
  {
    id: "3",
    email: "ramon5@gmail.com",
    password: "12434358",
    isAdmin: false,
  },
];

//
//
//
//

const getData = () => {
  return users;
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
