// A binary tree node
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Inorder traversal of the tree
function printInorder(node) {
    if (node == null) return;
    printInorder(node.left);
    console.log(node.data); // Print node data
    printInorder(node.right);
}

// Recursively construct the Cartesian Tree
function buildCartesianTreeUtil(root, arr, parent, leftchild, rightchild) {
    if (root === -1) return null;

    // Create a new node with root's data
    let temp = new Node(arr[root]);

    // Recursively construct left and right subtrees
    temp.left = buildCartesianTreeUtil(leftchild[root], arr, parent, leftchild, rightchild);
    temp.right = buildCartesianTreeUtil(rightchild[root], arr, parent, leftchild, rightchild);

    return temp;
}

// Create the Cartesian Tree
function buildCartesianTree(arr, n) {
    if (n === 0) return null;

    let parent = Array(n).fill(-1);
    let leftchild = Array(n).fill(-1);
    let rightchild = Array(n).fill(-1);

    let root = 0, last;

    for (let i = 1; i < n; i++) {
        last = i - 1;
        rightchild[i] = -1;

        while (arr[last] <= arr[i] && last !== root) {
            last = parent[last];
        }

        if (arr[last] <= arr[i]) {
            parent[root] = i;
            leftchild[i] = root;
            root = i;
        } else if (rightchild[last] === -1) {
            rightchild[last] = i;
            parent[i] = last;
            leftchild[i] = -1;
        } else {
            parent[rightchild[last]] = i;
            leftchild[i] = rightchild[last];
            rightchild[last] = i;
            parent[i] = last;
        }
    }

    parent[root] = -1;
    return buildCartesianTreeUtil(root, arr, parent, leftchild, rightchild);
}

// Driver code
let arr = [5, 10, 40, 30, 28];
let n = arr.length;

let root = buildCartesianTree(arr, n);

console.log("Inorder traversal of the constructed tree:");
printInorder(root);
