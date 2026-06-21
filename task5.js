function checkElemWithCallback(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}

let array2 = [1, 2, 3, 4];
let result = checkElemWithCallback(array2, (elem) => elem === 3);
console.log(result); // true

let result2 = checkElemWithCallback(array2, (elem) => elem === 5);
console.log(result2); // false
