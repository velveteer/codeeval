var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(findFirstNot(line));
    }
});

function findFirstNot(string){
    var hash = {};
    var starr = string.split('');
    for (var i =0; i < starr.length; i++) {
        var c = starr[i];
        if (hash[c]) {
            hash[c]++;
        }
        else {
            hash[c] = 1;
        }
    }
    for (c in hash) {
        if (hash[c] === 1) {
            return c;
        }
    }
}