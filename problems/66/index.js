var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(caspal(parseInt(line)));
    }
});

function caspal (depth) {
    var result = [];
    for (var i = 0; i < depth; i++) {
        var c = 1;
        for (var j = 0; j <= i; j++) {
            result.push(c);
            c = c * (i - j) / (j + 1);
        }
    }
    return result.join(' ');
}