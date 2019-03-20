const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "Luis Perez",
      date: "940102",
      gender: "masculino",
      occupation: "student"
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "Jung Ik",
      date: "990102",
      gender: "masculino",
      occupation: "student"
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "Hugo",
      date: "930102",
      gender: "masculino",
      occupation: "student"
    }
  ]);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
