const express = require("express");
const userRouter = express.Router();
const { listItems1 } = require("../controlers/userControler");
const { findById1 } = require("../controlers/userControler");
const { addItem1 } = require("../controlers/userControler");
const { updateItem1 } = require("../controlers/userControler");
const { subItem1 } = require("../controlers/userControler");
const { userLogin } = require("../controlers/userControler");
//
//
//
userRouter.get("/users/data", listItems1);
userRouter.get("/users/:id", findById1);
userRouter.post("/users/add", addItem1);
userRouter.put("/users/update", updateItem1);
userRouter.delete("/users/:id", subItem1);
userRouter.post("/users/login", userLogin);

//
//
//
module.exports.userRouter = userRouter;
