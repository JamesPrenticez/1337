class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;

  while (head) {
      let ele = head.next;
      head.next = prev;
      prev = head;
      head = ele;
  }
  return prev;
}


// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Function to print linked list
function printList(head: ListNode | null): void {
  let current = head;
  const values = [];
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  console.log(values.join(" -> "));
}

// Print original linked list
console.log("Original linked list:");
printList(head);

// Reverse the linked list
const newHead = reverseList(head);

// Print reversed linked list
console.log("Reversed linked list:");
printList(newHead);