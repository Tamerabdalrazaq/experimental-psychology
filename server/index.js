const express = require("express");
const app = express();
const userRouter = require("./routes/user");

app.get("/");
app.use("/users", userRouter);

app.listen(3000);
