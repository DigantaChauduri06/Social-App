const express = require("express");
const { format } = require("date-fns");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/api/v1/instragram", (req, res) => {
  const instraSocial = {
    username: "Diganta",
    follwers: 87,
    follows: 100,
    date: format(Date.now(), "yyyy-MM-dd"),
  };
  res.status(200).json({
    status: "success",
    instraSocial,
  });
});
app.get("/api/v1/facebook", (req, res) => {
  const facebookSocial = {
    username: "Diganta",
    follwers: 900,
    follows: 10,
    date: format(Date.now(), "yyyy-MM-dd"),
  };
  res.status(200).json({
    status: "success",
    facebookSocial,
  });
});
app.get("/api/v1/linkedin", (req, res) => {
  const linkedinSocial = {
    username: "Diganta",
    follwers: 600,
    follows: 100,
    date: format(Date.now(), "yyyy-MM-dd"),
  };
  res.status(200).json({
    status: "success",
    linkedinSocial,
  });
});
app.get("/api/v1/:id", (req, res) => {
  res.status(200).json({
    params: req.params.id,
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`APP IS RUNNING IN PORT ${PORT} URL http://localhost:4000`);
});
