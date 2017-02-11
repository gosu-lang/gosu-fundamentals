package example

uses java.util.*
uses java.util.List

/**
 * Linked List implementation of java.util.List interface.
 * Created by barelampagos on 12/24/16.
 */
class LinkedList<E> implements java.util.List<E> {
  var _head : ListNode<E>
  var _tail : ListNode<E>
  var _size : int

  construct() {
    _head = null
    _tail = null
    _size = 0
  }

  /* Appends specified element to the end of the list */
  function add(e : E) : boolean {
    print("Inserting " + e + ".")
    var newNode = new ListNode<E>(e)

    if (_head == null && _tail == null) {
      _head = newNode
      _tail = newNode
    } else {
      _tail.Next = newNode
      newNode.Prev = _tail
      _tail = newNode
    }
    _size++
    return true
  }

  /* Appends specified element to the specified index in the list */
  function add(index : int, element : E) {
    // Check if index is within list bounds
    if (index >= 0 && index <= _size) {
      // Check size of list to see if you can properly insert at specific index
        print("Inserting " + element + " at index " + index + ".")
        var newNode = new ListNode<E>(element)

        // Empty list case
        if (_head == null && _tail == null) {
          _head = newNode
          _tail = newNode
        } else if (index == 0) {
          newNode.Next = _head
          _head.Prev = newNode
          _head = newNode
        } else {
          var curr = _head
          var currIndex = 0

          while (currIndex != index - 1) {
            currIndex++
            curr = curr.Next
          }
          newNode.Next = curr.Next
          newNode.Next.Prev = newNode
          newNode.Prev = curr
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

  /* Inserts all of the elements in the specified collection into this list at the specified position. */
  function addAll(index : int, c : Collection<E>) : boolean {
    // TODO: Sanity check - fix pointers for doubly linked
    var currSize = _size
    var currIndex = 0
    var curr = _head

    // Handle adding all to front (index == 0)
    if (index == 0) {
      var tempHead : ListNode<E>  // Store new head of the list
      var tempCurr : ListNode<E>  // Store current position in new list, needed to connect new list to original

      for (item in c) {
        var newNode = new ListNode<E>(item)

        if (tempHead == null) {
          tempHead = newNode
          tempCurr = tempHead
        } else {
          tempCurr.Next = newNode
          newNode.Prev = tempCurr
          tempCurr = newNode
        }
      }

      // Connect the new list to original list + update new head
      tempCurr.Next = curr
      curr.Prev = tempCurr
      _head = tempHead
    } else {
      // Navigate to index - 1
      while (currIndex < index) {
        curr = curr.Next
        currIndex++
      }

      // Store reference to second half of list
      var next = curr.Next

      /* Create a new node for each element in the collection,
       update pointers, and iterate forward */
      for (item in c) {
        var newNode = new ListNode<E>(item)
        curr.Next = newNode
        curr = newNode
      }

      // Connect new list to remaining list elements
      curr.Next = next
    }

    return (currSize != _size)
  }

  /* Removes all elements from this list */
  function clear() {
    print ("Clearing list")

    if (_head != null && _tail != null) {
      // Reset head + tail + size
      _head = null
      _tail = null
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
        if (!this.contains(item)) {
            return false
        }
    }

    // All elements in collection are in the list
    return true
  }

  /* Returns the object at the specified index */
  function get(index : int) : E {
    print ("Getting element at index " + index)
    var result : E = null

    // Verify valid index
    if (index < _size && index >= 0) {
      var currIndex = 0
      var curr = _head

      while (currIndex != index) {
        curr = curr.Next
        currIndex++
      }
      result = curr.Data
    }

    return result
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
    print ("Checking if list is empty: " + (_size == 0 && _head == null && _tail == null))
    return (_size == 0 && _head == null && _tail == null)
  }

  /* Returns an iterator over the elements in this list in proper sequence. */
  function iterator() : Iterator<E> {
    var linkedListIterator = new LinkedListIterator()
    return linkedListIterator
  }

  /* Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element. */
  function lastIndexOf(o : Object) : int {
    var curr = _tail
    var currIndex = _size - 1
    var resultIndex = -1
    print ("Obtaining index of " + o)

    // Iterate through list backwards, starting at tail
    while (curr != null) {
      if (curr.Data == o) {
        resultIndex = currIndex
      }
      curr = curr.Prev
      currIndex--
    }

    print (resultIndex)
    return resultIndex
  }

  /* Returns a list iterator over the elements in this list (in proper sequence). */
  function listIterator() : ListIterator<E> {
    var linkedListIterator = new LinkedListIterator()
    return linkedListIterator
  }

  /* Returns a list iterator over the elements in this list (in proper sequence), starting at the specified position in the list. */
  function listIterator(index : int) : ListIterator<E> {
    var start = _head
    var currIndex = 0

    while (currIndex != index) {
      currIndex++
      start = start.Next
    }

    var linkedListIterator = new LinkedListIterator(start, currIndex)
    return linkedListIterator
  }

  /* Removes the element at the specified position in this list. */
  function remove(index : int) : E {
    print ("Removing from index: " + index)

    var currIndex = 0
    var curr = _head

    // Special case for removing first element in the list
    if (index == 0) {
      _head = _head.Next
      _head.Prev = null
    } else {

      // Iterate to proper index
      while (currIndex != index) {
        curr = curr.Next
        currIndex++
      }

      // TODO: Handle edge case - removing last elem (index == size - 1)

      // Update pointers
      curr.Prev.Next = curr.Next
      curr.Next.Prev = curr.Prev
      curr.Prev = null
      curr.Next = null
    }
    _size--
    return curr.Data
  }

  /* Removes first occurrence of element if it is present */
  function remove(o : Object) : boolean {
    print ("Removing from list: " + o)

    if (this.contains(o)) {
      if (_head.Data == o) {
        _head = _head.Next
        _head.Prev = null
        _size--
        return true
      } else {

        var curr = _head

        while (curr.Data != o) {
          curr = curr.Next
        }

        // TODO: Handle edge case - removing last elem (index == size - 1)

        curr.Prev.Next = curr.Next
        curr.Next.Prev = curr.Prev
        curr.Prev = null
        curr.Next = null
        _size--
      }
    }

    return false
  }

  /* Removes from this list all of its elements that are contained in the specified collection. */
  function removeAll(c : Collection) : boolean {
    var previousSize = _size

    for (item in c) {
      this.remove(item)
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

  /* Linked List Iterator */
  class LinkedListIterator implements java.util.Iterator<E>, java.util.ListIterator<E> {
    // TODO: Fix to support doubly linked list
    var _curr : ListNode<E>
    var _previous : ListNode<E>
    var currIndex : int

    construct() {
      _curr = _head
      _previous = null
      currIndex = 0
    }

    construct(start : ListNode<E>, index : int) {
      _curr = start
      _previous = getPreviousElement(_curr)
      currIndex = index
    }

    /* Inserts the specified element into the list. */
    function add(e : E) {
      var newNode = new ListNode<E>(e)
      if (this.hasPrevious()) {
        _previous.Next = newNode
      }

      newNode.Next = _curr
      _previous = newNode
    }

    /* Returns true if this list iterator has more elements when traversing the list in the forward direction. */
    function hasNext() : boolean {
       return (_curr != null)
    }

    /* Returns true if this list iterator has more elements when traversing the list in the reverse direction. */
    function hasPrevious() : boolean {
      return (_previous != null)
    }

    /* Returns the next element in the list and advances the cursor position. */
    function next() : E {
      var result : E = null

      // Iterate forward
      if (hasNext()) {
       result = _curr.Data
        _previous = _curr
       _curr = _curr.Next
        currIndex++
      }

      return result
    }

    /* Returns the index of the element that would be returned by a subsequent call to next(). */
    function nextIndex() : int {
      return currIndex
    }

    /* Returns the previous element in the list and moves the cursor position backwards. */
    function previous() : E {
      // Store result value and update current pointer backwards
      var result = _curr.Data
      _curr = _previous
      currIndex--
      _previous = getPreviousElement(_curr)

      return result
    }

    // Helper function: Get element before current node
    function getPreviousElement(curr : ListNode<E>) : ListNode<E> {
      var temp = _head
      while (temp.Next != curr) {
        temp = temp.Next
      }

      return temp
    }

    /* Returns the index of the element that would be returned by a subsequent call to previous(). */
    function previousIndex() : int {
      return currIndex - 1
    }

    /* Removes from the list the last element that was returned by next() or previous(). */
    function remove() {
      // TODO
    }

    /* Replaces the last element returned by next() or previous() with the specified element. */
    function set(e : E) {
      // TODO
    }

  }
}