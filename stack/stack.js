// FILO - First in last out
// LIFO - Last in first out

//Operation only on top

//pop push

let newArr = [];
let maxSize = 5;
let currentSize = newArr.length

function customPush(value) {
    if (currentSize >= maxSize) {
        console.log("Stack is full")
    } else {
        newArr[currentSize] = value
        currentSize += 1

    }
}

function customPop() {
    if (currentSize > 0) {
        currentSize -= 1
        newArr.length = currentSize
    }
}

customPush(9)
customPush(3)
customPush(4)
customPop()
console.log(newArr)