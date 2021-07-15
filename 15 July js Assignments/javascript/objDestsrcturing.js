var biodata = {
    name: 'Rahul',
    age: '25',
    hobbies: {
        first: 'playing',
        sec: 'driving'
    }
}

//object Destructuring
//let { name, age, hobbies } = biodata;
//console.log(`my name is ${name} age is ${age} hobbies are ${hobbies.first} & ${hobbies.sec}`)

//you can rename  object entity by using destructuring
let { name: myname, age, hobbies } = biodata;
console.log(`my name is ${myname} age is ${age} hobbies are ${hobbies.first} & ${hobbies.sec}`)