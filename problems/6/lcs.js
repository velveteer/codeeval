var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var a = line.split(';')[0];
        var b = line.split(';')[1];
        findCommonSubsequence(a, b);
    }
});

function findCommonSubsequence (a,b) {

    var table = [],
        aLen = a.length,
        bLen = b.length,
        squareLen = Math.max(aLen,bLen);
    // Initialize a table of zeros
    for (var i = 0; i <= squareLen ; i++) {
        table.push([]);
        for (var j = 0; j <= squareLen; j++) {
            table[i][j] = 0;
        }
    }
    // Create a table of counts
    for (var i = 1; i <= aLen; i++) {
        for (var j = 1; j <= bLen; j++) {
            if (a[i-1] == b[j-1]) {
                table[i][j] = table[i - 1][j - 1] + 1;
            } else {
                table[i][j] = Math.max(table[i-1][j], table[i][j-1]);
            }
        }
    }

    // Move backwards along the table
    var i = aLen, j = bLen, LCS = [];
    while (i > 0 && j > 0) {
        if (a[i-1] == b[j-1]) {
            LCS.push(a[i-1]);
            i -= 1;
            j -= 1;
        } else {
            if (table[i][j-1] >= table[i-1][j]) {
                j -= 1;
            } else {
                i -= 1;
            }
        }
    }
    console.log(LCS.reverse().join(''));
}