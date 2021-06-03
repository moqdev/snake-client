// establishes a connection with the game server
const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: "192.168.0.101",
    port: 50541,
  });

  // interpret incoming data as text
  //
  conn.setEncoding("utf8");

  return conn;
};



console.log("Connecting ...");
connect();