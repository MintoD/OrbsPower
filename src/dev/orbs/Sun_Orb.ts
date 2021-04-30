enum SUN_ORB {
    stringID = "op.sun_orb",
    itemName = "Sun Orb",
}

const sun_orb = new Orb(
    SUN_ORB.stringID,
    SUN_ORB.itemName,
    {
        name: "sun_orb",
        data: 0,
    },
    {
        stack: 1,
    }
);

sun_orb.createItem();

Recipes.addShaped(
    { id: sun_orb.getID(), count: 1, data: 0 },
    ["xxx", "xyx", "xxx"],
    ["x", 1, 0, "y", 213, 0]
);

Callback.addCallback("ItemUse", (coords, item, block) => {
    if (item.id == sun_orb.getID()) {
        for (let i = 0; i < 36; i++) {
            if (Player.getInventorySlot(i).id == 289) {
                if (Player.getInventorySlot(i).count > 1) {
                    Player.setInventorySlot(
                        i,
                        289,
                        Player.getInventorySlot(i).count - 1,
                        0
                    );
                    World.setWorldTime(9000);
                    Game.tipMessage(Native.Color.GREEN + "Success!");
                }
            }
        }
    }
});
