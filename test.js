var cnUtil = require('./src/cn_util');
var mnemonic = require('./src/mnemonic');

let seed = cnUtil.rand_16();
let test = cnUtil.create_address(seed);

let words = mnemonic.mn_encode(seed);

console.log(test)
console.log(words);


