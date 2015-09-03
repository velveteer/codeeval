var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var s = line.split(';');
        var one = s[0].split(',');
        var two = s[1];
        console.log(killAll(one, parseInt(two, 10)));
    }
});

function killAll(string, k, index, slice){
    if (k === 1){
        var firstSlice = string.join(',');
        return firstSlice;
    }
    var index = index || 0;
    var slice = slice || [];
    if ((index + k) > string.length){
        if (slice.length !== string.length){
            var finalSlice = [];
            for (var z = index; z < string.length; z++){
                finalSlice.push(string[z]);
            }
            var lastSlice = slice.concat(finalSlice);
            var finalFinal = lastSlice.join(',');
            return finalFinal;
        }
        return slice.join(',');
    }
    var sliced = [];
    for (var x = index; x < (index + k); x++){
        sliced.push(string[x]);
    }
    var newSlice = sliced.reverse();
    newSlice.forEach(function(char){
        slice.push(char);
    });
    index += k;
    return killAll(string, k, index, slice);
}
