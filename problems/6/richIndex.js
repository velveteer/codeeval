/*var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var a = line.split(';')[0];
        var b = line.split(';')[1];
    }
});

function subSeq(first, second, acc, state){
    var sharedArr = state || [];
    if (acc === first.length){
        console.log(sharedArr);
        return findSeq(sharedArr, second, 0, 0);
    }
    for (var x = acc; x < first.length; x += 1){
        for (var y = 0; y < second.length; y += 1){
            if (first[x] === second[y]){
                sharedArr.push(first[x]);
                return subSeq(first, second, acc + 1, sharedArr);
            }
            else if (y === second.length -1 && first[x] != second[y]){
                return subSeq(first, second, acc + 1, sharedArr);
            }
        }
    }
}

function findSeq(shared, second, xIndex, acc, state, finState){
    var sub = state || [];
    var finalState = finState || [];
    if (acc === second.length){
        finalState.push(sub.join(''));
        return findSeq(shared, second, xIndex + 1, 0, [], finalState);
    }
    if (xIndex === shared.length){
        return finalState;
    }
    for (var x = xIndex; x < shared.length; x += 1){
        for (var y = acc; y < second.length; y += 1){
            if (shared[x] === second[y]){
                sub.push(shared[x]);
                console.log(sub);
                return findSeq(shared, second, xIndex, y + 1, sub, finalState);
            }
            else if (y === second.length -1 && shared[x] != second[y]){
                return findSeq(shared, second, xIndex, y + 1, sub, finalState);
            }
        }
    }
}

var line = "HOTRFRIGAHP;IUAXZBYKUZFXVMZVLHGK";

var input = line.split(';');

var a = input[0].split('');
var b = input[1].split('');

console.log(subSeq(a, b, 0));


process.stdout.write((subSeq(a, b, 0)).sort(function(a, b){
    return b.length - a.length;
})[0] + '\n');*/

function subSeq(first, second, acc, state){
    var sharedArr = state || [];
    if (acc === first.length){
        console.log(sharedArr.join(''), second.join(''));
        return findSeq(sharedArr, second, 0, 0);
    }
    for (var x = acc; x < first.length; x += 1){
        for (var y = 0; y < second.length; y += 1){
            if (first[x] === second[y]){
                sharedArr.push(first[x]);
                return subSeq(first, second, acc + 1, sharedArr);
            }
            else if (y === second.length -1 && first[x] != second[y]){
                return subSeq(first, second, acc + 1, sharedArr);
            }
        }
    }
}

function findSeq(shared, second, xIndex, acc, state, finState){
    var sub = state || [];
    var finalState = finState || [];
    if (acc >= second.length){
        finalState.push(sub.join(''));
        return findSeq(shared, second, xIndex + 1, 0, [], finalState);
    }
    if (xIndex === shared.length -1){
        return finalState;
    }
    for (var x = xIndex; x < shared.length; x += 1){
        for (var y = acc; y < second.length; y += 1){
            if (shared[x] === second[y]){
                sub.push(shared[x]);
                return findSeq(shared, second, xIndex, y + 1, sub, finalState);
            }
        }
    }
}

var line = "GWPBLOKOZKFSOEBAMYIXS;OOCIKTOPBPAMLYBWMULYG";

var input = line.split(';');

var a = input[0].split('');
var b = input[1].split('');

console.log(subSeq(a, b, 0, 0));