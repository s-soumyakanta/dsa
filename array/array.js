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
console.log("ss", insertNum)

//Delete
let arrayForDeleteElement = [10, 20, 30, 40, 50]
console.log("xxxxxxx", arrayForDeleteElement.length)
let deletePosition = 3
for (let i = deletePosition; i < arrayForDeleteElement.length - 1; i++) {
    arrayForDeleteElement[i] = arrayForDeleteElement[i + 1]
}
arrayForDeleteElement.length = arrayForDeleteElement.length - 1
console.log(arrayForDeleteElement)

//Search - Linear Search - One by one search

const searchArray = [49, 29, 99, 73, 92, 48, 29, 57, 83, 64, 72]

const itemToSearch = 48

for (let i = 0; i < searchArray.length - 1; i++) {
    if (searchArray[i] === itemToSearch) {
        console.log(`The search item ${itemToSearch} is present at the array in Index of ${i}`)
        break;
    } else {
        console.log("The search item is not present in the array")
    }
}

console.log(searchArray.indexOf(itemToSearch)) // -1 for not present value

//Merge Arrays -

let mergeArrayOne = [2, 3, 4]
let mergeArrayTwo = [77, 99, 66]
let arrayThree = []

for (let i = 0; i < mergeArrayOne.length; i++) {
    arrayThree.push(mergeArrayOne[i])
}
for (let i = 0; i < mergeArrayTwo.length; i++) {
    arrayThree[mergeArrayOne.length + i] = mergeArrayTwo[i]
}
// arrayThree.reverse()
const reverseArryThree = arrayThree.reverse()
console.log(reverseArryThree)
console.log(arrayThree)

// Merege shortcut 
const a1 = ["a", "b", "c"]
const a2 = ["l", "m", "n"]
const a3 = [...a1, ...a2]
console.log(a3)

//Merge Two arry - while loop

let arrOne = [3, 5, 7, 45, 67, 65]
let arrTwo = [4, 6, 8]
let arrThree = []
let d1 = 0
let d2 = 0
let d3 = 0

while (d1 < arrOne.length && d2 < arrTwo.length) {
    if (arrOne[d1] < arrTwo[d2]) {
        arrThree[d3] = arrOne[d1]
        d1++;
    } else {
        arrThree[d3] = arrTwo[d2]
        d2++;
    }
    d3++;
}
while (d1 < arrOne.length) {
    arrThree[d3] = arrOne[d1]
    d1++;
    d3++;
}
console.log('kk', arrThree)

//Array sorting
//getting repo name
//Buble sorting

//Insert practice
let newInsert = [3, 5, 1, 4, 2]

newInsertPosition = 2

for (let ii = newInsert.length - 1; ii >= 0; ii--) {

    if (ii >= newInsertPosition) {
        newInsert[ii + 1] = newInsert[ii]
        if (ii == newInsertPosition) {
            newInsert[ii] = 23
        }
    }
    console.log("33", newInsert[ii])
}
newInsert.splice(1, 0, 11)
console.log("22", newInsert)

//delete practice

let deleteNames = ["X", "Y", "Z", "A", "B", "C"]
let deleteNamePosition = 2

for (let i = deleteNamePosition; i <= deleteNames.length - 1; i++) {
    deleteNames[i] = deleteNames[i + 1]
    console.log(deleteNames[i])

}
// deleteNames.pop()
deleteNames.length = deleteNames.length - 1
console.log(deleteNames)


//buble sort

let bubSortArr = [23, 433, 234, 53, 89, 98]

for (let i = 0; i <= bubSortArr.length - 1; i++) {
    for (let j = 0; j <= bubSortArr.length - 1; j++) {
        if (bubSortArr[j] < bubSortArr[j + 1]) {
            const temp = bubSortArr[j]
            bubSortArr[j] = bubSortArr[j + 1]
            bubSortArr[j + 1] = temp
        }
    }
}

console.log(bubSortArr)

