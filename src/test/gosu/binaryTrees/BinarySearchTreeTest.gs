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
    var tree = new BinarySearchTree<String>()
    Assert.assertNotNull(tree)
  }

  /* BinarySearchTree<Integer> Tests */

  /* The following tests use this tree:
                   20
                 /   \
                5    35
               / \
              1  10
   */

  @Test
  function testAddToTreeInteger() {
    var tree = new BinarySearchTree<Integer>()
    tree.add(20)
    tree.add(5)
    tree.add(35)
    tree.add(10)
    tree.add(1)

    Assert.assertEquals("[1, 5, 10, 20, 35]", tree.toString())
  }

  @Test
  function testInOrderInteger() {
    var tree = new BinarySearchTree<Integer>()
    tree.add(20)
    tree.add(5)
    tree.add(35)
    tree.add(10)
    tree.add(1)

    Assert.assertEquals("[1, 5, 10, 20, 35]", tree.inOrder())
  }

  @Test
  function testPreOrderInteger() {
    var tree = new BinarySearchTree<Integer>()
    tree.add(20)
    tree.add(5)
    tree.add(35)
    tree.add(10)
    tree.add(1)

    Assert.assertEquals("[20, 5, 1, 10, 35]", tree.preOrder())
  }

  @Test
  function testPostOrderInteger() {
    var tree = new BinarySearchTree<Integer>()
    tree.add(20)
    tree.add(5)
    tree.add(35)
    tree.add(10)
    tree.add(1)

    Assert.assertEquals("[1, 10, 5, 35, 20]", tree.postOrder())
  }

  @Test
  function testFindInteger() {
    var tree = new BinarySearchTree<Integer>()
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
  function testRemoveNoChildrenInteger() {
    var tree = new BinarySearchTree<Integer>()
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
  function testRemoveOneChildInteger() {
    var tree = new BinarySearchTree<Integer>()
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
  function testRemoveTwoChildrenInteger() {
    var tree = new BinarySearchTree<Integer>()
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

  /* BinarySearchTree<String> Tests */

  /* The following tests use this tree:
                  dog
                 /   \
               bat    rat
               / \
             ant  cat
   */

  @Test
  function testAddToTreeString() {
    var tree = new BinarySearchTree<String>()
    tree.add("dog")
    tree.add("bat")
    tree.add("ant")
    tree.add("cat")
    tree.add("rat")

    Assert.assertEquals("[ant, bat, cat, dog, rat]", tree.toString())
  }

  @Test
  function testInOrderString() {
    var tree = new BinarySearchTree<String>()
    tree.add("dog")
    tree.add("bat")
    tree.add("ant")
    tree.add("cat")
    tree.add("rat")

    Assert.assertEquals("[ant, bat, cat, dog, rat]", tree.inOrder())
  }

  @Test
  function testPreOrderString() {
    var tree = new BinarySearchTree<String>()
    tree.add("dog")
    tree.add("bat")
    tree.add("ant")
    tree.add("cat")
    tree.add("rat")

    Assert.assertEquals("[dog, bat, ant, cat, rat]", tree.preOrder())
  }

  @Test
  function testPostOrderString() {
    var tree = new BinarySearchTree<String>()
    tree.add("dog")
    tree.add("bat")
    tree.add("ant")
    tree.add("cat")
    tree.add("rat")

    Assert.assertEquals("[ant, cat, bat, rat, dog]", tree.postOrder())
  }

  @Test
  function testFindString() {
    var tree = new BinarySearchTree<String>()
    tree.add("dog")
    tree.add("bat")
    tree.add("ant")
    tree.add("cat")
    tree.add("rat")

    Assert.assertTrue(tree.find("dog"))
    Assert.assertTrue(tree.find("cat"))
    Assert.assertFalse(tree.find("lion"))
    Assert.assertFalse(tree.find("zebra"))
  }

  /* Uses the tree:
             dog              dog
           /    \             / \
         bat    zebra -->  bat  zebra
        /   \                 \
      ape   cat                cat
   */

  @Test
  function testRemoveNoChildrenString() {
    var tree = new BinarySearchTree<String>()
    tree.add("dog")
    tree.add("bat")
    tree.add("zebra")
    tree.add("ape")
    tree.add("cat")

    tree.remove("ape")
    Assert.assertEquals("[bat, cat, dog, zebra]", tree.toString())
  }

  /* Uses the tree:
           dog                     dog
           / \                   /     \
        bat   elk        -->   bat      goat
        / \     \              / \      /  \
      ape  cat  goat         ape  cat  fox  zebra
                /  \
              fox   zebra
   */

  @Test
  function testRemoveOneChildString() {
    var tree = new BinarySearchTree<String>()
    tree.add("dog")
    tree.add("bat")
    tree.add("elk")
    tree.add("ape")
    tree.add("cat")
    tree.add("goat")
    tree.add("fox")
    tree.add("zebra")

    tree.remove("elk")
    Assert.assertEquals("[ape, bat, cat, dog, fox, goat, zebra]", tree.toString())
  }

  /* Uses the tree:
            goat                         goat
           /     \                    /        \
        bat       owl        -->     bat         pig
        / \     /     \             /  \       /    \
     ape  cat  hawk   yak          ape  cat  hawk    yak
                      /  \                             \
                    pig   zebra                         zebra
   */

  @Test
  function testRemoveTwoChildrenString() {
    var tree = new BinarySearchTree<String>()
    tree.add("goat")
    tree.add("bat")
    tree.add("owl")
    tree.add("ape")
    tree.add("cat")
    tree.add("hawk")
    tree.add("yak")
    tree.add("pig")
    tree.add("zebra")

    tree.remove("owl")
    Assert.assertEquals("[ape, bat, cat, goat, hawk, pig, yak, zebra]", tree.toString())
  }
}