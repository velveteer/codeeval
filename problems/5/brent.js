var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(brent(line));
    }
});

function brent(input) {
    input = input.split(' ');
    var power = 1;
    var lam = 1;
    var mu = 0;
    var tortoise = input[0];
    var hare = input[1];

    while (tortoise !== hare) {
        if (power === lam) {
            tortoise = hare;
            power *= 2;
            lam = 0;
        }
        hare = input[input.indexOf(hare) + 1];
        lam++;
    }

    tortoise = input[0];
    hare = input[0];

    for (var i = 0; i < lam; i++) {
        hare = input[input.indexOf(hare) + 1];
    }

    while (tortoise !== hare) {
        tortoise = input[input.indexOf(tortoise) + 1];
        hare = input[input.indexOf(hare) + 1];
        mu++;

    }

    return input.slice(mu, mu + lam).join(' ');
}
