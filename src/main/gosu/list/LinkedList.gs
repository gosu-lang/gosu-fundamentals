package list

/**
 * Linked List implementation of List interface.
 * Created by barelampagos on 12/24/16.
 */
class LinkedList implements List {
  var _head : ListNode
  var _size : int

  construct() {
    _head = null
    _size = 0
  }

  /* add() - Appends specified element to the end/specified index of the list */
  function add(data : Object) : boolean {
    if (data == null) {
      return false
    } else {
      print("Inserting " + data + ".")
      var newNode = new ListNode(data)

      if (_head == null) {
        _head = newNode
      } else {
        var curr = _head

        while (curr.Next != null) {
          curr = curr.Next
        }

        curr.Next = newNode
      }
      _size++
      return true
    }
  }

  function add(index : int, data : Object) : boolean {
    // Check if given invalid data or index is not within list bounds
    if (data == null || (index > _size || index < 0)) {
      return false
    } else {
      // Check size of list to see if you can properly insert at specific index
        print("Inserting " + data + " at index " + index + ".")
        var newNode = new ListNode(data)

        if (_head == null) {
          _head = newNode
        } else if (index == 0) {
          newNode.Next = _head
          _head = newNode
        } else {
          var curr = _head
          var currIndex = 0

          while (currIndex != index - 1) {
            currIndex++
            curr = curr.Next
          }
          newNode.Next = curr.Next
          curr.Next = newNode
        }

        _size++
        this.printList()
        return true
    }
  }

  /* clear() - Removes all elements from this list */
  function clear() {
    print ("Clearing list")

    if (_head != null) {
      _head = null
      _size = 0
    }
  }

  /* contains() - Returns true if list contains the specified element */
  function contains(data : Object) : boolean {
    var curr = _head
    print ("Checking if list contains " + data)

    while (curr != null) {
      if (curr.Data == data) {
        return true
      }
      curr = curr.Next
    }

    // Element not found
    return false
  }

  /* get() - Returns the object at the specified index */
  function get(index : int) : Object {
    print ("Getting element at index " + index)
    if (index >= _size || index < 0) {
      // Invalid index
      return null
    }

    var currIndex = 0
    var curr = _head

    while (currIndex != index) {
      curr = curr.Next
      currIndex++
    }

    return curr.Data
  }

  /* indexOf() - Returns the index of the first occurrence of the specified element, or -1 if it does not exist */
  function indexOf(data : Object) : int {
    var curr = _head
    var currIndex = 0
    var resultIndex = -1
    print ("Obtaining index of " + data)

    while (curr != null) {
      if (curr.Data == data) {
        resultIndex = currIndex
      }
      curr = curr.Next
      currIndex++
    }

    print (resultIndex)
    return resultIndex
  }

  /* isEmpty() - Returns true if list is empty (contains no elements) */
  function isEmpty() : boolean {
    print ("Checking if list is empty: " + (_size == 0 && _head == null))
    return (_size == 0 && _head == null)
  }

  /* remove() - Removes first occurrence of element if it is present */
  function remove(data : Object) {
    print ("Removing from list: " + data)

    if (this.contains(data)) {

      if (_head.Data == data) {
        _head = _head.Next
        _size--
        return
      }

      var curr = _head
      var prev: ListNode = null

      while (curr.Data != data) {
        prev = curr
        curr = curr.Next
      }

      prev.Next = curr.Next
      _size--
    }
  }

  /* size() - Returns the size of the list */
  function size() : int {
    return _size
  }

  /* printList() - Helper function to print linked list */
  function printList() {
    var curr = _head
    var outputString = ""

    if (curr == null) {
      print("List is empty")
      return
    }

    while (curr != null) {
      if (curr.Next != null)
        outputString += curr.Data + " --> "
      else
        outputString += curr.Data

      curr = curr.Next
    }

    print (outputString)
  }
}