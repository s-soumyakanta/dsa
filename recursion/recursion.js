
function recur(x) {
    if (x < 10) {
        console.log(x)
        recur(x + 1)
        console.log(x)
    }
}

// recur(5)

// factorial 

function factorial(x) {
    if (x == 0) {
        return 1
    }
    return x * factorial(x - 1)
}

console.log(factorial(3))
