package example

uses example.ListNode
uses list.*

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

  /* add() - Appends specified element to the end/specified index of the list */
  function add(data : E) : boolean {
    print("Inserting " + data + ".")
    var newNode = new ListNode<E>(data)

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

  function add(index : int, data : E) {
    // Check if index is not within list bounds
    if (index > _size || index < 0) {
      return false
    } else {
      // Check size of list to see if you can properly insert at specific index
        print("Inserting " + data + " at index " + index + ".")
        var newNode = new ListNode<T>(data)

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

  /* Appends all of the elements in the specified collection to the end of this list,
  in the order that they are returned by the specified collection's iterator (optional operation). */
  function addAll(c : Collection<E>) : boolean {

  }

  /* Inserts all of the elements in the specified collection into this list at the specified position (optional operation). */
  function addAll(index : int, c : Collection<E>) : boolean {

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
  function contains(o : Object) : boolean {
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

  /* Returns true if this list contains all of the elements of the specified collection. */
  function containsAll(c : Collection) : boolean {

  }

  /* Compares the specified object with this list for equality. */
  function equals(o : Object) : boolean {

  }

  /* get() - Returns the object at the specified index */
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

  /* Returns the hash code value for this list. */
  function hashCode() : int {

  }

  /* indexOf() - Returns the index of the first occurrence of the specified element, or -1 if it does not exist */
  function indexOf(o : Object) : int {
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

  /* Returns an iterator over the elements in this list in proper sequence. */
  function iterator() : Iterator<E> {

  }

  /* Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element. */
  function lastIndexOf(o : Object) : int {

  }

  /* Returns a list iterator over the elements in this list (in proper sequence). */
  function listIterator() : ListIterator<E> {

  }

  /* Returns a list iterator over the elements in this list (in proper sequence), starting at the specified position in the list. */
  function listIterator(index : int) : ListIterator<E> {

  }

  /* Removes the element at the specified position in this list (optional operation). */
  function remove(index : int) : E {

  }

  /* remove() - Removes first occurrence of element if it is present */
  function remove(o : Object) : boolean {
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

  /* Removes from this list all of its elements that are contained in the specified collection (optional operation). */
  function removeAll(c : Collection) : boolean {

  }

  /* Retains only the elements in this list that are contained in the specified collection (optional operation). */
  function retainAll(c : Collection) : boolean {

  }

  /* Replaces the element at the specified position in this list with the specified element (optional operation). */
  function set(index : int, element : E) : E {

  }

  /* size() - Returns the size of the list */
  function size() : int {
    return _size
  }

  /* Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive. */
  function subList(fromIndex : int, toIndex : int) : List<E> {

  }

  /* Returns an array containing all of the elements in this list in proper sequence (from first to last element). */
  function toArray() : Object[] {

  }

  /* Returns an array containing all of the elements in this list in proper sequence (from first to last element);
  the runtime type of the returned array is that of the specified array. */
  function toArray(a : T[]) : T[] {

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