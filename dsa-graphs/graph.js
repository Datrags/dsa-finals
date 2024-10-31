class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (const vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    if (this.nodes.has(v1) && this.nodes.has(v2)) {
      //add v2 to v1 adjacent 
      v1.adjacent.add(v2);
      //add v1 to v2 adjacent 
      v2.adjacent.add(v1);
    }
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    if (this.nodes.has(v1) && this.nodes.has(v2)) {
      v1.adjacent.delete(v2); // Remove v2 from v1's adjacent set
      v2.adjacent.delete(v1); // Remove v1 from v2's adjacent set (for undirected graph)
    } 
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    // Check if the vertex exists in the graph
    if (this.nodes.has(vertex)) {
      // Remove the vertex from all adjacent vertices' adjacency lists
      for (const adjacent of vertex.adjacent) {
          adjacent.adjacent.delete(vertex); // Remove the vertex from the adjacent node's list
      }
      this.nodes.delete(vertex); // Finally, remove the vertex from the graph's nodes
  } 
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const visited = new Set(); // Keep track of visited nodes
    const result = []; // Array to hold the values of visited nodes

    const dfs = (node) => {
        if (!node || visited.has(node)) return; // If node is null or already visited, return
        visited.add(node); // Mark the node as visited
        result.push(node.value); // Add the node's value to the result

        // Recursively visit all adjacent nodes
        for (const adjacent of node.adjacent) {
            dfs(adjacent);
        }
    };

    dfs(start); // Start the DFS from the given starting node
    return result; // Return the array of visited node values
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const visited = new Set(); // Keep track of visited nodes
    const result = []; // Array to hold the values of visited nodes
    const queue = [start]; // Initialize the queue with the starting node

    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue the first node
        if (!node || visited.has(node)) continue; // If node is null or already visited, skip

        visited.add(node); // Mark the node as visited
        result.push(node.value); // Add the node's value to the result

        // Enqueue all adjacent nodes that have not been visited
        for (const adjacent of node.adjacent) {
            if (!visited.has(adjacent)) {
                queue.push(adjacent);
            }
        }
    }

    return result; // Return the array of visited node values
  }
}

module.exports = {Graph, Node}