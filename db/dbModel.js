const { Pool } = require('pg');

const PG_URI = 'postgres://ejmydqxj:A2aklXSpKaBXwqx_PKIqFzbwwvCxtPe7@lallah.db.elephantsql.com/ejmydqxj'

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
/*
-- Run this command from the db foler directory to write this data to our ElephantSQL database. (If the db already contains data, you may want to delete it first so you're starting from a blank slate).
-- 'psql -d postgres://ejmydqxj:A2aklXSpKaBXwqx_PKIqFzbwwvCxtPe7@lallah.db.elephantsql.com/ejmydqxj -f create-db.sql'
// make sure to navigate into folder that contain the create-db file before running command 
*/