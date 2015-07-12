var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.log(floyd(line));
    }
});

function floyd(input) {
    input = input.split(' ');
    var mu = 0;
    var lam = 1;
    var tortoise = input[1];
    var hare = input[2];
    /**
     * Main phase of algorithm: finding a repetition x_i = x_2i
     * The hare moves twice as quickly as the tortoise and
     * the distance between them increases by 1 at each step.
     * Eventually they will both be inside the cycle and then,
     * at some point, the distance between them will be
     * divisible by the period λ.
     */
    while (tortoise !== hare) {
        tortoise = input[input.indexOf(tortoise) + 1];
        hare = input[input.indexOf(hare) + 2];
    }

    tortoise = input[0];

    /**
     * At this point the tortoise position, ν, which is also equal
     * to the distance between hare and tortoise, is divisible by
     * the period λ. So hare moving in circle one step at a time,
     * and tortoise (reset to x0) moving towards the circle, will
     * intersect at the beginning of the circle. Because the
     * distance between them is constant at 2ν, a multiple of λ,
     * they will agree as soon as the tortoise reaches index μ.
     * Find the position μ of first repetition.
     */
    while (tortoise !== hare) {
        tortoise = input[input.indexOf(tortoise) + 1];
        hare = input[input.indexOf(hare) + 1];
        mu += 1;
    }

    /**
     * Find the length of the shortest cycle starting from x_μ
     * The hare moves one step at a time while tortoise is still.
     * lam is incremented until λ is found.
     */
    hare = input[input.indexOf(tortoise) + 1];
    while (tortoise !== hare) {
        hare = input[input.indexOf(hare) + 1];
        lam += 1;
    }

    return input.slice(mu, mu + lam).join(' ');
}