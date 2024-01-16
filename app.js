"use strict";
const animals = ['apa', 'orangutang', 'gorilla', 'get', 'giraffe'];
console.log(animals);
const testObject = {
    string: 'Hello',
    number: 1,
    bool: true,
};
console.log(testObject);
const stringFunction = (string) => {
    const hello = 'Hej ';
    return (hello + string);
};
animals.forEach(string => {
    console.log(stringFunction(string));
});
