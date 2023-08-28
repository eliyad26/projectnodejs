const { router } = require("./routers/router");
const { userRouter } = require("./routers/userRouter");
const express = require("express");
const app = express();
const { getFromApi } = require("./controlers/axiosapi");
app.use(express.json());
const cors = require("cors");

//ידפיס את סוג הפעולה
const morgan = (req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
};
app.use(cors());
app.use(morgan);

//ראוטר ראשי
app.use(router);
app.use(userRouter);
getFromApi();
//איתחול שרת
const port = 260;
app.listen(port, () => {
  console.log("achla!!!");
});
