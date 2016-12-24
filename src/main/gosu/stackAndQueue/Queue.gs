package stackAndQueue

/**
 * Standard Queue interface.
 * Created by barelampagos on 12/15/16.
 */
interface Queue {
  /* isEmpty() - Returns whether or not the queue is empty */
  function isEmpty() : boolean

  /* peek() - Returns the value at the front of the queue without removing it */
  function peek() : Object

  /* remove() - Removes the object at the front of the queue, returns that value */
  function remove() : Object

  /* add(data : Object) - Adds a new Object to the end of the queue */
  function add(data : Object) : boolean

  /* size() - Returns current size of queue */
  function size() : int
}
