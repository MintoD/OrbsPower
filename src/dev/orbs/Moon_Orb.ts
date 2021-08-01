/* 
   ____       _         _____                       
  / __ \     | |       |  __ \                      
 | |  | |_ __| |__  ___| |__) |____      _____ _ __ 
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |   
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|                

 */

/// <reference path="../events/PlayerUseEvent.ts" />

  enum MOON_ORB {
    orbID = "op.moon_orb",
    orbName = "Moon Orb",
}

const moon_orb = new Orb(
    MOON_ORB.orbID,
    MOON_ORB.orbName,
    {
        name: "moon_orb",
        data: 0,
    },
    { stack: 1 }
);

moon_orb.create();

moon_orb.addRecipe(
    { id: moon_orb.getOrbNumericID(), count: 1, data: 0 },
    ["xxx", "xyx", "xxx"],
    ["x", -249, 0, "y", empty_orb.getOrbNumericID(), 0]
);

EventListener.PlayerUseEvent((coords, item, block) => {
    if (item.id == moon_orb.getOrbNumericID()) {
        World.setWorldTime(12542);
    }
});
