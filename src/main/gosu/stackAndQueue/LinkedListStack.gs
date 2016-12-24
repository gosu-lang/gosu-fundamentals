package stackAndQueue

/**
 * Linked List implementation of the Stack interface.
 * Created by barelampagos on 12/15/16.
 */
class LinkedListStack implements Stack {
  var _head : ListNode
  var _size : int

  construct() {
    _head = null
    _size = 0
  }
  /* isEmpty() - Returns whether or not the stack is empty */
  function isEmpty() : boolean {
    return (_head == null)
  }

  /* peek() - Returns the value at the top of the stack without removing it */
  function peek() : Object {
    if (_head != null) {
//      print ("Peek: " + _head.Data)
      return _head.Data
    }

    return null
  }

  /* pop() - Removes the object at the top of the stack, returns that value */
  function pop() : Object {
    var node = _head
//    print ("Popping")

    if (node != null) {
      _head = node.Next
      if (_size > 0) {
        _size--
      }

      return node.Data
    }

    return null
  }

  /* push(data : Object) - Adds a new Object to the top of the stack */
  function push(data : Object) : boolean {
    if (data == null) {
      return false
    }

//    print ("Pushing " + data)

    var node = new ListNode(data)
    node.Next = _head
    _head = node
    _size++

    return true
  }

  /* size() - Returns current size of stack */
  function size() : int {
    return _size
  }


  /* printStack() - Helper function. Prints stack. */
  function printStack() {
    var curr = _head
    if (curr == null) {
      print ("Stack is empty.")
      return
    }

    while (curr != null) {
      print (curr.Data)
      print ("---")
      curr = curr.Next
    }
  }

}