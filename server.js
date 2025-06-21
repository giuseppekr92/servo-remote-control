const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "."))); // Serve index.html e altri file

// API endpoint per comando
app.post("/set-comando", (req, res) => {
  const angolo = req.body.angolo;
  console.log("Ricevuto comando:", angolo);

  // Salva l’angolo in un file leggibile da Arduino
  fs.writeFile("comando-servo.txt", angolo.toString(), (err) => {
    if (err) {
      console.error("Errore nel salvataggio:", err);
      return res.status(500).send("Errore interno");
    }
    res.send("OK");
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server avviato su porta ${PORT}`);
});
