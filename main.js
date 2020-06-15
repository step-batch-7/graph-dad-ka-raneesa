const { bfs, dfs } = require('./src/graph');
const input = require('./input.json');

const main = function() {
  console.log("Breadth First Search:")
  console.log('bb -> jj', bfs(input, 'bb', 'jj'));
  console.log('jj -> aa', bfs(input, 'jj', 'aa'));
  console.log('aa -> hh', bfs(input, 'aa', 'hh'));
  console.log('hh -> ii', bfs(input, 'hh', 'ii'));
  console.log('ii -> ee', bfs(input, 'ii', 'ee'));
  console.log('ee -> mm', bfs(input, 'ee', 'mm'));
  console.log('mm -> jj', bfs(input, 'mm', 'jj'));

  console.log('mm -> mm', bfs(input, 'mm', 'mm'));
  console.log('jj -> jj', bfs(input, 'jj', 'jj'));

  console.log("Depth First Search:")
  console.log('bb -> jj', dfs(input, 'bb', 'jj'));
  console.log('jj -> aa', dfs(input, 'jj', 'aa'));
  console.log('aa -> hh', dfs(input, 'aa', 'hh'));
  console.log('hh -> ii', dfs(input, 'hh', 'ii'));
  console.log('ii -> ee', dfs(input, 'ii', 'ee'));
  console.log('ee -> mm', dfs(input, 'ee', 'mm'));
  console.log('mm -> jj', dfs(input, 'mm', 'jj'));

  console.log('mm -> mm', dfs(input, 'mm', 'mm'));
  console.log('jj -> jj', dfs(input, 'jj', 'jj'));
}

main();