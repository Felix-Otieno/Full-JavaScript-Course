# A O(n) python program to construct cartesian tree
# from a given array

# Define a Node class for the binary tree
class Node:
	def __init__(self, data):
		self.data = data
		self.left = None
		self.right = None

# Function to print the inorder traversal of the tree
def printInorder(node):
	if node is None:
		return
	printInorder(node.left)
	print(node.data, end=" ")
	printInorder(node.right)

# Recursive function to construct the Cartesian tree
def buildCartesianTreeUtil(root, arr, parent, leftchild, rightchild):
	# If the root index is -1, return None
	if root == -1:
		return None
	# Create a new node with the root's data
	temp = Node(arr[root])
	# Recursively construct the left and right subtrees
	temp.left = buildCartesianTreeUtil(leftchild[root], arr, parent, leftchild, rightchild)
	temp.right = buildCartesianTreeUtil(rightchild[root], arr, parent, leftchild, rightchild)
	# Return the constructed node
	return temp

# Function to construct the Cartesian tree
def buildCartesianTree(arr):
	n = len(arr)
	# Initialize arrays for parent, left child, and right child
	parent = [-1]*n
	leftchild = [-1]*n
	rightchild = [-1]*n

	# Set the root of the tree to be the first element of the input array
	root = 0
	last = None

	# Iterate through the input array, adding each element to the tree
	for i in range(1, n):
		last = i-1
		rightchild[i] = -1
		# Scan upward from the element's parent until a node is found whose value is greater than the current one
		while last != root and arr[last] <= arr[i]:
			last = parent[last]
		# If the element is the largest so far, make it the new root
		if arr[last] <= arr[i]:
			parent[root] = i
			leftchild[i] = root
			root = i
		# If there is no right child for the last node, insert the element as the right child
		elif rightchild[last] == -1:
			rightchild[last] = i
			parent[i] = last
			leftchild[i] = -1
		# Else, reconfigure the links to insert the element as the right child
		else:
			parent[rightchild[last]] = i
			leftchild[i] = rightchild[last]
			rightchild[last] = i
			parent[i] = last

	# Set the root of the tree to have no parent
	parent[root] = -1
	# Return the constructed tree
	return buildCartesianTreeUtil(root, arr, parent, leftchild, rightchild)

# Driver program to test above functions
if __name__ == '__main__':
	arr = [5, 10, 40, 30, 28]
	root = buildCartesianTree(arr)
	print('Inorder traversal of the constructed tree :')
	printInorder(root)
