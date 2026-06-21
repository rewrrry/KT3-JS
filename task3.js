function sumElems(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let num = Number(array[i]);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    return sum;
}

let array2 = ['10', 'Строка', '5g', '15', '05'];
let result = sumElems(array2);
console.log(result);
