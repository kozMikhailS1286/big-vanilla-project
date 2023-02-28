// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    console.log(nums)
    let result = nums.reduce((acc, el) => acc + el, 0);
    // В return стоит "заглушка", чтоб typescript не ругался
    return result
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number): string {
    let notTriangle = a + b > c && a + c > b && b + c > a ? true : false;
    if (a === b && a === c && b === c && c === a) {
        return "10"
    } else if (notTriangle && (b === c || a === b)) {
        return "01"
    } else if (notTriangle) {
        return "11"
    } else if (!notTriangle) {
        return "00"
    }
    return ""
        // В return стоит "заглушка", чтоб typescript не ругался
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{
    return String(number).split("").map((n) => +n).reduce((a,b) => a+b)
    // В return стоит "заглушка", чтоб typescript не ругался
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let sumEven = arr.map((e, i) => {
        return i % 2 === 0 ? e: 0
    }).reduce((acc, curr) => {
        return acc + curr
    })
    let sumAdd = arr.map((e, i) => {
        return i % 2 === 1 ? e: 0
    }).reduce((acc, curr) => {
        return acc + curr
    })
    return sumEven > sumAdd
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {

    let numbers = [];
    for (let i = 0; i < array.length; i++) {

        if (Number.isInteger(array[i]) && array[i] > 0) {
            numbers.push(array[i])
        }
    }
    let result = numbers.map((a) => Math.pow(a, 2));
    // В return стоит "заглушка", чтоб typescript не ругался
    return result
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    let arr = [];
    while (N > 0) {
        arr.push(N);
        N--;
    }

    let newArr = 0
    for (let i = 0; i < arr.length; i++) {
        newArr += arr[i];
    }

    return newArr;
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const moneyTypes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];

    let result: number[] = []

    for (let i = 0; i < moneyTypes.length; ) {

        if (amountOfMoney >= moneyTypes[i]) {

            amountOfMoney -= moneyTypes[i];
            result.push(moneyTypes[i])
        }else {
            i++;
        }
    }
    return result;
}
