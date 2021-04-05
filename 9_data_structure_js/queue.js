class Queue {
    constructor(){
        this.collection = []
    }
    enque(val){
        this.collection.push(val)
    }
    deque(){
        return this.collection.shift()
    }
    front(){
        return this.collection[0]
    }
    size(){
        return this.collection.length
    }
    isEmpty(){
        return this.collection.length===0
    }
}

const myQueue = new Queue
myQueue.enque(1)
myQueue.enque(2)
myQueue.enque(3)
myQueue.deque()
console.log(myQueue)