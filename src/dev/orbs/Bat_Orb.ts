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

enum BAT_ORB {
    orbID = "op.bat_orb",
    orbName = "Bat Orb",
}

const bat_orb = new Orb(
    BAT_ORB.orbID,
    BAT_ORB.orbName,
    {
        name: "bat_orb",
        data: 0,
    },
    { stack: 1 }
);

bat_orb.create();

bat_orb.addRecipe(
    { id: bat_orb.getOrbNumericID(), count: 1, data: 0 },
    ["xxx", "xyx", "xxx"],
    ["x", 89, 0, "y", empty_orb.getOrbNumericID(), 0]
);

EventListener.PlayerUseEvent((coords, item, block) => {
    if (item.id == bat_orb.getOrbNumericID()) {
        Entity.addEffect(Player.get(), 16, 1, 9600);
    }
});
