/* 
   ____       _         _____                       
  / __ \     | |       |  __ \                      
 | |  | |_ __| |__  ___| |__) |____      _____ _ __ 
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |   
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|                

 */

///<reference path="../events/PlayerUseEvent.ts" />
///<reference path="./Empty_Orb.ts" />

enum SUNNY_ORB {
    orbID = "op.sunny_orb",
    orbName = "Sunny Orb",
}

const sunny_orb = new Orb(
    SUNNY_ORB.orbID,
    SUNNY_ORB.orbName,
    {
        name: "sunny_orb",
        data: 0,
    },
    { stack: 1 }
);

sunny_orb.create();

sunny_orb.addRecipe(
    { id: sunny_orb.getOrbNumericID(), count: 1, data: 0 },
    ["xxx", "xyx", "xxx"],
    ["x", 378, 0, "y", empty_orb.getOrbNumericID(), 0]
);

EventListener.PlayerUseEvent((coords, item, block) => {
    if (item.id == sunny_orb.getOrbNumericID()) {
        World.setWeather({ rain: 0, thunder: 0 });
    }
});
