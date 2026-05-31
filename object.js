// 🔥 Q1: Add New Property in Every Object
const users = [
    { id: 1, name: 'Rahul' },
    { id: 2, name: 'Amit' }
];

const result = users.map(x => ({
    ...x,
    active: true
}))

// 🔥 Q2: Remove Property from Object
// const user = {
//     id: 1,
//     name: 'Rahul',
//     password: '123'
// };

// let map = { password, ...rest } = user;
// console.log(rest);

// 🔥 Q3: Filter Users by Role
// const userss = [
//     { name: 'A', role: 'admin' },
//     { name: 'B', role: 'user' },
//     { name: 'C', role: 'admin' }
// ];
// const resulte=userss.filter((x)=>x.role=='admin')
// console.log(resulte);


// 🔥 Q4: Update Specific Object
const ueesers = [
    { id: 1, name: 'Rahul' },
    { id: 2, name: 'Amit' }
];

let updated = ueesers.map(x => {
    if (x.id == 2) {
        return { ...x, name: 'neha' }

    }
    return x
})
console.log(updated)