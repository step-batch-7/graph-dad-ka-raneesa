const assert = require('chai').assert;
const { bfs, dfs } = require("../src/graph");

describe("BFS", function() {
  const pairs = [["India", "Pakistan"], ["India", "Nepal"], ["India", "China"], ["Nepal", "China"], ["Pakistan", "China"], ["China", "Russia"]];
  it("should give true if two node connected perfectly", function() {
    assert.ok(bfs(pairs, "India", "Pakistan"));
  })

  it("should give true if two node connected moderately", function() {
    assert.ok(bfs(pairs, "India", "Russia"));
  })

  it("should give false if source has no path to target", function() {
    assert.notOk(bfs(pairs, "china", "Pakistan"));
  })

  it("should give true for single node connected to itself", function() {
    const routes = [["aa", "aa"]];
    assert.ok(bfs(routes, "aa", "aa"));
  })

  it("should give false for single node not connected to itself", function() {
    const routes = [["aa", "bb"]];
    assert.notOk(bfs(routes, "aa", "aa"));
  })

  it("should give false for source node is not in the list", function() {
    const routes = [["aa", "bb"], ["aa", "cc"]];
    assert.notOk(bfs(routes, "dd", "cc"));
  })
});

describe("DFS", function() {
  const pairs = [["India", "Pakistan"], ["India", "Nepal"], ["India", "China"], ["Nepal", "China"], ["Pakistan", "China"], ["China", "Russia"]];
  it("should give true if two node connected perfectly", function() {
    assert.deepStrictEqual(dfs(pairs, "India", "Pakistan"), ["India", "Pakistan"]);
  })

  it("should give true if two node connected moderately", function() {
    assert.deepStrictEqual(dfs(pairs, "India", "Russia"), ["India", "China", "Russia"]);
  })

  it("should give false if source has no path to target", function() {
    assert.isUndefined(dfs(pairs, "china", "Pakistan"));
  })

  it("should give true for single node connected to itself", function() {
    const routes = [["aa", "aa"]];
    assert.deepStrictEqual(dfs(routes, "aa", "aa"), ["aa", "aa"]);
  })

  it("should give false for single node not connected to itself", function() {
    const routes = [["aa", "bb"]];
    assert.isUndefined(dfs(routes, "aa", "aa"));
  })

  it("should give false for source node is not in the list", function() {
    const routes = [["aa", "bb"], ["aa", "cc"]];
    assert.isUndefined(dfs(routes, "dd", "cc"));
  })
});