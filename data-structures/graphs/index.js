class Graph {
  constructor() {
    this.list = new Map();
  }

  addVertex(name) {
    this.list.set(name, new Set());
  }

  addEdge(name1, name2) {
    if (!this.list.has(name1) || !this.list.has(name2)) { return }
    const vertex1 = this.list.get(name1);
    const vertex2 = this.list.get(name2);
    vertex1.add(name2);
    vertex2.add(name1);
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
    for(const edge of [...vertex.values()]) {
      this.removeEdge(name, edge)
    }
    this.list.delete(name)
  }

  traverse_dfs(start) {
    const list = this.list;
    if (!list.has(start)) { return }
    const vertex = list.get(start);
    if(!vertex.size) { return; }
    const visited = new Set();
    visited.add(start)


    

    function helper(neighbors) {
      for(const name of neighbors) {
        if(visited.has(name)) { continue; }
        visited.add(name)
        const children = list.get(name);
        if(!children.size) { return; }
        helper([...children])
      }
    }

    helper([...vertex]);
    console.log(visited)
  }

  iterate_dfs(start) {
    const list = this.list;
    if (!list.has(start)) { return }
    const stack = [start]
    const visited = new Set();
    
    visited.add(start)

    while(stack.length) {
      const name = stack.pop();
      const vertex = list.get(name)
      for(const neighbor of vertex) {
        if(visited.has(neighbor)) { continue; }
        visited.add(neighbor)
        stack.push(neighbor)
      }
    }

    console.log(visited)
  }
}

let g = new Graph();
g.addVertex('Dallas')
g.addVertex('Tokyo')
g.addVertex('Aspen')
g.addVertex('LA')
g.addVertex('Hong kong')

g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Tokyo', 'Aspen');
g.addEdge('Tokyo', 'Hong kong');
g.addEdge('LA', 'Hong kong');
g.addEdge('Dallas', 'Hong kong');

g.iterate_dfs('LA');
g.traverse_dfs('LA');
