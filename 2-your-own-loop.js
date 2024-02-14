// Your code here.
function loop(value, test, updater, body) {
    for (let i = value; test(i); i = updater(i)) {
        body(i);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1