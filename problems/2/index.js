var fs  = require("fs");
var lines = [];
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        lines.push(line);
    }
});

var limit = parseInt(lines[0]);
var sortedLines = lines
                    .splice(1)
                    .sort(function (a, b) { return b.length - a.length; })
                    .slice(0, limit)
                    .forEach(function (line) { console.log(line); });