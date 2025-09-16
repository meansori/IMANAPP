const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello i'm Ansori from express Js");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
