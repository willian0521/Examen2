const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Docker funcionando");
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Servidor corriendo en 5000");
});