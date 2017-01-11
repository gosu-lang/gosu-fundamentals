package stackAndQueue

uses org.junit.Assert
uses org.junit.Test

/**
 * Created by barelampagos on 12/22/16.
 */
class StackTest {

  @Test
  function testConstructStack() {
    print("Creating a Stack")
    var stack = new LinkedListStack<String>()
    Assert.assertNotNull(stack)
  }

  @Test
  function testIsEmpty() {
    print("Creating a Stack")
    var stack = new LinkedListStack<Integer>()
    Assert.assertTrue(stack.isEmpty())

    stack.push(1)
    Assert.assertFalse(stack.isEmpty())

    stack.pop()
    Assert.assertTrue(stack.isEmpty())
  }

  @Test
  function testStack() {
    var stack = new LinkedListStack<Integer>()

    stack.push(1)
    stack.push(2)
    stack.push(3)

    Assert.assertEquals(3, stack.pop())
    Assert.assertEquals(2, stack.pop())
    Assert.assertEquals(1, stack.pop())
  }

  @Test
  function testPeek() {
    var stack = new LinkedListStack<Integer>()
    stack.push(1)
    stack.push(2)
    stack.push(3)

    Assert.assertEquals(3, stack.peek())
    stack.pop()
    Assert.assertEquals(2, stack.peek())
    stack.pop()
    Assert.assertEquals(1, stack.peek())
  }

  @Test
  function testSize() {
    var stack = new LinkedListStack<Integer>()
    stack.push(1)
    stack.push(0)
    stack.push(1)

    Assert.assertEquals(3, stack.size())
  }

  @Test
  function testPopStackEmpty() {
    var stack = new LinkedListStack<String>()
    Assert.assertNull(stack.pop())
  }

  @Test
  function testPeekStackEmpty() {
    var stack = new LinkedListStack<Integer>()
    Assert.assertNull(stack.peek())
  }

  @Test
  function testAddNull() {
    var stack = new LinkedListStack<Integer>()
    Assert.assertFalse(stack.push(null))
  }

}