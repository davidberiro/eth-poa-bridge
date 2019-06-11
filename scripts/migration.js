const Web3 = require('web3');
const fs = require('fs');
const consts = require('../consts'); // say it three times

const daiBytecode = fs.readFileSync(`${__dirname}/../build/Dai.bin`);
const daiAbi = JSON.parse(fs.readFileSync(`${__dirname}/../build/Dai.abi`));

async function main() {
  let web3 = new Web3(consts.WEB3_PROVIDER);
  let accounts = await web3.eth.getAccounts();
  let daiContract = new web3.eth.Contract(daiAbi);
  let dai = await daiContract.deploy({ data: daiBytecode }).send({
    from: accounts[0],
    gas: '3000000'
  });
  fs.writeFileSync(
    `${__dirname}/../addresses.json`,
    JSON.stringify({ address: dai.options.address }),
    'utf-8'
  );
}


main().catch(console.log);