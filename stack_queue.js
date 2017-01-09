function errorCheck(value) {
  if (!value) return "Sorry, your operation is invalid"
    else return value
}

function Stack() {
  this.array = []
}

Stack.prototype.push = function(value){
  this.array.push(value)
}
Stack.prototype.pop = function(){
  return errorCheck(this.array.pop())
}
Stack.prototype.peek = function(){
  return errorCheck(this.array[this.array.length-1])
}


// stack = new Stack;
// stack.push("tom");
// stack.push("dick");
// stack.push("harry");
// console.log(stack.peek())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.peek())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.peek())


function Queue(){
  this.array = []
}

Queue.prototype.add = function(value) {
  this.array.push(value)
}
Queue.prototype.remove = function() {
  return errorCheck(this.array.splice(0,1)[0])
}
Queue.prototype.peek = function() {
  return errorCheck(this.array[0])
}

// queue = new Queue;
// queue.add("tom");
// queue.add("dick");
// queue.add("harry");
// console.log(queue.peek())
// console.log(queue.remove())
// console.log(queue.remove())
// console.log(queue.peek())
// console.log(queue.remove())
// console.log(queue.remove())
// console.log(queue.peek())

function Deque(){
  this.array = []
}
// no add method as functionally same as push
Deque.prototype.remove = function() {
  return errorCheck(this.array.splice(0,1)[0])
}
Deque.prototype.push = function(value){
  this.array.push(value)
}
Deque.prototype.pop = function(){
  return errorCheck(this.array.pop())
}
Deque.prototype.peekStart = function() {
  return errorCheck(this.array[0])
}
Deque.prototype.peekEnd = function(){
  return errorCheck(this.array[this.array.length-1])
}

let deque = new Deque();

// deque.push("tom")
// deque.push("dick")
// deque.push("harry")
// console.log(deque.peekStart())
// console.log(deque.peekEnd())
// console.log(deque.pop())
// console.log(deque.remove())
// console.log(deque.peekStart())
// console.log(deque.peekEnd())
// console.log(deque.remove())
// console.log(deque.remove())
// console.log(deque.peekEnd())

