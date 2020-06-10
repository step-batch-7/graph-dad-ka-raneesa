//Example 
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to 
// Should return true.

const generateAdjacencyTable = function(pairs) {
  let table = {};
  pairs.forEach(([src, dest]) => {
    if (!table[src]) table[src] = [];
    table[src].push(dest);
  })
  return table;
}

const bfs = function(pairs, source, target) {
  const table = generateAdjacencyTable(pairs);
  let visitedList = [];
  let queue = [source];
  const keys = Object.keys(table);
  if (keys.includes(source)) {
    while (queue && queue.length) {
      const node = queue.shift();
      table[node].forEach(connectedNode => {
        if (!queue.includes(connectedNode) && !visitedList.includes(connectedNode)) {
          queue.push(connectedNode);
        }
      });
      visitedList.push(node);
      if (node === target) {
        return true;
      }
    }
  }
  return false;
};

module.exports = { bfs };
