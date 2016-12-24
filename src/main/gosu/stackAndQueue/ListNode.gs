package stackAndQueue

/**
 * Created by bryanrelampagos on 12/15/16.
 */
class ListNode {
  var _data: Object
  var _next: ListNode

  construct(data: Object) {
    _data = data
    _next = null
  }

  // Getters & Setters
  property get Data() : Object {
    return _data
  }
  property set Data(data : Object) {
    _data = data
  }
  property get Next() : ListNode { return _next }
  property set Next(next : ListNode) { _next = next }

}