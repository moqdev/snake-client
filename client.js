// ES6 shorthand method
// establishes a connection with the game server
const { Module } = require('module');
const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: HOST,
  });

  // interpret incoming data as text
  //
  conn.setEncoding("utf8");
  //initials SSS

  conn.on('data', (data) => {
    console.log(data);
  });
  //conn.write("Move: down");
  //console.log("down")



  return conn;

};

module.exports = connect;