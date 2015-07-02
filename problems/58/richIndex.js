var fs  = require('fs');
var file = fs.readFileSync(process.argv[2]).toString().split('END OF INPUT');
var wordz = file[1].trim().split('\n');
var testCases = file[0].trim().split('\n');
testCases.forEach(function(cases){
    if (cases !== '') {
        var initialFriends = [];
        var permanentFriends = [];
        wordz.forEach(function(item){
            if (Math.abs(cases.length - item.length) <= 1 && wolfenstein(cases, item) === 1){
                initialFriends.push(item);
                permanentFriends.push(item);
            }
        })
        if (initialFriends.length > 0){
            while (true){
                var newFriends = [];
                initialFriends.forEach(function(friend){
                    wordz.forEach(function(word){
                        if (Math.abs(word.length - friend.length) <= 1 && wolfenstein(word, friend) === 1 && permanentFriends.indexOf(word) === -1){
                            newFriends.push(word);
                            permanentFriends.push(word);
                        }
                    })
                });
                if (newFriends.length > 0){
                    initialFriends = newFriends;
                } else {
                    break;
                }
            }
            return console.log(permanentFriends.length);
        }
        return console.log(1);
    }
});

function wolfenstein(a, b) {
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