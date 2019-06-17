// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (input === undefined || input===true || input===false) {
        return "Hello, World!";
    }
    return "Hello, " + input + "!";
}

// function add(a, b) {
//     if (typeof a=== "string" || typeof b==="string") {
//         return false;
//     } else {
//         return a + b;
//     }
// }