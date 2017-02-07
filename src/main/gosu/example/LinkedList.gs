package example

uses java.util.*
uses java.util.List

/**
 * Linked List implementation of java.util.List interface.
 * Created by barelampagos on 12/24/16.
 */
class LinkedList<E> implements java.util.List<E> {
  var _head : ListNode<E>
  var _size : int

  construct() {
    _head = null
    _size = 0
  }

  /* Appends specified element to the end of the list */
  function add(e : E) : boolean {
    print("Inserting " + e + ".")
    var newNode = new ListNode<E>(e)

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

  /* Appends specified element to the specified index in the list */
  function add(index : int, element : E) {
    // Check if index is not within list bounds
    if (index > _size || index < 0) {
      return
    } else {
      // Check size of list to see if you can properly insert at specific index
        print("Inserting " + element + " at index " + index + ".")
        var newNode = new ListNode<E>(element)

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
    }
  }

  /* Appends all of the elements in the specified collection to the end of this list,
  in the order that they are returned by the specified collection's iterator. */
  function addAll(c : Collection<E>) : boolean {
    for (item in c) {
        this.add(item)
    }
    return true
  }

  /* Inserts all of the elements in the specified collection into this list at the specified position (optional operation). */
  function addAll(index : int, c : Collection<E>) : boolean {
    // TODO: Implement addAll
    return true
  }

  /* Removes all elements from this list */
  function clear() {
    print ("Clearing list")

    if (_head != null) {
      // Reset list head + size
      _head = null
      _size = 0
    }
  }

  /* Returns true if list contains the specified element */
  function contains(o : Object) : boolean {
    var curr = _head
    print ("Checking if list contains " + o)

    while (curr != null) {
      if (curr.Data == o) {
        return true
      }
      curr = curr.Next
    }

    // Element not found
    return false
  }

  /* Returns true if this list contains all of the elements of the specified collection. */
  function containsAll(c : Collection) : boolean {
    // Check to see if all items are in the list
    for (item in c) {
        // Return false if we find one element not in the list
        if (!this.contains(c)) {
            return false
        }
    }

    // All elements in collection are in the list
    return true
  }

  /* Returns the object at the specified index */
  function get(index : int) : E {
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

  /* Returns the index of the first occurrence of the specified element, or -1 if it does not exist */
  function indexOf(o : Object) : int {
    var curr = _head
    var currIndex = 0
    var resultIndex = -1
    print ("Obtaining index of " + o)

    while (curr != null) {
      if (curr.Data == o) {
        resultIndex = currIndex
        break
      }
      curr = curr.Next
      currIndex++
    }

    print (resultIndex)
    return resultIndex
  }

  /* Returns true if list is empty (contains no elements) */
  property get Empty() : boolean {
    print ("Checking if list is empty: " + (_size == 0 && _head == null))
    return (_size == 0 && _head == null)
  }

  /* Returns an iterator over the elements in this list in proper sequence. */
  function iterator() : Iterator<E> {
    // TODO: Implement iterator
    return null
  }

  /* Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element. */
  function lastIndexOf(o : Object) : int {
    var curr = _head
    var currIndex = 0
    var resultIndex = -1
    print ("Obtaining index of " + o)

    while (curr != null) {
      if (curr.Data == o) {
        resultIndex = currIndex
      }
      curr = curr.Next
      currIndex++
    }

    print (resultIndex)
    return resultIndex
  }

  /* Returns a list iterator over the elements in this list (in proper sequence). */
  function listIterator() : ListIterator<E> {
    // TODO: Implement listIterator
    return null
  }

  /* Returns a list iterator over the elements in this list (in proper sequence), starting at the specified position in the list. */
  function listIterator(index : int) : ListIterator<E> {
    // TODO: Implement listIterator
    return null
  }

  /* Removes the element at the specified position in this list. */
  function remove(index : int) : E {
    print ("Removing from index: " + index)

    var currIndex = 0
    var prev : ListNode<E> = null
    var curr = _head

    // Special case for removing first element in the list
    if (index == 0) {
      _head = _head.Next
      _size--
      return curr.Data
    }

    // Iterate to proper index
    while (currIndex != index) {
      prev = curr
      curr = curr.Next
      currIndex++
    }

    // Update list + size
    prev.Next = curr.Next
    _size--
    return curr.Data

  }

  /* Removes first occurrence of element if it is present */
  function remove(o : Object) : boolean {
    print ("Removing from list: " + o)

    if (this.contains(o)) {

      if (_head.Data == o) {
        _head = _head.Next
        _size--
        return true
      }

      var curr = _head
      var prev: ListNode = null

      while (curr.Data != o) {
        prev = curr
        curr = curr.Next
      }

      prev.Next = curr.Next
      _size--
    }

    return false
  }

  /* Removes from this list all of its elements that are contained in the specified collection. */
  function removeAll(c : Collection) : boolean {
    var previousSize = _size

    for (item in c) {
      this.remove(c)
    }

    // Return if the list's size has changed as a result of the operation
    return (previousSize != _size)
  }

  /* Retains only the elements in this list that are contained in the specified collection. */
  function retainAll(c : Collection) : boolean {
    var curr = _head
    var previousSize = _size

    while (curr != null) {
      if (c.contains(curr.Data)) {
        this.remove(curr.Data)
      }
    }

    return (previousSize != _size)
  }

  /* Replaces the element at the specified position in this list with the specified element. */
  function set(index : int, element : E) : E {
    var currIndex = 0
    var curr = _head
    var result : E

    // Iterate to proper index
    while (currIndex != index) {
      curr = curr.Next
      currIndex++
    }

    // Store data at current position + replace with 'element'
    result = curr.Data
    curr.Data = element
    return result
  }

  /* size() - Returns the size of the list */
  function size() : int {
    return _size
  }

  /* Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive. */
  function subList(fromIndex : int, toIndex : int) : List<E> {
    var result = new LinkedList<E>()
    var curr = _head
    var currIndex = 0

    // Navigate to fromIndex
    while (currIndex != fromIndex) {
      curr = curr.Next
      currIndex++
    }

    // Add all elements from fromIndex (inclusive) --> toIndex (exclusive)
    while (currIndex < toIndex) {
      result.add(curr.Data)
      curr = curr.Next
      currIndex++
    }

    return result
  }

  /* Returns an array containing all of the elements in this list in proper sequence (from first to last element). */
  function toArray() : Object[] {
    var resultArray = new Object[_size]
    var curr = _head

    // Fill array with list elements
    for (i in 0..|_size) {
      resultArray[i] = curr.Data
      curr = curr.Next
    }

    return resultArray
  }

  /* Returns an array containing all of the elements in this list in proper sequence (from first to last element);
  the runtime type of the returned array is that of the specified array. */
  function toArray<T>(a : T[]) : T[] {
    var resultArray = new T[_size]
    var curr = _head

    // Fill array with list elements
    for (i in 0..|_size) {
      resultArray[i] = new T(curr.Data)
      curr = curr.Next
    }

    return resultArray
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

  /* toString() - Returns a string of the current list in the format: [X,Y,Z] */
  function toString() : String {
    var curr = _head
    var outputString = "["

    while (curr != null) {
      if (curr.Next != null)
        outputString += curr.Data + ","
      else
        outputString += curr.Data

      curr = curr.Next
    }

    outputString += "]"
    print(outputString)
    return outputString
  }
}