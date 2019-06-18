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

function isFive(a) {
    if (a===5) {
        return true;
    } else {
        return false;
    }
}

function isEven(a) {
    if (a==="boolean") {
        return false;
    } else if (a%2===0) {
        return true;
    } else if (a%2===1) {
        return false;
    } else if (a==="string") {
        return false;
    } else {
        return false;
    }
}

// function add(a, b) {
//     if (typeof a=== "string" || typeof b==="string") {
//         return false;
//     } else {
//         return a + b;
//     }
// }