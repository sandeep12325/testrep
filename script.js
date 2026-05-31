// 1-Double the numbers using map()

// Input: [1, 2, 3, 4]
// Output: [2, 4, 6, 8]

function duble(input) {
    // return input.map(x=>x*2)
    return input.map((res) =>
        res * 2
    )
}
// console.log(duble([1, 2, 3, 4]))

// Q2: Convert array of strings to uppercase
// Input: ["angular", "react", "vue"]
// Output: ["ANGULAR", "REACT", "VUE"]

function upper(input) {
    return input.map(res => res.toUpperCase())
}
// console.log(upper(["angular", "react", "vue"]));


// Q3: Get only even numbers using filter()
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

function even(input) {
    return input.filter(x => x % 2 == 0)
}
// console.log(even([1, 2, 3, 4, 5, 6]));


// Q4: Get names of users above 18
const users = [
    { name: "A", age: 17 },
    { name: "B", age: 22 },
    { name: "C", age: 19 }
];

// Output: ["B", "C"]

function getname(input) {
    return input.filter(x => x.age > 18).map(x => x.name)
}
// console.log(getname(users));

// Q5: Add "Mr." before each name
// Input: ["Rahul", "Amit"]
// Output: ["Mr. Rahul", "Mr. Amit"]

function addmr(input) {
    return input.map(x => `Mr. ${x}`)
}
// console.log(addmr(["Rahul", "Amit"]));

// Q6: Get products with price > 1000
const products = [
    { name: "Phone", price: 1500 },
    { name: "Pen", price: 50 },
    { name: "Laptop", price: 50000 }
];

// Output: [
//     { name: "Phone", price: 1500 },
//     { name: "Laptop", price: 50000 }
// ]


function getprice1000(products) {
    return products.filter(x => x.price > 1000)
}
// console.log(getprice1000(products));

// Q7: Total price of expensive products (>1000)

const products1 = [
    { name: "Phone", price: 1500 },
    { name: "Pen", price: 50 },
    { name: "Laptop", price: 50000 }
];

// Output: 51500

function expsivePrice(products1) {
    return products1.filter(x => x.price > 1000).map(x => x.price).reduce((acc, current) => acc + current, 0)
}
// console.log(expsivePrice(products1));



// Q8: Remove duplicate numbers
// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

function removedup(input) {
    return [...new Set(input)]
}
// console.log(removedup([1, 2, 2, 3, 4, 4]));

// Q9: Get active users email
const users1 = [
    { email: "a@gmail.com", isActive: true },
    { email: "b@gmail.com", isActive: false },
    { email: "c@gmail.com", isActive: true }
];

// Output: ["a@gmail.com", "c@gmail.com"]

function activeuser(user) {
    return user.filter(x => x.isActive == true).map(x => x.email)
}
// console.log(activeuser(users1))

// ---------------------------------2---------------------------------

// Q1: Square only even numbers
// Input: [1, 2, 3, 4]
// Output: [4, 16]

function evensqure(input) {
    return input.filter(x => x % 2 == 0).map(x => x * x)
}
// console.log(evensqure([1, 2, 3, 4]))

// Q2: Get length of each word
// Input: ["html", "css", "javascript"]
// Output: [4, 3, 10]

function lemgth(input) {
    return input.map(x => x.length)
}
// console.log(lemgth(["html", "css", "javascript"]))

// Q3: Get users with age between 18 and 25

const usersage = [
    { name: "A", age: 17 },
    { name: "B", age: 20 },
    { name: "C", age: 26 }
];

// Output: [{ name: "B", age: 20 }]

function agebetween(usersage) {
    return usersage.filter(x => x.age > 18 && x.age < 25)
}
// console.log(agebetween(usersage));

// 🔹 Q4: Sum of all odd numbers
// Input: [1, 2, 3, 4, 5]
// Output: 9

function sumallodd(input) {
    return input.filter(x => x % 2 != 0).reduce((acc, curr) => acc + curr, 0)
}
// console.log(sumallodd([1, 2, 3, 4, 5]));

// Q5: Convert prices to INR format
// Input: [100, 200]
// Output: ["₹100", "₹200"]

function convertrupess(input) {
    return input.map(x => `₹${x}`)
}
// console.log(convertrupess([100, 200]))

// Q6: Get names of active users (case: uppercase)
const usersname = [
    { name: "rahul", active: true },
    { name: "amit", active: false },
    { name: "rohit", active: true }
];

// Output: ["RAHUL", "ROHIT"]

function upper(usersname) {
    return usersname.filter(x => x.active == true).map(x => x.name.toUpperCase())
}
// console.log(upper(usersname))

// 🔹 Q7: Count how many numbers > 10
// Input: [5, 12, 8, 20, 3]
// Output: 2

function count(Input) {
    return Input.filter(x => x > 10).length
}
// console.log(count([5, 12, 8, 20, 3]))

// Q8: Flatten array (important tricky)
// Input: [[1, 2], [3, 4], [5]]
// Output: [1, 2, 3, 4, 5]
function flate(val) {
    return val.flat()
}
// console.log( flate([[1, 2], [3, 4], [5]]));

// 🔹 Q9: Remove falsy values
// Input: [0, "hello", false, "", 5, null]
// Output: ["hello", 5]

function removefalsy(val) {
    return val.filter(Boolean)
}
// console.log(removefalsy([0, "hello", false, "", 5, null]))

// Q10: Get highest price product
const productss = [
    { name: "A", price: 100 },
    { name: "B", price: 500 },
    { name: "C", price: 300 }
];
// Output: { name: "B", price: 500 }

// function higherProd(val) {
//     return val.reduce((max, curr) => curr.price > max.price ? curr : max)
// }
// console.log(higherProd(productss))


// Q1: Reverse a String
// const str = "hello";
// function reverse(str)
// {
//     return str.split('').reverse().join('')
// }
// console.log(reverse("hello"));


// 🔥 Q2: Palindrome Check
// function isPalindrome(str) {
//     return str == str.split('').reverse().join('')

// }

// console.log(isPalindrome('madam')); // true

// 🔥 Q3: Find Maximum Number
// ✅ Using reduce
// const arr = [10, 50, 99, 3];

// const max=arr.reduce((acc,curr)=>{
//     return curr>acc?curr:acc
// })
// console.log(max)

// 🔥 Q4: Remove Duplicate Values
// ✅ Using Set

// const arr = [1,2,2,3,4,4]

// const result=[...new Set(arr)];
// console.log(result,arr)


// ----------------------
const str = 'sandeep';
// {
//   a: 2,
//   b: 2,
//   c: 2
// }

const result = {};

// for (let char of str) {

// //   result[char] = (result[char] || 0) + 1;

// if(result[char])
// {
//     result[char]+=1
// }else{
//     result[char]=1
// }

// }

// console.log(result);

const userse = [
    { name: 'A', role: 'admin' },
    { name: 'B', role: 'user' },
    { name: 'C', role: 'admin' }
];

const resultss = userse.reduce((acc, curr) => {

    if (!acc[curr.role]) {
        acc[curr.role] = [];
    }

    acc[curr.role].push(curr);

    return acc;

}, {});

// console.log(resultss);

let passengers = [
    {
        name: 'Rahul Sharma',
        flightType: 'Single',
        dob: '12-05-1998'
    },
    {
        name: 'Amit Kumar',
        flightType: 'Round Trip',
        dob: '22-08-1995'
    },
    {
        name: 'Neha Singh',
        flightType: 'Single',
        dob: '10-01-2000'
    }
];

const res = passengers.map((res) => {
    return res
})
