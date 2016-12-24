package stackAndQueue

uses org.junit.Assert
uses org.junit.Test

/**
 * Created by barelampagos on 12/22/16.
 */
class QueueTest {
  @Test
  function test_constructQueue() {
    print("Creating a Queue")
    var queue = new LinkedListQueue()
    Assert.assertNotNull(queue)
  }

  @Test
  function testIsEmpty() {
    var queue = new LinkedListQueue()
    Assert.assertTrue(queue.isEmpty())

    queue.add(1)
    Assert.assertFalse(queue.isEmpty())

    queue.remove()
    Assert.assertTrue(queue.isEmpty())
  }

  @Test
  function testQueue() {
    var queue = new LinkedListQueue()

    queue.add(1)
    queue.add(2)
    queue.add(3)

    Assert.assertEquals(1, queue.remove())
    Assert.assertEquals(2, queue.remove())
    Assert.assertEquals(3, queue.remove())
  }

  @Test
  function testPeek() {
    var queue = new LinkedListQueue()
    queue.add(1)
    queue.add(2)
    queue.add(3)

    Assert.assertEquals(1, queue.peek())
    queue.remove()
    Assert.assertEquals(2, queue.peek())
    queue.remove()
    Assert.assertEquals(3, queue.peek())
  }

  @Test
  function testSize() {
    var queue = new LinkedListQueue()
    queue.add(1)
    queue.add(0)
    queue.add(1)

    Assert.assertEquals(3, queue.size())

    queue.remove()
    queue.remove()
    queue.remove()
    queue.remove()

    Assert.assertEquals(0, queue.size())
  }

  @Test
  function testPopQueueEmpty() {
    var queue = new LinkedListQueue()
    Assert.assertNull(queue.remove())
  }

  @Test
  function testPeekQueueEmpty() {
    var queue = new LinkedListQueue()
    Assert.assertNull(queue.peek())
  }

  @Test
  function testAddNull() {
    var queue = new LinkedListQueue()
    Assert.assertFalse(queue.add(null))
  }

}