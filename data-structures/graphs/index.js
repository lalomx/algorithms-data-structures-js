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
    console.log('re')
    if (!this.list.has(name)) { return }
    
    const vertex = this.list.get(name);
    for(const edge of [...vertex.values()]) {
      this.removeEdge(name, edge)
    }
    this.list.delete(name)
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

g.removeVertex('Hong kong')
console.log(g)