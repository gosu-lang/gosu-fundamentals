package binaryTrees

/**
 * Created by barelampagos on 1/4/17.
 */
interface Tree {
  /* add() - Adds an element to the tree */
  function add(data : int)

  /* remove() - Removes an element from the tree */
  function remove(data : int)

  /* find() - Returns whether or not the tree contains the specified element */
  function find(data : int) : boolean

  /* inOrder() - Returns a string of the in-order traversal of the tree */
  function inOrder() : String

  /* preOrder() - Returns a string of the pre-order traversal of the tree */
  function preOrder() : String

  /* postOrder() - Returns a string of the post-order traversal of the tree */
  function postOrder() : String
}