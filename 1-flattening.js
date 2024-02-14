function flatten(arrs) {
    return arrs.reduce((previous, current) => {
        return previous.concat(current);
    });
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));

// → [1, 2, 3, 4, 5, 6]