const PriorityQueue = require('../trees/priority');

class Edge {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  toString() {
    return `Name: ${this.name}. Weight: ${this.weight}`
  }
}

class Graph {
  constructor() {
    this.list = new Map();
  }

  addVertex(name) {
    this.list.set(name, new Set());
  }

  addEdge(name1, name2, weight) {
    if (!this.list.has(name1) || !this.list.has(name2)) { return }
    const vertex1 = this.list.get(name1);
    const vertex2 = this.list.get(name2);
    vertex1.add(new Edge(name2, weight));
    vertex2.add(new Edge(name1, weight));
    this.list.set(name2, vertex2)
    this.list.set(name1, vertex1)
  }

  removeEdge(name1, name2) {
    if (!this.list.has(name1) || !this.list.has(name2)) { return }
    const vertex1 = this.list.get(name1);
    const vertex2 = this.list.get(name2);
    vertex1.delete(name2);
    vertex2.delete(name1);
  }

  removeVertex(name) {
    if (!this.list.has(name)) { return }

    const vertex = this.list.get(name);
    for (const edge of [...vertex.values()]) {
      this.removeEdge(name, edge.name)
    }
    this.list.delete(name)
  }

  traverse_dfs(start) {
    const list = this.list;
    if (!list.has(start)) { return }
    const vertex = list.get(start);
    if (!vertex.size) { return; }
    const visited = new Set();
    visited.add(start)

    function helper(neighbors) {
      for (const neighbor of neighbors) {
        if (visited.has(neighbor.name)) { continue; }
        visited.add(neighbor.name)
        const children = list.get(neighbor.name);
        if (!children.size) { return; }
        helper([...children])
      }
    }

    helper([...vertex]);
  }

  iterate_dfs(start) {
    const list = this.list;
    if (!list.has(start)) { return }
    const stack = [start]
    const visited = new Set();

    visited.add(start)

    while (stack.length) {
      const n = stack.pop();
      const vertex = list.get(n)
      for (const neighbor of vertex) {
        if (visited.has(neighbor.name)) { continue; }
        visited.add(neighbor.name)
        stack.push(neighbor.name)
      }
    }
  }

  breadthTraverse(start) {
    const list = this.list;
    if (!list.has(start)) { return }
    const queue = [start]
    const visited = new Set();

    visited.add(start)

    while (queue.length) {
      const n = queue.shift();
      const vertex = list.get(n)
      for (const neighbor of vertex) {
        if (visited.has(neighbor.name)) { continue; }
        visited.add(neighbor.name)
        queue.push(neighbor.name)
      }
    }
  }

  dijkstra(start, end) {
    const nodes = new PriorityQueue();
    const distances = new Map();
    const previous = new Map();

    // initial state
    for (const node of this.list) {
      const name = node[0]
      const val = start === name ? 0 : Infinity
      distances.set(name, val)
      nodes.enqueue(name, val)
      previous[name] = null
    }

    let smallest;
    let path = []
    // as long there's something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val
      if (smallest === end) {
        // build path
        while (previous.get(smallest)) {
          path.push(smallest);
          smallest = previous.get(smallest)
        }
        return path.concat(smallest).reverse();
      }

      const distance = distances.get(smallest)

      if (!smallest || distance === Infinity) {
        continue;
      }

      for (let neighbor of this.list.get(smallest)) {
        let candidate = distance + neighbor.weight
        if (candidate >= distances.get(neighbor.name)) {
          continue;
        }
        // updating new smallest distance to neighbor
        distances.set(neighbor.name, candidate);
        // how we got to neighbor
        previous.set(neighbor.name, smallest)
        // enqueue in priority queue with new priority
        nodes.enqueue(neighbor.name, candidate)
      }
    }


  }
}

let g = new Graph();
g.addVertex('Dallas')
g.addVertex('Tokyo')
g.addVertex('Aspen')
g.addVertex('LA')
g.addVertex('HK');
g.addVertex('Mexico');

g.addEdge('Dallas', 'Tokyo', 2);
g.addEdge('Dallas', 'Aspen', 12);
g.addEdge('Tokyo', 'Aspen', 4);
g.addEdge('Tokyo', 'HK', 2);
g.addEdge('LA', 'HK', 10);
g.addEdge('Dallas', 'HK', 1);
g.addEdge('Mexico', 'Aspen', 3);
g.addEdge('Mexico', 'Dallas', 7);
g.addEdge('Mexico', 'Tokyo', 5);



const path = g.dijkstra('Mexico', 'LA')

console.log(path)