/* 

   ____       _         _____                       
  / __ \     | |       |  __ \                      
 | |  | |_ __| |__  ___| |__) |____      _____ _ __ 
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |   
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|   
                                                    
                                   Version: 1.1                 

 */

enum MOON_ORB {
    stringID = "op.moon_orb",
    itemName = "Moon Orb"
}

const moon_orb = new Orb(MOON_ORB.stringID, MOON_ORB.itemName, {
    name: "moon_orb",
    data: 0
}, {
    stack: 1
});

moon_orb.createItem();

Recipes.addShaped({id: moon_orb.getID(), count: 1, data: 0}, [
    "xxx",
    "xyx",
    "xxx"
], ["x", 1, 0, "y", 266, 0]);

Callback.addCallback('ItemUse', (coords, item, block) => {
    if(item.id == moon_orb.getID()) {
        for (let i = 0; i < 36; i++) {
            if (Player.getInventorySlot(i).id == 289 && Player.getInventorySlot(i).count > 1) {
    
                    Player.setInventorySlot(
                        i,
                        289,
                        Player.getInventorySlot(i).count - 1,
                        0
                    );
                    World.setWorldTime(12542);
                    Game.tipMessage(Native.Color.GREEN + "Success!");
                
            }
        }
    }
});
