/* 
   ____       _         _____                       
  / __ \     | |       |  __ \                      
 | |  | |_ __| |__  ___| |__) |____      _____ _ __ 
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |   
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|                

 */

  enum PUFFERFISH_ORB {
    orbID = "op.pufferfish_orb",
    orbName = "Pufferfish Orb",
}

const pufferfish_orb = new Orb(
    PUFFERFISH_ORB.orbID,
    PUFFERFISH_ORB.orbName,
    {
        name: "pufferfish_orb",
        data: 0,
    },
    { stack: 1 }
);

pufferfish_orb.create();

pufferfish_orb.addRecipe(
    { id: pufferfish_orb.getOrbNumericID(), count: 1, data: 0 },
    ["xxx", "xyx", "xxx"],
    ["x", 1, 0, "y", 462, 0]
);

Callback.addCallback("ItemUse", (coords, item, block) => {
    if (item.id == pufferfish_orb.getOrbNumericID()) {
        Entity.addEffect(Player.get(), 13, 1, 9600);
    }
});
