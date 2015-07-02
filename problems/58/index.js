var fs  = require('fs');
var file = fs.readFileSync(process.argv[2]).toString().split('END OF INPUT');
var cases = file[0].trim().split('\n');
var wordList = file[1].trim().split('\n');

cases.forEach(function (testCase) {
    if (testCase !== '') console.log(getNetworkSize(testCase, [testCase]));
});

function getNetworkSize(testCase, friends) {
    wordList
        .filter(function (word) {
            return Math.abs(word.length - testCase.length) <= 1 && levenshtein(testCase, word) === 1;
        })
        .forEach(function (f) {
            if (friends.indexOf(f) < 0) {
                friends.push(f);
                return getNetworkSize(f, friends);
            }
        });

    return friends.length;
}


// https://github.com/sindresorhus/leven/blob/master/index.js
function levenshtein (a, b) {
    var arr = [];
    var charCodeCache = [];
	if (a === b) {
		return 0;
	}

	var aLen = a.length;
	var bLen = b.length;

	if (aLen === 0) {
		return bLen;
	}

	if (bLen === 0) {
		return aLen;
	}

	var bCharCode;
	var ret;
	var tmp;
	var tmp2;
	var i = 0;
	var j = 0;

	while (i < aLen) {
		charCodeCache[i] = a.charCodeAt(i);
		arr[i] = ++i;
	}

	while (j < bLen) {
		bCharCode = b.charCodeAt(j);
		tmp = j++;
		ret = j;

		for (i = 0; i < aLen; i++) {
			tmp2 = bCharCode === charCodeCache[i] ? tmp : tmp + 1;
			tmp = arr[i];
			ret = arr[i] = tmp > ret ? tmp2 > ret ? ret + 1 : tmp2 : tmp2 > tmp ? tmp + 1 : tmp2;
		}
	}

	return ret;
}