package binaryTrees

/**
 * Standard Tree interface.
 * Created by barelampagos on 1/4/17.
 */
interface Tree {
  /* add() - Adds an element to the tree */
  function add(data : int)

  /* remove() - Removes an element from the tree */
  function remove(data : int)

  /* find() - Returns whether or not the tree contains the specified element */
  function find(data : int) : boolean

}