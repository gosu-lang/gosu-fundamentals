package list

/**
 * Standard List interface.
 * Created by barelampagos on 12/24/16.
 */
interface List {
  /* add() - Appends specified element to the end/specified index of the list */
  function add(data : Object) : boolean
  function add(index : int, data : Object) : boolean

  /* clear() - Removes all elements from this list */
  function clear()

  /* contains() - Returns true if list contains the specified element */
  function contains(data : Object) : boolean

  /* get() - Returns the object at the specified index */
  function get(index : int) : Object

  /* indexOf() - Returns the index of the first occurrence of the specified element, or -1 if it does not exist */
  function indexOf(data : Object) : int

  /* isEmpty() - Returns true if list is empty (contains no elements) */
  function isEmpty() : boolean

  /* remove() - Removes first occurrence of element if it is present */
  function remove(data : Object)

  /* size() - Returns the size of the list */
  function size() : int
}