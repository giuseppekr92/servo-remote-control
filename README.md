# Controllo Remoto Servo con Arduino e Render

## Struttura
- `server.js`: backend Node.js per ricevere comandi dal frontend e restituirli ad Arduino.
- `package.json`: dipendenze e configurazione per Render.com.
- `index.html`: interfaccia utente per controllare l'angolo del servo.
- Arduino `.ino`: sketch separato.

## Istruzioni
1. Carica `server.js` e `package.json` su un nuovo repository GitHub.
2. Su [Render.com](https://render.com), crea un nuovo Web Service collegando il repo.
3. Configura:
   - **Build command:** `npm install`
   - **Start command:** `npm start`
4. Copia il dominio pubblico fornito e sostituiscilo in `index.html`.

## Sketch Arduino
Arduino deve fare richieste GET periodiche a:
```
https://TUO-SERVER.onrender.com/comando-servo
```
