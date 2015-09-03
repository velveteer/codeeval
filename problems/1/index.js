var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var seq = line.split(' ');
        var result = [];
        for (var i = 1; i <= seq[2]; i++) {
            result.push(fizzBuzz(i, seq[0], seq[1]));
        }
        console.log(result.join(' ').trim());
    }
});

function fizzBuzz (i, x, y) {
    if ((i % x === 0) && (i % y === 0)) {
        return 'FB';
    }
    if (i % x === 0) {
        return 'F';
    }
    if (i % y === 0) {
        return 'B';
    }
    return i.toString();
}