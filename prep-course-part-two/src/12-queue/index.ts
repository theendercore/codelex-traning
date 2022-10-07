/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

class Queue {
  private queue: any[] = [];
  add(n: number) {
    this.queue.push(n);
  }

  remove() {
    let val = this.queue[0];
    this.queue.shift();
    return val;
  }
}

export { Queue };
