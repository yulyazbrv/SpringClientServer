const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/index");
const PORT = 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    handlePreflightRequest: (req, res) => {
      res.writeHead(200, {
        "Access-Control-Allow-Origin": "http://localhost:5000",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",
        "Access-Control-Allow-Headers": "my-custom-header",
        "Access-Control-Allow-Credentials": true,
      });
      res.end();
    },
  })
);
app.use("/api", router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server listened on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
