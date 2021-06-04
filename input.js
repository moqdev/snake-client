const setupInput = function (result) {
  strt = result;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
};
const handleUserInput = function (input) {
  // const stdin = process.stdin;
  if (input === '\u0003') {
    process.exit();
  };