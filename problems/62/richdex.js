var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var s = line.split(',');
        var one = parseInt(s[0], 10);
        var two = parseInt(s[1], 10);
        console.log(moo(one, two));
    }
});

function moo(n, m){
    while (n >= m){
        n -= m;
    }
    return n;
}