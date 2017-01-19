package binaryTrees

/**
 * Binary Search Tree implementation of Tree interface.
 * Created by barelampagos on 1/4/17.
 * TODO: Convert to generic
 */
class BinarySearchTree implements Tree {
  var _tree : TreeNode
  var _outputList : ArrayList<Integer>  // Helper for tree traversal output

  construct() {
    _tree = null
  }

  /* add() - Adds an element to the tree */
  function add(data : int) {
    print("Adding " + data)
    _tree = add(_tree, data)
  }

  /* add() - Recursive function for node insertion */
  function add(tree : TreeNode, data : int) : TreeNode {
    // Found the proper spot to insert
    if (tree == null) {
      tree = new TreeNode(data);
      return tree
    }

    if (data < tree.Data) {
      tree.Left = add(tree.Left, data)
    } else if (data > tree.Data) {
      tree.Right = add(tree.Right, data)
    }

    return tree
  }

  /* remove() - Removes an element from the tree */
  function remove(data : int) {
     _tree = remove(_tree, data)
  }

  /* remove() - Recursive helper function for node removal */
  function remove(tree : TreeNode, data : int) : TreeNode {
    // Navigate to the node to be removed
    if (tree.Data < data) {
      tree.Right = remove(tree.Right, data)
    } else if (tree.Data > data) {
      tree.Left = remove(tree.Left, data)
    } else {

      if (tree.Left == null && tree.Right == null) {
        // No Children --> Replace with null
        tree = null
      } else if (tree.Right == null) {
        // No right child --> replace with left child
        tree = tree.Left
      } else if (tree.Left == null) {
        // No left child --> replace with right child
        tree = tree.Right
      } else {
        // Both children present --> replace with minimum of right tree
        var min = getMin(tree.Right)
        tree.Right = remove(tree.Right, min)
        tree.Data = min
      }
    }

    return tree
  }

  /* getMin() - Finds and returns the minimum value in the tree */
  function getMin(tree : TreeNode) : int {
    if (tree.Left == null) {
      return tree.Data
    } else {
      return getMin(tree.Left)
    }
  }

  /* find() - Returns whether or not the tree contains the specified element */
  function find(data : int) : boolean {
    return find(_tree, data)
  }

  /* find() - Recursive function for finding a node */
  function find(tree : TreeNode, data : int) : boolean {
    // Unable to find the data in the tree
    if (tree == null) {
      return false
    }

    // Compare data to current root's value,
    // then recursively iterate through tree
    if (data < tree.Data) {
      return find(tree.Left, data)
    } else if (data > tree.Data) {
      return find(tree.Right, data)
    } else {
      return true
    }
  }

  /* inOrder() - Returns a string of the in-order traversal of the tree */
  function inOrder() : String {
    _outputList = new ArrayList<Integer>()
    inOrder(_tree)
    return _outputList.toString()
  }

  function inOrder(tree : TreeNode) {
    if (tree != null) {
      inOrder(tree.Left)
      _outputList.add(tree.Data)
      inOrder(tree.Right)
    }
  }

  /* preOrder() - Returns a string of the pre-order traversal of the tree */
  function preOrder() : String {
    _outputList = new ArrayList<Integer>()
    preOrder(_tree)
    return _outputList.toString()
  }

  function preOrder(tree : TreeNode) {
    if (tree != null) {
      _outputList.add(tree.Data)
      preOrder(tree.Left)
      preOrder(tree.Right)
    }
  }

  /* postOrder() - Returns a string of the post-order traversal of the tree */
  function postOrder() : String {
    _outputList = new ArrayList<Integer>()
    postOrder(_tree)
    return _outputList.toString()
  }

  function postOrder(tree : TreeNode) {
    if (tree != null) {
      postOrder(tree.Left)
      postOrder(tree.Right)
      _outputList.add(tree.Data)
    }
  }

  /* toString() - Returns a string of an inOrder traversal of the tree */
  @Override
  function toString() : String {
    return inOrder()
  }

}