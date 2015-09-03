var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        cycleFound(line);
    }
});

// Determines if there is a loop
/*function cycleFound(input){
    var hare = 0;
    var tortoise = 0;
    var token = 0;
    var limit = 2;
    var inputArr = input.split(' ');

    while((hare + 1) < inputArr.length && (tortoise + 1) < inputArr.length){
        if(token === limit){
            token = 0;
            limit *= 2;
            tortoise = hare;
        }
        hare = hare + 1;
        token += 1;
        if (inputArr[hare] === inputArr[tortoise]){
            console.log(tortoise, hare, inputArr);
            return true;
        }
    }

    return false;

}*/

function brent(input){
    var inputArr = input.split(' ');
    var taken = 1;
    var limit = 1;
    var tortoise = input[0];
    var hare = input[1];

    while (input[tortoise] !== input[hare]){
        if (taken === limit){
            tortoise = hare;
            limit *= 2;
            taken += 1;
        }

    }
}