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

edadMenor35(people);

function edadMenor35(params) {
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        if (element.age<35) {
            console.log(element.name);
        }
    }
}