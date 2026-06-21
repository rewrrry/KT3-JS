function changeElem(array, p) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * p);
    }
    return result;
}

let array2 = [1, 2, 3, 4];
let result2 = changeElem(array2, 3);
console.log(result2);
console.log(array2);
