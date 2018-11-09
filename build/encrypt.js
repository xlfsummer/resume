let fs = require("fs");
let { promisify } = require("util");
let AES = require("crypto-js/aes");
let Crypto = require("crypto-js/core");

let key;

let encrypt = async (fileName) => {
    if(!key) key = (await promisify(fs.readFile)("../data/key", "utf8")).trim();
    let data = await promisify(fs.readFile)(`../data/data/${fileName}.json`, "utf8");
    let ciphertext = AES.encrypt(data, key).toString();
    await promisify(fs.writeFile)(`../src/static/${fileName}.json.data`, ciphertext, "utf8");
}

async function main (){
    encrypt("time-line");
    encrypt("skill");
    encrypt("basic");
    encrypt("other");
}

main();
