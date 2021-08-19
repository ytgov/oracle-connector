require('dotenv').config();

var knex = require('knex');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var conn = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  }
});

app.set("db", conn);

app.get('/', function (req, res) {
  const db = req.app.get('db');

  db.raw("SELECT * FROM INFORMATION_SCHEMA.TABLES")
    .then(rows => {
      res.send(rows);
    })
    .catch((e) => {
      console.error(e);
      res.status(500).send("ERROR: Either the connection to Oracle isn't working or the query is incorrect");
    })
});

console.log(`Oracle Database Info: ${process.env.DB_HOST} ${process.env.DB_NAME}`)

app.listen(port);