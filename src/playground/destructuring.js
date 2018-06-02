//
// Object Destructuring
//

// console.log('destructuring');
//
// const person = {
//     name: 'Andrew',
//     age: 23,
//     location: {
//         city: 'Philadelphia',
//         temp: 92


//     }
// };
//
// // const name = person.name;
// // const age = person.age;
//
// const { name: firstName = 'Anonymous', age } = person;
//
// console.log(`${firstName} is ${age}`);
// const { temp: temperature, city } = person.location;
//
// if (city && temperature) {
//     console.log(`${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);

// const address = ['1299 South Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'State Not Set' ] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['coffee (hot)', '$2', '$2.50', '$2.75'];

const [ itemSold, , medPrice ] = item;

console.log(`A medium ${itemSold} costs ${medPrice}`);