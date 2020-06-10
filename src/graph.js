//Example 
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to 
// Should return true.

const convertToObject = function(pairs) {
  let data = {};
  pairs.reduce((data, pair) => {
    const keys = Object.keys(data);
    if (!keys.includes(pair[0])) {
      data[pair[0]] = [];
    }
    data[pair[0]].push(pair[1]);
    return data;
  }, data);
  return data;
}

const bfs = function(pairs, source, target) {
  const data = convertToObject(pairs);
  let visitedList = [];
  let queue = [];
  let flag = false;
  const keys = Object.keys(data);
  queue.push(source);
  if (keys.includes(source) && keys.includes(target)) {
    while (queue && queue.length) {
      const node = queue.shift();
      data[node].forEach(connectedNode => {
        if (!queue.includes(connectedNode) && !visitedList.includes(connectedNode)) {
          queue.push(connectedNode);
        }
      });
      visitedList.push(node);
      if (node === target) {
        flag = true;
        return flag;
      }
    }
  }
  return flag;
};

module.exports = { bfs };
