var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(solve(0, parseInt(line)));
    }
});

function isPalindrome (n) {
    if (reverse(n) === n) {
        return true;
    }
    return false;
}

function reverse (n) {
    return parseInt(n.toString().split('').reverse().join(''), 10);
}

function solve (n, sum) {
    if (isPalindrome((sum))) {
        return n + ' ' + sum;
    }
    return solve(n + 1, sum + reverse(sum));
}