const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: '*'
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Conectado db.");
  })
  .catch((err) => {
    console.log("Falha db: " + err.message);
  });

app.get("/", (req, res) => {
  res.json({ message: "Bem vindo." });
});

require("./app/routes/person.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
