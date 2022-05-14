const db = require("../db/dbModel");

const dbController = {};

dbController.getCharacter = (req, res, next) => {
  const oneCharacter = "Select * FROM public.people LIMIT 1";
  db.query(oneCharacter)
    // .then(data => data.json())
    .then((data) => {
      // console.log("hellow");
      // console.log(data.rows[0]);
      res.locals.first = data.rows[0];
      // console.log(res.locals.first)
      return next();
    })
    .catch((err) => next(err));
};

dbController.deleteCharacter = (req, res, next) => {
  const { query } = req.body;
  console.log(query);
    db.query(query)
    .then((data) => {
        res.locals.deleted = `${query} has been deleted`
        return next();
    }).catch((err) => next(err));
};

module.exports = dbController;
