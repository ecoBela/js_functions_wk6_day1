function sumArray(numbers){
    total = 0;
    for(var number of numbers){
        total += number;
    }
    return total;
}

var sum = sumArray([10,9, 1]);
console.log('sum of array: ', sum);

var checkString = function(object, string){
    for(var key in object){
        if(string === key){
            return true;
        }
    return false
    }
}

var person = {
    name: 'Wojtek',
    age: 30
};

var keyIsFound = checkString(person, "name");
var keyIsNotFound = checkString(person, "email");

console.log("should be true ", keyIsFound);
console.log("should be false ", keyIsNotFound);








// function sayHello(greeting, name = 'World'){
//     return `${greeting} ${name}`;
// }

// console.log(sayHello("hi", "Trey"));

// const add = function (firstNumber, secondNumber){
//     return firstNumber + secondNumber;
// }
// console.log('1 + 3 with add: ', add(1, 3));