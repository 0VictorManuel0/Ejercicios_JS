var people = [
    {
        id: 1,
        name: "John",
        age: 28
    }, 
    {
        id: 2,
        name: "Jane",
        age: 31
    }, 
    {
        id: 3,
        name: "Peter",
        age: 55 
    }
];
console.log(people);

for (let i = 0; i < people.length; i++) {
    const element = people[i];
    if (element.age<35) {
        console.log(element.name);
    }
}