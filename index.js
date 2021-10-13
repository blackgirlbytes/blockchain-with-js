const sha = require("crypto-js/sha256");

// block represents each block in the block chain
// Each will hold a timestamp, index, data, and previous hash
class Block{
    constructor(index, data, prevHash) {
        // TODO: fill the constructor in
    }
// this function will be used to create the hash for the current block that's created. 
  generateHash(){
    return sha(this.index + this.prevHash + this.timestamp + JSON.stringify(this.data)).toString();
    }   
}

// this represents a block chain, and each block chain with hold an array of blocks
class BlockChain{
    constructor(){
     // TODO: fill the constructor in
    }
// to add a block, we will set the index, set the previous hash to the hash of the previous block, and create a new block
// then we will push it into an array with other blocks
  
  addBlock(data){
    let index = this.chain.length;
    let prevHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].hash : 0;
    let block = new Block(index, data, prevHash);
    // TODO: Add each block to a chain
    this.chain.push(block);
  }
}


// instantiating blocks..let's create some of our own! 
const RizelCoin = new BlockChain();
 
// TODO CREATE SOME OF OUR OWN BLOCKS
 
console.log(JSON.stringify(RizelCoin, null, 4));


