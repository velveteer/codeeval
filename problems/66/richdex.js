var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(caspal(parseInt(line), [[1]]));
    }
});

function caspal (depth, acc) {
    if (depth === 1){
        return acc.join('');
    }
    var last = acc[acc.length-1];
    var arr = [];
    for (var x = 0; x < last.length; x++){
        if (last[x - 1] === undefined){
            arr.push(1);
        }
        if (last[x + 1] === undefined){
            arr.push(1);
        }
        else {
            arr.push(last[x] + last[x + 1]);
        }
    }
    acc.push(arr);
    if (depth === 2){
        var concat = '';
        acc.forEach(function(item){
            for (var z = 0; z < item.length; z++){
                concat += ' ' + item[z];
            }
        });
        return concat.trim();
    }
    return caspal(depth - 1, acc);
}