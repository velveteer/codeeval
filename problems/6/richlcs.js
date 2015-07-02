var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var input = line.split(';');
        var a = input[0];
        var b = input[1];
        subSeq(a, b);
    }
});

function subSeq(a,b){

    var pop = [];
    var aLength = a.length;
    var bLength = b.length;
    var squareLength = Math.max(aLength,bLength);

    for (var x = 0; x <= squareLength ; x += 1) {
        pop.push([]);
        for (var y = 0; y <= squareLength; y += 1) {
            pop[x][y] = 0;
        }
    }

    for (var x = 1; x <= aLength; x += 1) {
        for (var y = 1; y <= bLength; y += 1) {
            if (a[x-1] === b[y-1]){
                pop[x][y] = pop[x - 1][y - 1] + 1;
            } else {
                pop[x][y] = Math.max(pop[x-1][y], pop[x][y-1]);
            }
        }
    }

    var x = aLength;
    var y = bLength;
    var long = [];
    while (x > 0 && y > 0) {
        if (a[x-1] === b[y-1]) {
            long.push(a[x-1]);
            x -= 1;
            y -= 1;
        }
        else {
            if (pop[x][y-1] >= pop[x-1][y]) {
                y -= 1;
            }
            else {
                x -= 1;
            }
        }
    }
    var output = long.reverse().join('');
    console.log(output);
}