const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

let money = 0; // Переменная для хранения денег

// Эндпоинт для получения текущего значения денег
app.get("/money", (req, res) => {
  res.json({ money });
});

// Эндпоинт для обновления значения денег
app.post("/money", (req, res) => {
  const { amount } = req.body;
  if (typeof amount === "number") {
    money += amount;
    res.json({ success: true, money });
  } else {
    res.status(400).json({ success: false, message: "Invalid amount" });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
