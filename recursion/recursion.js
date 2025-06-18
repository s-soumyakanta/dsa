
function recur(x) {
    if (x < 10) {
        console.log(x)
        recur(x + 1)
        console.log(x)
    }
}

recur(5)



