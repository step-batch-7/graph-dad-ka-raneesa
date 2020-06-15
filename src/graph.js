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

const search = function(source, target, visited, adjacencyTable) {
  const adjacentNodes = adjacencyTable[source] || [];
  visited.push(source);
  if (adjacentNodes.includes(target)) return [source, target];
  const uniqueNodes = adjacentNodes.filter((child) => !visited.includes(child));
  const stack = [...uniqueNodes];
  while (stack.length != 0) {
    const toVisit = stack.pop();
    let path = search(toVisit, target, visited, adjacencyTable)
    if (path) return [source, ...path];
  }
  return;
}

const dfs = function(pairs, source, target) {
  const adjacencyTable = generateAdjacencyTable(pairs);
  const visited = [];
  return search(source, target, visited, adjacencyTable);
}

const bfs = function(pairs, source, target) {
  const table = generateAdjacencyTable(pairs);
  let visitedList = [];
  let queue = [source];
  while (queue && queue.length) {
    const node = queue.shift();
    if (table[node]) {
      if (table[node].includes(target)) return true;
      table[node].forEach(connectedNode => {
        const isAlreadyExists = queue.includes(connectedNode) || visitedList.includes(connectedNode);
        if (!isAlreadyExists) queue.push(connectedNode);
      });
      visitedList.push(node);
    }
  }
  return false;
};

module.exports = { bfs, dfs };
