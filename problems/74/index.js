var fs  = require("fs");

// Coin values
var values = [1, 3, 5];

// Sort values descending -- required for this algorithm
values = values.sort(function (a, b) { return (b - a); });

// Recursive function to sum coin values and find minimum amount needed
var minimumCoins = function minimumCoins(number, count, sum) {
    // Base condition
    if (sum === number) {
        return count;
    }
    for (var i in values) {
        var val = values[i];
        // If coin value is too large go down to the next smallest value
        if ((sum + val) > number) {
            continue;
        } else {
            return minimumCoins(number, count + 1, sum + val);
        }
    }
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
       console.log(minimumCoins(parseInt(line), 0, 0));
    }
});


