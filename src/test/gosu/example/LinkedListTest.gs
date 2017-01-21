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
  function testClear() {
    var list = new LinkedList<Integer>()

    for (i in 0..4) {
      list.add(i)
    }

    list.clear()

    Assert.assertTrue(list.isEmpty())
    Assert.assertEquals(0, list.size())
  }

  @Test
  function testIndexOf() {
    var list = new LinkedList<Integer>()

    for (i in 0..4) {
      list.add(i)
    }

    Assert.assertEquals(3, list.indexOf(3))
    Assert.assertEquals(2, list.indexOf(2))
    Assert.assertEquals(-1, list.indexOf(14))
  }

  @Test
  function testRemove() {
    var list = new LinkedList<Integer>()

    for (i in 0..4) {
      list.add(i)
    }

    list.remove(4)
    list.remove(2)
    list.remove(0)
    list.remove(1)
    list.remove(3)

    Assert.assertTrue(list.isEmpty())
    Assert.assertEquals(0, list.size())
  }

  @Test
  function testAddAtIndex() {
    var list = new LinkedList<Integer>()

    Assert.assertTrue(list.add(0, 2))
    Assert.assertTrue(list.add(1, 4))
    Assert.assertTrue(list.add(2, 5))
    Assert.assertTrue(list.add(0, 1))
    Assert.assertTrue(list.add(2, 3))

    Assert.assertFalse(list.add(100, 100))
    Assert.assertFalse(list.add(-10, -10))

    Assert.assertEquals(0, list.indexOf(1))
    Assert.assertEquals(1, list.indexOf(2))
    Assert.assertEquals(2, list.indexOf(3))
    Assert.assertEquals(3, list.indexOf(4))
    Assert.assertEquals(4, list.indexOf(5))
  }

  @Test
  function testAddNullValue() {
    var list = new LinkedList<String>()

    list.add("First Element")
    list.add(null);
    list.add("Third Element")

    Assert.assertTrue(list.contains(null))
    Assert.assertNull(list.get(list.indexOf(null)))
  }

  @Test
  function testToString() {
    var stringList = new LinkedList<String>()
    stringList.add("A")
    stringList.add("B")
    stringList.add("C")

    Assert.assertEquals("[A,B,C]", stringList.toString())

    var intList = new LinkedList<Integer>()
    intList.add(1)
    intList.add(2)
    intList.add(3)

    Assert.assertEquals("[1,2,3]", intList.toString())

    var emptyList = new LinkedList<String>()

    Assert.assertEquals("[]", emptyList.toString())
  }

}