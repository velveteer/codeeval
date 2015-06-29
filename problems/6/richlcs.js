var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var a = line.split(';')[0];
        var b = line.split(';')[1];
        longestCommonSequence(a, b);
    }
});


function longestCommonSequence(a, b){



}