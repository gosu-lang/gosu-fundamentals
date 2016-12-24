package stackAndQueue

/**
 * Standard Stack interface.
 * Created by barelampagos on 12/15/16.
 */
interface Stack {
  /* isEmpty() - Returns whether or not the stack is empty */
  function isEmpty() : boolean

  /* peek() - Returns the value at the top of the stack without removing it */
  function peek() : Object

  /* pop() - Removes the object at the top of the stack, returns that value */
  function pop() : Object

  /* push(data : Object) - Adds a new Object to the top of the stack. */
  function push(data : Object) : boolean

  /* size() - Returns current size of stack */
  function size() : int
}