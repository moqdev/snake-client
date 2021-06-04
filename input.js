const connect = require("./client");
// Stores the active TCP connection object.
//let connection;	
const setupInput = function (conn) {
  results = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function (input) {

  if (input === '\u0003') {
    process.exit();
  };
  if (input === 'w') {
    connection.write("Move: up");
  };

  if (input === 'a') {
    connection.write("Move: left");
  };

  if (input === 's') {
    connection.write("Move: down");
  };
  if (input === 'd') {
    connection.write("Move: right");
  };

};

module.exports = setupInput;