var fs  = require("fs");
var values = [1, 3, 5];
var minimumCoins = function minimumCoins(number, count, sum) {
    // Base condition
    if (sum === number) {
        return count;
    }
    for (var i in values) {
        var val = values[i];
        if ((sum + val) > number) {
            continue;
        } else {
            return minimumCoins(number, count + 1, sum + val, values);
        }
    }
}
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    values = values.sort(function (a, b) { return (b - a); });
       console.log(minimumCoins(parseInt(line), 0, 0));
    }
});


