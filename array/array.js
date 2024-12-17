const numData = [73, 233, 23, 97, 73, 29, 90, 25, 69, 83]

// Array traversing
for (let i = 0; i < numData.length; i++) {
    console.log(i)
}

// Array Accessing
console.log(numData[3])

//Insert
let insertNum = [1, 2, 3, 4, 5, 7]
let postion = 3
for (let i = insertNum.length - 1; i >= 0; i--) {
    if (i >= postion) {
        insertNum[i + 1] = insertNum[i]
        if (i == postion) {
            insertNum[i] = 24
        }
    }
}
// insertNum.splice(0, 1, 399)
console.log(insertNum)



