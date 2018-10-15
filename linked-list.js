// singly-linked list

let list = {
  head: {
    data: 1,
    next: {
      data: 2,
      next: {
        data: 3,
        next: {
          data: 4,
          next: {
            data: 5,
            next: null
          }
        }
      }
    }
  }
}

// doubly-linked list

let dList = {
  head: {
    data: 1,
    next: {
      data: 2,
      previous: dList.head
      next: {
        data: 3,
        previous: dList.head.next,
        next: {
          data: 4,
          previous: dList.head.next.next,
          next: {
            data: 5,
            previous: dList.head.next.next.next,
            next: null
          }
        }
      }
    }
  }
}

// circular singly-linked list

let cList = {
  head: {
    data: 1,
    next: {
      data: 2,
      next: {
        data: 3,
        next: {
          data: 4,
          next: {
            data: 5,
            next: cList.head
          }
        }
      }
    }
  }
}

// circular doubly-linked list

let cdList = {
  head: {
    data: 1,
    previous: cdList.head.next.next.next.next
    next: {
      data: 2,
      previous: cdList.head
      next: {
        data: 3,
        previous: cdList.head.next,
        next: {
          data: 4,
          previous: cdList.head.next.next,
          next: {
            data: 5,
            previous: cdList.head.next.next.next,
            next: cdList.head
          }
        }
      }
    }
  }
}

// create a class LinkedList

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };

    this.length += 1
  }

  add(value) {
    const node = { value }
    node.next = this.head
    this.head = node
    this.length++
    return this
  }

  removeFromHead() {
    if (this.length === 0) return undefined

    const value = this.head.value
    this.head = this.head.next
    this.length--
    return value
  }

  find(value) {
    let current = this.head

    while(current) {
      if (current.value === value) return current
      current = current.next
    }

    return current
  }

  remove(value) {
    if (this.length === 0) return undefined
    if (vale === this.head.value) return this.removeFromHead()

    let previous = this.head
    let current = previous.next

    while(current) {
      if (current.value === value) break

      previous = current
      current = previous.next
    }

    if (!current) return undefined
    previous.next = current.next
    this.length--
    return this
  }
}
