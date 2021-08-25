const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({ message: "hello world!" });
});

app.get('/courses/:id', (req, res) => {
  const params = req.params;
  res.status(200).json([params,"React", "React Native", "Flutter", "NodeJs", "Elixir"]);
});

app.get('/course', (req, res) => {
  const query = req.query;
  res.status(200).json([query,"React", "React Native", "Flutter", "NodeJs", "Elixir"]);
});

app.post('/courses', (req, res) => {
  res.status(201).json(req.body);
  //res.status(200).json(["React", "React Native", "Flutter", "NodeJs", "Elixir", "Ruby on Rails"]);
});

app.patch('/courses', (req, res) => {
  res.status(200).json(["ReactJS", "Android", "Flutter", "NodeJs", "Elixir", "Ruby on Rails"]);
});

app.put('/courses', (req, res) => {
  res.status(200).json(["ReactJS", "React Native", "Flutter", "NodeJs", "Elixir", "Ruby on Rails"]);
});

app.delete('/courses', (req, res) => {
  res.status(200).json(["ReactJS", "NodeJs", "Elixir", "Ruby on Rails"]);
});

app.listen(3000);