// establishes a connection with the game server
const net = require('net');

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};


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