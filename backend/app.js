const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/candidates", (req, res) => {
  const candidates = [{ name: "Martin" }, { name: "Tania" }, { name: "Mojdeh" }];

  res.json(candidates);
});

app.get("/api/candidates/:candidate_id", (req, res) => {
  const candidate = { name: "Martin" };

  res.json(candidate);
});

app.get("/api/interviewers", (req, res) => {
  const interviewers = [{ name: "Martin" }, { name: "Tania" }, { name: "Mojdeh" }];

  res.json(interviewers);
});

app.get("/api/interviewers/:interviewer_id", (req, res) => {
  const interviewer = { name: "Martin" };

  res.json(interviewer);
});

module.exports = app;
