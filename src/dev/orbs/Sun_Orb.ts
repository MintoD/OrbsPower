/* 
   ____       _         _____                       
  / __ \     | |       |  __ \                      
 | |  | |_ __| |__  ___| |__) |____      _____ _ __ 
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |   
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|                

 */

enum SUN_ORB {
    orbID = "op.sun_orb",
    orbName = "Sun Orb",
}

const sun_orb = new Orb(
    SUN_ORB.orbID,
    SUN_ORB.orbName,
    {
        name: "sun_orb",
        data: 0,
    },
    { stack: 1 }
);

sun_orb.create();

sun_orb.addRecipe(
    { id: sun_orb.getOrbNumericID(), count: 1, data: 0 },
    ["xxx", "xyx", "xxx"],
    ["x", 1, 0, "y", 213, 0]
);

Callback.addCallback("ItemUse", (coords, item, block) => {
    if (item.id == sun_orb.getOrbNumericID()) {
        World.setWorldTime(9000);
        Game.tipMessage(Native.Color.GREEN + "Success!");
    }
});
