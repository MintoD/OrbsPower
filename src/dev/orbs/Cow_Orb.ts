/* 
   ____       _         _____                       
  / __ \     | |       |  __ \                      
 | |  | |_ __| |__  ___| |__) |____      _____ _ __ 
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |   
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|                

 */

/// <reference path="../events/PlayerUseEvent.ts" />
/// <reference path="./Empty_Orb.ts" />

enum COW_ORB {
    orbID = "op.cow_orb",
    orbName = "Cow Orb",
}

const cow_orb = new Orb(
    COW_ORB.orbID,
    COW_ORB.orbName,
    {
        name: "cow_orb",
        data: 0,
    },
    { stack: 1 }
);

cow_orb.create();

cow_orb.addRecipe(
    { id: cow_orb.getOrbNumericID(), count: 1, data: 0 },
    ["xxx", "xyx", "xxx"],
    ["x", 335, 0, "y", empty_orb.getOrbNumericID(), 0]
);

EventListener.PlayerUseEvent((coords, item, block) => {
    if (item.id == cow_orb.getOrbNumericID()) {
        Entity.clearEffects(Player.get());
    }
});
