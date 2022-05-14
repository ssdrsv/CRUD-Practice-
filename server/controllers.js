const db = require("../db/dbModel");

const dbController = {};

dbController.getCharacter = (req, res, next) => {
  const oneCharacter = "Select * FROM public.people";
  db.query(oneCharacter)
    .then((data) => {
      res.locals.char = data.rows;
      // console.log(res.locals.char)
      return next();
    })
    .catch((err) => next(err));
};

dbController.deleteCharacter = (req, res, next) => {
  const { query } = req.body;
  console.log(query);
    db.query(`DELETE FROM public.people WHERE _id = ${query}`)
    .then((data) => {
        res.locals.deleted = `${query} has been deleted`
        return next();
    }).catch((err) => next(err));
};

dbController.addCharacter = (req, res, next) => {
  const { name } = req.body;
  console.log('req.body is', name)
  const query = `INSERT INTO public.people (name) VALUES ('${name}')`
  // must add a id and value 
  db.query(query)
  .then((data) => {
    res.locals.added = `${name} was added`
    return next();
  }).catch((err) => next(err));
}

module.exports = dbController;
