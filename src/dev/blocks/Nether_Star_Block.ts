/* 
   ____       _         _____                       
  / __ \     | |       |  __ \                      
 | |  | |_ __| |__  ___| |__) |____      _____ _ __ 
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |   
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|                

 */

/// <reference path="../Block.ts" />

enum NETHER_STAR_BLOCK {
    stringID = "op.nether_star_block",
    blockName = "Nether Star Block"
}

const nether_star_block = new Manager.BlockManager(NETHER_STAR_BLOCK.stringID, NETHER_STAR_BLOCK.blockName, [
    ["nether_star_block", 0]
]);

nether_star_block.create();

nether_star_block.addRecipe({id: nether_star_block.getNumericID(), count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ["x", 399, 0])
