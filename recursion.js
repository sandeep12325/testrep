// function a() {
//     const num = 'a'
//     b()
//     console.log("function a")
//     return num;
// }
// function b() {
//     const num = 'b'
//     c()
//     console.log("function b")
//     return num;
// }
// function c() {
//     const num = 'c'
//     console.log("function c")
//     return num;
// }
// a()


// print 1 to 5

function printNumber(num) {

    if (num >= 1) {
        printNumber(num - 1);
        console.log(num);

    }

}
// printNumber(3)


// print reverse
function printNumber(num) {
    console.log(num);
    if (num > 1) {
        printNumber(num - 1);
    }
}
// printNumber(5)

// factorial
// function factorial(n) {
//     if (n <= 1) {
//         return 1
//     }
//     return n * factorial(n - 1)
// }
// console.log(factorial(5))


// first n number sum
// function sum(n) {
//     if(n<=1) throw new Error("only natural number")
//     if (n == 1) {
//         return 1;
//     }
//     return n + sum(n - 1)
// }
// console.log(sum(4))


// Find the Sum of Digits of a Number Using Recursion Input: N = 1234 Output: 10
// function sumOfDigits(n) {

//     // base condition
//     if (n === 0) {
//         return 0;
//     }

//     return (n % 10) + sumOfDigits(Math.floor(n / 10));
// }

// console.log(sumOfDigits(1234));




// =======
// 3️⃣ Find the Product of Digits of a Number Using Recursion
// Input: N = 234
// Output: 24

// function product(n) {
//     if (n == 0) {
//         return 1
//     }
//     return n % 10 * product(Math.floor(n / 10))
// }
// console.log(product(234))

// ========

// 4️⃣ Check if a Number is Palindrome Using Recursion
// Input: N = 121
// Output: Palindrome