// Object Destructuring
const person = {
    name: 'Aakash',
    age: 22,
    location: {
        city: 'Delhi',
        temp: 45
    }
};

const {name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location;
if(city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}

//Array Destructureing

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = adress;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`)