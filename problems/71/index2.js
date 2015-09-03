var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var seq = line.split(';');
        var s = seq[0].split(',');
        var k = seq[1];
        console.log(reverseK(s, k));
    }
});

function reverseK (s, k) {
    var newArr = [];
    var merged = [];
    for (var j = 0; j < s.length; j += parseInt(k)) {
        var x = s.slice(j);
        var slice = x.splice(0, k);
        if (slice.length % k === 0) {
            newArr.push(slice.reverse());
        } else {
            newArr.push(slice);
        }
    }
    return merged.concat.apply(merged, newArr).join(',');
}