var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var newLine = line.split(' ');
        var index = parseInt(newLine.splice(newLine.length - 1, 1), 10);
        if (index > newLine.length){
            return index;
        } else {
            return console.log(newLine[newLine.length - index]);
        }
    }
});