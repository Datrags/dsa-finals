class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    let temp = this.root;
    if (temp === null){
      this.root = newNode;
      return this;
    } 


    while (temp) {
      if (val < temp.val) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      }
      else {
          if (temp.right === null) {
            temp.right = newNode;
            return this;
          }
          temp = temp.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node=this.root) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
  
    if (val < node.val) {
        if (!node.left) {
            node.left = newNode;
        } else {
            this.insertRecursively(val, node.left);
        }
    } else {
        if (!node.right) {
            node.right = newNode;
        } else {
            this.insertRecursively(val, node.right);
        }
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) {
      return;
    }
    if (this.root.val === val) {
      return this.root;
    }
    let temp = this.root;

    while (temp) {
      if (temp.val === val) return temp;
      if (val < temp.val) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
      
    }
    return;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node=this.root) {
    if (!node) {
      return;
    }
    if (node.val === val) return node;
    if (val < node.val) {
      return this.findRecursively(val, node.left);
    } else {
      return this.findRecursively(val, node.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. 
   * Pre Order - Recursively visit the left side then the right side*/

  dfsPreOrder() {
    let result = [];

    function traverse(node) {
      if (!node) return; //if null return
      result.push(node.val);
      //traverse left side
      traverse(node.left);
      //traverse right side
      traverse(node.right);
    }

    traverse(this.root);
    return result;
   }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. 
   * 
   * In Order - Left -> Node -> Right (Ascending Order)
   * */

  dfsInOrder() {
    let result = [];

    function traverse(node) {
      if (!node) return; //if null return
      //traverse left side
      traverse(node.left);
      //push value 
      result.push(node.val);
      //traverse right side
      traverse(node.right);
    }

    traverse(this.root);
    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. 
   * Post Order - Left -> right-> node*/

  dfsPostOrder() {
    let result = [];

    function traverse(node) {
      if (!node) return; //if null return
      //traverse left side
      traverse(node.left);
      //traverse right side
      traverse(node.right);
      //push value of current node
      result.push(node.val);
    }

    traverse(this.root);
    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [];
    let result = [];

    if (this.root) {
      queue.push(this.root)
    }

    //while the queue is not empty
    while(queue.length > 0) {
      //remove front node
      const node = queue.shift();
      //push node to result
      result.push(node.val);
      //add left and right nodes if they exist.
      if (node.left)
        queue.push(node.left)
      if (node.right)
        queue.push(node.right);
    }

    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
