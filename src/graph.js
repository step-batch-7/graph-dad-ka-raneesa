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
  if (source === target && !table[source].includes(target)) return false;
  while (queue && queue.length) {
    const node = queue.shift();
    if (table[node]) {
      if (node === target) return true;
      table[node].forEach(connectedNode => {
        const isAlreadyExists = queue.includes(connectedNode) || visitedList.includes(connectedNode);
        if (!isAlreadyExists) queue.push(connectedNode);
      });
      visitedList.push(node);
    }
  }
  return false;
};

module.exports = { bfs };
