var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var s = line.split(',');
        var one = s[0];
        var two = s[1];
        console.log(trailString(one,two));
    }
});

function trailString(string, tail){
    var length = tail.length;
    var newString = string.split('');
    var tailString = newString.slice(string.length - length, string.length);
    if (tailString.join('') === tail){
        return 1;
    }
    return 0;
}