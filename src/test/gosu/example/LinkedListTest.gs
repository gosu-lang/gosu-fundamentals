package example
uses example.*
uses org.junit.Assert
uses org.junit.Test

/**
 * Created by barelampagos on 12/24/16.
 */
class LinkedListTest {

  @Test
  function testConstructList() {
    print("Creating a Linked List")
    var list = new LinkedList<String>()
    Assert.assertNotNull(list)
  }

  @Test
  function testIsEmpty() {
    var list = new LinkedList<String>()
    Assert.assertTrue(list.isEmpty())
    list.add("Some Data")
    Assert.assertFalse(list.isEmpty())
  }

  @Test
  function testAddAndGet() {
    var list = new LinkedList<Integer>()

    for (i in 0..4) {
      list.add(i)
    }

    Assert.assertEquals(5, list.size())

    for (i in 0..4) {
      Assert.assertEquals(i, list.get(i))
    }
  }

  @Test
  function testAddAtIndex() {
    var list = new LinkedList<Integer>()

    // Initial Values: [2 <--> 4 <--> 5]
    list.add(2)
    list.add(4)
    list.add(5)

    // Adding to the front of the list - [1 <--> 2 <--> 4 <--> 5]
    list.add(0, 1)

    // Adding to middle of the list - [1 <--> 2 <--> 3 <--> 4 <--> 5]
    list.add(2, 3)

    // Adding to end of the list - [1 <--> 2 <--> 3 <--> 4 <--> 5 <--> 6]
    list.add(5, 6)

    // Adding to invalid index
    list.add(-1, -1)
    list.add(100, 100)

    Assert.assertEquals("[1,2,3,4,5,6]", list.toString())
  }

  @Test
  function testAddAll() {
    var list = new LinkedList<String>()
    var arrayList = new ArrayList<String>()

    arrayList.add("ape")
    arrayList.add("box")
    arrayList.add("car")
    arrayList.add("dog")

    Assert.assertTrue(list.addAll(arrayList))
    Assert.assertEquals("[ape,box,car,dog]", list.toString())

    var emptyList = new ArrayList<String>()
    Assert.assertFalse(list.addAll(emptyList))
  }

  @Test
  function testClear() {
    var list = new LinkedList<Integer>()

    for (i in 0..4) {
      list.add(i)
    }

    Assert.assertEquals(5, list.size())
    list.clear()
    Assert.assertEquals(0, list.size())
  }

  @Test
  function testContains() {
    var list = new LinkedList<Integer>()

    for (i in 0..4) {
      list.add(i)
    }

    Assert.assertTrue(list.contains(0))
    Assert.assertTrue(list.contains(3))

    Assert.assertFalse(list.contains(30))
    Assert.assertFalse(list.contains("Four"))
  }

  @Test
  function testIndexOf() {
    var list = new LinkedList<Integer>()

    for (i in 0..9) {
      list.add(i)
    }

    for (i in 0..9) {
      Assert.assertEquals(i, list.indexOf(i))
    }

    Assert.assertEquals(-1, list.indexOf("Word"))
    Assert.assertEquals(-1, list.indexOf(100))
  }

  @Test
  function testLastIndexOf() {
    var list = new LinkedList<Integer>()

    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (i in 0..9) {
      list.add(i)
    }

    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 4]
    list.add(0)
    list.add(4)

    Assert.assertEquals(11, list.lastIndexOf(4))
    Assert.assertEquals(10, list.lastIndexOf(0))
    Assert.assertEquals(-1, list.lastIndexOf(10))
    Assert.assertEquals(-1, list.lastIndexOf(20))
  }

  /* TODO: Write tests for:
      remove(),
      remove(index),
      removeAll(c),
      retainAll(),
      set(),
      subList(),
      toArray(),
      toArray<T>()

      TODO: Write tests for: Iterator + List iterator
  */


}