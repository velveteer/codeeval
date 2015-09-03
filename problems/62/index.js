var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var s = line.split(',');
        console.log(modulo(s[0], s[1]));
    }
});


function modulo(n, m) {

}
