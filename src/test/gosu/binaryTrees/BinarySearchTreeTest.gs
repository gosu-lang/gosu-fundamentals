package binaryTrees

uses list.*
uses org.junit.Assert
uses org.junit.Test

/**
 * Created by barelampagos on 1/4/17.
 */
class BinarySearchTreeTest {

  @Test
  function testCreateTree() {
    print("Creating a Tree")
    var tree = new BinarySearchTree()
    Assert.assertNotNull(tree)
  }

  /* The following tests use this tree:
                   20
                 /   \
                5    35
               / \
              1  10
   */

  @Test
  function testAddToTree() {
    var tree = new BinarySearchTree()
    tree.add(20)
    tree.add(5)
    tree.add(35)
    tree.add(10)
    tree.add(1)

    Assert.assertEquals("[1, 5, 10, 20, 35]", tree.toString())
  }

  @Test
  function testInOrder() {
    var tree = new BinarySearchTree()
    tree.add(20)
    tree.add(5)
    tree.add(35)
    tree.add(10)
    tree.add(1)

    Assert.assertEquals("[1, 5, 10, 20, 35]", tree.inOrder())
  }

  @Test
  function testPreOrder() {
    var tree = new BinarySearchTree()
    tree.add(20)
    tree.add(5)
    tree.add(35)
    tree.add(10)
    tree.add(1)

    Assert.assertEquals("[20, 5, 1, 10, 35]", tree.preOrder())
  }

  @Test
  function testPostOrder() {
    var tree = new BinarySearchTree()
    tree.add(20)
    tree.add(5)
    tree.add(35)
    tree.add(10)
    tree.add(1)

    Assert.assertEquals("[1, 10, 5, 35, 20]", tree.postOrder())
  }

  @Test
  function testFind() {
    var tree = new BinarySearchTree()
    tree.add(20)
    tree.add(5)
    tree.add(35)
    tree.add(10)
    tree.add(1)

    Assert.assertTrue(tree.find(20))
    Assert.assertTrue(tree.find(10))
    Assert.assertFalse(tree.find(-5))
    Assert.assertFalse(tree.find(-100))
  }

  /* Uses the tree:
            5                 5
           / \               / \
         2    18     -->    2  18
        / \                  \
      -4   3                  3
   */

  @Test
  function testRemoveNoChildren() {
    var tree = new BinarySearchTree()
    tree.add(5)
    tree.add(2)
    tree.add(18)
    tree.add(-4)
    tree.add(3)

    tree.remove(-4)
    Assert.assertEquals("[2, 3, 5, 18]", tree.toString())
  }

  /* Uses the tree:
            5                      5
           / \                   /   \
         2    18        -->     2     21
        / \     \              / \   /  \
      -4   3    21           -4  3  19  25
               /  \
              19   25
   */

  @Test
  function testRemoveOneChild() {
    var tree = new BinarySearchTree()
    tree.add(5)
    tree.add(2)
    tree.add(18)
    tree.add(-4)
    tree.add(3)
    tree.add(21)
    tree.add(19)
    tree.add(25)

    tree.remove(18)
    Assert.assertEquals("[-4, 2, 3, 5, 19, 21, 25]", tree.toString())
  }

  /* Uses the tree:
             5                        5
           /   \                    /   \
         2      12        -->     2      19
        / \    /  \              / \    /  \
      -4   3  9    21          -4   3  9    21
                 /  \                        \
                19   25                      25
   */

  @Test
  function testRemoveTwoChildren() {
    var tree = new BinarySearchTree()
    tree.add(5)
    tree.add(2)
    tree.add(12)
    tree.add(-4)
    tree.add(3)
    tree.add(9)
    tree.add(21)
    tree.add(19)
    tree.add(25)

    tree.remove(12)
    Assert.assertEquals("[-4, 2, 3, 5, 9, 19, 21, 25]", tree.toString())
  }
}