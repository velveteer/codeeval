var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line, index) {
    if (line !== "" && index) {
        var num = parseInt(line, 10);
        var solutions = 0;
        var min = Math.floor(Math.sqrt(num));
        for (var x = 0; x <= min; x++){
            var y = Math.sqrt(num - (x * x));
            if (Math.round(y) === y) {
                if ((x * x) === y) {
                    solutions += 2;
                } else {
                    solutions += 1;
                }
            }
        }
        console.log(solutions/2);
    }
});