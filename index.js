const express = require("express");

const app = express();

app.get("/", (req, res) => {

  res.send("Gold AI Robot Running");

});

app.get("/analyze", (req, res) => {

  const signals = ["BUY", "SELL", "WAIT"];

  const signal = signals[Math.floor(Math.random() * signals.length)];

  res.json({

    pair: "XAUUSD",

    timeframe: "1m",

    signal: signal,

    confidence: Math.floor(Math.random() * 20) + 80

  });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(Server running on ${PORT});

});
