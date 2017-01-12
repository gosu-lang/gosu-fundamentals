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
}