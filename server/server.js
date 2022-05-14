const path = require("path");
const express = require("express");

const db = require("./controllers");
const cors = require("cors");
const app = express();
app.use(express.json());

const PORT = 3000;

app.use(cors());
app.get("/", db.getCharacter, (req, res) => {
  // console.log('passed db.getCharacter', res.locals.first);
  return res.status(200).json(res.locals.char);
});

app.delete("/delete", db.deleteCharacter, (req, res) => {
  // console.log("passed db.getCharacter", res.locals.deleted);
  return res.status(200).json(res.locals.deleted);
});

app.post("/post", db.addCharacter, (req,res) => {
  return res.status(200).json(res.locals.added)
}
)

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(500).json({ error: err });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
