// establishes a connection with the game server
const { IP, PORT } = require('./constants');
const net = require("net");
const stdin = process.stdin;
stdin.setEncoding('utf8');
const connect = function () {


  const conn = net.createConnection({

    host: IP,// Localhost address here,
    port: PORT,// PORT number here,
  });


  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data);
  });
  conn.write("Name: Teddy");

  return conn;

};
module.exports = connect;