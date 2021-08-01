/* 
   ____       _         _____                       
  / __ \     | |       |  __ \                      
 | |  | |_ __| |__  ___| |__) |____      _____ _ __ 
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |   
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|                

 */

/// <reference path="../blocks/Nether_Star_Block.ts" />

enum EMPTY_ORB {
    stringID = "op.empty_orb",
    orbName = "Empty Orb",
}

const empty_orb = new Orb(
    EMPTY_ORB.stringID,
    EMPTY_ORB.orbName,
    {
        name: "empty_orb",
        data: 0,
    },
    {
        stack: 1,
    }
);

empty_orb.create();

empty_orb.addRecipe({id: empty_orb.getOrbNumericID(), count: 1, data: 0}, [
    "xyx",
    "yzy",
    "xyx"
], ["x", nether_star_block.getNumericID(), 0, "y", 49, 0, "z", 42, 0]);
