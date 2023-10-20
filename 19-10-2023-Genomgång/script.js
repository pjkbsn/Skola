const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



let evenNumbers = (number) => number % 2 === 0;
let oddNumbers = (number) => number % 2 !== 0;

/* function checkEven(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArr.push(array[i])
        }
    }
}; */

function checkNumbersInArray(array, functions) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (functions(array[i])) {
            newArr.push(array[i])
        }
    }
    return newArr;
};

console.log(checkNumbersInArray(arr, evenNumbers));

console.log(checkNumbersInArray(arr, oddNumbers));


const result = arr.filter((num) => num % 2 === 0);
/* const result = arr.filter(evenNumbers); */


const result2 = arr.filter((num) => num % 2 !== 0);
/* const result2 = arr.filter(oddNumbers); */

console.log(result2)
console.log(result)

