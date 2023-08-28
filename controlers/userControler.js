const express = require("express");
const { getData } = require("../dal/usersdal");
// const { forEach, findIndex } = require("lodash");
const { findindex } = require("../dal/usersdal");
const { getbyid } = require("../dal/usersdal");
//פונקציה שמדפיסה את המוצרים בחנות
const listItems = (req, res) => {
  let data = getData();
  data.forEach((element) => {
    console.log(element.title);
  });
  res.send(data);
};

const findById = (req, res) => {
  let id = req.params.id;
  let objmatch = getbyid(id);
  if (objmatch) res.send(objmatch);
  res.status(404).send("The ID you gave does not match any item :(");
};

//יצירת מוצר חדש
const addItem = (req, res) => {
  let data = getData();
  const newuser = req.body;
  data.push(newuser);
  res.send(data);
};

//עדכון מוצר חדש
const updateItem = (req, res) => {
  let data = getData();
  const obj = req.body;
  const _id = obj.id;
  const index = findindex(_id);
  data.splice(index);
  data.push(obj);
  res.send(data);
};
// מוציא משתמש מהמאגר לפי id
const subItem = (req, res) => {
  let data = getData();
  const _id = req.params.id;
  const index = findindex(_id);
  if (data[index]) {
    data.splice(index);
    res.send(data);
  } else {
    res
      .status(404)
      .send("There is no such product... enter id again please :)");
  }
};

//פונקציה שבודקת האם המשתמש קיים במערכת
const userLogin = (req, res) => {
  const users = getData();
  const info = req.body;
  const _id = info.id;
  const _email = info.email;
  const _password = info.password;
  const result = users.find(
    (element) =>
      element.id === _id &&
      element.email === _email &&
      element.password === _password
  );
  if (result) res.status(200).send("Login success!!!");
  res.status(404).send("Faild Login :(");
};
//
//
//
//
//
//
//
module.exports.addItem1 = addItem;

module.exports.listItems1 = listItems;

module.exports.getbyid1 = getbyid;
module.exports.findById1 = findById;

module.exports.updateItem1 = updateItem;

module.exports.subItem1 = subItem;
module.exports.userLogin = userLogin;
