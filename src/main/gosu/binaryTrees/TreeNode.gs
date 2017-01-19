package binaryTrees

/**
 * TreeNode - Used in implementations of binary trees.
 * Created by barelampagos on 1/4/17.
 */
class TreeNode<T> {
  var _data: T
  var _left: TreeNode<T>
  var _right: TreeNode<T>

  construct(data: T) {
    _data = data
    _left = null
    _right = null
  }

  // Getters & Setters
  property get Data() : T {
    return _data
  }
  property set Data(data : T) {
    _data = data
  }
  property get Left() : TreeNode<T> {
    return _left
  }
  property set Left(node : TreeNode<T>) {
    _left = node
  }
  property get Right() : TreeNode<T> {
    return _right
  }
  property set Right(node : TreeNode<T>) {
    _right = node
  }


}