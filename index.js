require("dotenv").config();
const express = require("express");
const router = require("./routers/routers");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
