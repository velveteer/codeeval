var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var split = line.split(", ");
        var one = split[0].split('');
        var two = split[1].split('');
        console.log(scrubbyDubDub(one, two));
    }
});

// Rich's rogue code
function scrubbyDubDub(arr, test, newString){
    if (arr.length < 1){
        return newString.join('').trim();
    }
    var newArr = newString || [];
    var car = arr.splice(0, 1);
    var match = false;
    for (var x = 0; x < test.length; x++){
        if (car.join('') === test[x]){
            match = true;
        }
    }
    if (!match){
        newArr.push(car);
    }
    return scrubbyDubDub(arr, test, newArr);
}