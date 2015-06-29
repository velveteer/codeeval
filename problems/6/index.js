var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var a = line.split(';')[0];
        var b = line.split(';')[1];
        checkSubsequences(a, b);
    }
});

function checkSubsequences(a, b) {
    var matches = [];
    // Push all possible subsequences into matches array
    a.split('').forEach(function (s) {
        var matchIndex = b.indexOf(s);
        if (matchIndex !== -1) {
            var sub = b.substr(matchIndex);
            matches.push(sub);
        }
    });

    // Get longest possible subsequence (LPS)
    var longestMatch =  matches.sort(function (a, b) { return b.length - a.length; })[0];

    // Remove uncommon characters from both new strings
    var subSeq1 = a
        .split('')
        .filter(function (i) {
            return longestMatch.indexOf(i) !== -1;
        });

    var subSeq2 = longestMatch
        .split('')
        .filter(function (i) {
            return a.indexOf(i) !== -1;
        });

    // Get all possible combinations of strings (not permutations)
    var aSubs = combinations(subSeq1);
    var bSubs = combinations(subSeq2);

    // Filter out only the combinations that match and return the longest
    var answer = aSubs
        .filter(function (sub) {
            return bSubs.indexOf(sub) !== -1;
        })
        .sort(function (a, b) { return b.length - a.length; })[0];

    console.log(answer);
}

function combinations (string) {
    var result = [];
    var loop = function (start, depth, prefix) {
        for (var i = start; i < string.length; i++) {
            var next = prefix + string[i];
            if (depth > 0)
                loop(i + 1, depth - 1, next);
            else
                result.push(next);
        }
    }

    for (var i = 0; i < string.length; i++) {
        loop(0, i, '');
    }

    return result;
}