package list

/**
 * Standard List interface.
 * Created by barelampagos on 12/24/16.
 */
interface List<T> {
  /* add() - Appends specified element to the end/specified index of the list */
  function add(data : T) : boolean
  function add(index : int, data : T) : boolean

  /* clear() - Removes all elements from this list */
  function clear()

  /* contains() - Returns true if list contains the specified element */
  function contains(data : T) : boolean

  /* get() - Returns the object at the specified index */
  function get(index : int) : T

  /* indexOf() - Returns the index of the first occurrence of the specified element, or -1 if it does not exist */
  function indexOf(data : T) : int

  /* isEmpty() - Returns true if list is empty (contains no elements) */
  function isEmpty() : boolean

  /* remove() - Removes first occurrence of element if it is present */
  function remove(data : T)

  /* size() - Returns the size of the list */
  function size() : int
}