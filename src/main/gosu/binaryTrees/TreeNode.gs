package binaryTrees

/**
 * TreeNode - Used in implementations of binary trees.
 * Created by barelampagos on 1/4/17.
 */
class TreeNode {
  var _data: int
  var _left: TreeNode
  var _right: TreeNode

  construct(data: int) {
    _data = data
    _left = null
    _right = null
  }

  // Getters & Setters
  property get Data() : int {
    return _data
  }
  property set Data(data : int) {
    _data = data
  }
  property get Left() : TreeNode {
    return _left
  }
  property set Left(node : TreeNode) {
    _left = node
  }
  property get Right() : TreeNode {
    return _right
  }
  property set Right(node : TreeNode) {
    _right = node
  }


}