
function recur(x) {
    if (x < 10) {
        console.log("head recursion", x)
        recur(x + 1)
        console.log("tail recursion", x)
    }
}

// recur(5)

// factorial 
//direct recursion

function factorial(x) {
    if (x == 0) {
        return 1
    }
    return x * factorial(x - 1)
}

console.log(factorial(3))

//indirect recursion 
let money = 100
let apple = 0
function BuyApple(x) {
    if (x > 0) {

        console.log("money has", x, apple)
        BuyMore(x)
    } else {
        console.log("No money", apple)
    }
}

function BuyMore(y) {
    apple++
    BuyApple(y - 10)

}
BuyApple(money)