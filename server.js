
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 10000;

app.use(cors());
app.use(express.static("."));
app.use(express.json());

// Route per ricevere l'angolo dal frontend e salvarlo
app.post("/set-comando", (req, res) => {
  const angolo = req.body.angolo;
  fs.writeFile("comando-servo.txt", String(angolo), (err) => {
    if (err) {
      console.error("Errore durante il salvataggio:", err);
      return res.status(500).send("Errore salvataggio");
    }
    res.send("OK");
  });
});

// Route per Arduino per leggere l'angolo
app.get("/comando-servo", (req, res) => {
  fs.readFile("comando-servo.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Errore lettura file:", err);
      return res.status(500).send("Errore");
    }
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server avviato sulla porta ${port}`);
});
