const isPalindrone = (word) => {
    let letters = [], rword = "";
    for (let i in word) letters.push(word[i])
    for (let i in word) rword += letters.pop()
    if (rword === word) {
        return `${word} is palindrome.`
    } else {
        return `${word} is not palindrome.`
    }

}
// const word = "freecodecamp";
// console.log(isPalindrone(word))

/////////////////////////////////////////////////////////////////////

class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }

    push(value) {
        this.strorage[this.count] = value;
        this.count++
    }

    pop() {
        if (this.count === 0) return undefined
        this.count--
        const res = this.strorage[this.count]
        delete this.strorage[this.count]
        return res
    }
    size() {
        return this.count
    }

    peek() {
        return this.storage[this.count - 1]
    }
}

const myStack = new Stack();
console.log(myStack.storage)
myStack.push(1)
// myStack.push(2)
// console.log(myStack.peek())