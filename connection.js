var { connect } = require("http2");
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "127.0.0.1",
  user: "root",
  password: "yhpKy5*pBu",
  database: "nodemysql",
});

connection.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else console.log(err);
});

module.exports = connection;
