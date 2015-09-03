var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(findFirstNot(line));
    }
});

function findFirstNot(string){
    var starr = string.split('');
    var obj = {};
    // I think it would just be a repeat of your idea
    // implement it
    // lol yeah pretty much the same I think -- which is good
    // the only reason I wanted to do it another way
    // is because people always say to not rely on objects iterating
    // in the correct order
    // well the order should be guaranteed I think. we're not mutating this object anywhere except in the first loop
    // it's a safe enough assumption for this. in real-world maybe something else
    for (var i = 0; i < starr.length; i++){
        if (!!obj[starr[i]]){
            obj[starr[i]] += 1;
        }
        else {
            obj[starr[i]] = 1;
        }
    }
    for (var x in obj){
        if (obj[x] === 1){
            return x;
        }
    }
}
