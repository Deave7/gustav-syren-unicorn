const animals: string[] = ['apa', 'orangutang', 'gorilla', 'get', 'giraffe']

console.log(animals)


const testObject = {
    string: 'Hello',
    number: 1,
    bool: true,
}

console.log(testObject)

const stringFunction = (string: string): string => {
    const hello: string = 'Hej '
    return (hello + string)
}

animals.forEach(string => {
    console.log(stringFunction(string))
})

