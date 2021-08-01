/* 
   ____       _         _____                       
  / __ \     | |       |  __ \                      
 | |  | |_ __| |__  ___| |__) |____      _____ _ __ 
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |   
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|                

 */

/// <reference path="../events/PlayerUseEvent.ts" />

enum RAINY_ORB {
    orbID = "op.rainy_orb",
    orbName = "Rainy Orb",
}

const rainy_orb = new Orb(
    RAINY_ORB.orbID,
    RAINY_ORB.orbName,
    {
        name: "rainy_orb",
        data: 0,
    },
    { stack: 1 }
);

rainy_orb.create();

rainy_orb.addRecipe(
    { id: rainy_orb.getOrbNumericID(), count: 1, data: 0 },
    ["xxx", "xyx", "xxx"],
    ["x", 19, 0, "y", empty_orb.getOrbNumericID(), 0]
);

EventListener.PlayerUseEvent((coords, item, block) => {
    if (item.id == rainy_orb.getOrbNumericID()) {
        World.setWeather({ rain: 10, thunder: 0 });
    }
});
