var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(decToBin(line))
    }
});

function decToBin (num) {
    var bin = [];
    while (num !== 0) {
        bin.unshift(num & 1);
        num >>= 1;
    }
    return bin.join('');
}