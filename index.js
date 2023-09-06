'use strict'

const users = [
    {
    id:1,
    name: "Юрій",
    age: 45,
    gender: 'man'
    },
    {
    id:2,
    name: "Андрій",
    age: 12,
    gender: 'man'
    },
    {
    id:3,
    name: "Анна",
    age: 25,
    gender: 'woman'
    },
    {
    id:4,
    name: "Юрій",
    age: 15,
    gender: 'man'
    },
    {
    id:5,
    name: "Софія",
    age: 40,
    gender: 'woman'
    },
    {
    id:6,
    name: "Юлія",
    age: 70,
    gender: 'woman'
    },
    {
    id:7,
    name: "Дмитро",
    age: 30,
    gender: 'man'
    },
    {
    id:8,
    name: "Дмитро",
    age: 35,
    gender: 'man'
    }
]

// 1
const users_name = users.map((arr) => arr.name);
console.log(users_name);

// 2
const users_man = users.filter((arr) => arr.gender == 'man');
console.log(users_man);

// 3
const users_identical_names = users.map(user => user.name).some((name, index, arr) => arr.indexOf(name) !== index);
console.log(users_identical_names);

// 4
const users_old_30 = users.filter((arr) => arr.age > 30);
console.log(users_old_30.length);

// 5
const users_find_name = function(name, users) {
    if(users.filter(user => user.name === name).length > 0) {
        return true
    } else {
        return false
    }
}
let user_name = "Анна";
console.log(users_find_name(user_name, users));