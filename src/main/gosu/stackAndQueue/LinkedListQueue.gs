package stackAndQueue

/**
 * Linked List implementation of the Queue interface.
 * Created by barelampagos on 12/15/16.
 */
class LinkedListQueue implements Queue {
  var _head : ListNode
  var _tail : ListNode
  var _size : int

  construct() {
    _head = null
    _tail = null
    _size = 0
  }

  /* isEmpty() - Returns whether or not the queue is empty */
  function isEmpty() : boolean {
    return (_head == null && _tail == null)
  }

  /* peek() - Returns the value at the front of the queue without removing it */
  function peek() : Object {
    if (_head != null) {
      return _head.Data
    }
    return null
  }

  /* remove() - Removes the object at the front of the queue, returns that value */
  function remove() : Object {
    var node = _head
//    print ("Removing")

    if (node != null) {
      _head = _head.Next
      _size--

      if (_head == null) {
        _tail = null
      }

      return node.Data
    }

    return null
  }

  /* add(data : Object) - Adds a new Object to the end of the queue */
  function add(data : Object) : boolean {

    if (data == null) {
      return false
    }

//    print("Adding " + data)
    var node = new ListNode(data)

    if (_head == null && _tail == null) {
      _head = node
      _tail = node
    } else {
      _tail.Next = node
      _tail = node
    }
    _size++

    return true
  }

  /* size() - Returns current size of stack */
  function size() : int {
    return _size
  }

}