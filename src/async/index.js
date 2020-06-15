const doSomeThingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do something async'), 3000)
        : reject (new Error ('Error'))
    });
}

const doSomeThing = async () => {
    const something = await doSomeThingAsync();
    console.log(something);
}

console.log('Before');
doSomeThing();
console.log('After')

// Manejo de errores

const anotherFunction = async () => {
    try{
        const something = await doSomeThingAsync();
        console.log(something)
    } catch {
        console.error(error)
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 2')