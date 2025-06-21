const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let angolo = 90;

app.get('/comando-servo', (req, res) => {
  res.json({ angolo });
});

app.post('/set-comando', (req, res) => {
  if (req.body && typeof req.body.angolo === 'number') {
    angolo = req.body.angolo;
    return res.json({ success: true });
  }
  res.status(400).json({ success: false });
});

app.listen(process.env.PORT || 3000, () => console.log('Server running'));
