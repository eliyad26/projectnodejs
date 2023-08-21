const express = require("express");
const { getData } = require("../dal/dal");
// const { forEach, findIndex } = require("lodash");
const { findindex } = require("../dal/dal");
const { getbyid } = require("../dal/dal");

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
// מוציא פריט מהמאגר לפי id
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
const addQuantity = (req, res) => {
  let data = getData();
  const _id = req.params.id;
  const index = findindex(_id);
  if (data[index]) {
    let num = parseInt(data[index].quantity, 10);
    num++;
    data[index].quantity = num.toString();
    res.send(data[index]);
  } else res.status(404).send("there is no such product :(");
};
//
//
//
//
//
//
//
//
module.exports.addItem = addItem;

module.exports.listItems = listItems;

module.exports.getbyid = getbyid;
module.exports.findById = findById;

module.exports.updateItem = updateItem;

module.exports.subItem = subItem;
module.exports.addQuantity = addQuantity;
