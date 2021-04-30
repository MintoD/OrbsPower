enum SUNNY_ORB {
    stringID = "op.sunny_orb",
    itemName = "Sunny Orb",
}

const sunny_orb = new Orb(
    SUNNY_ORB.stringID,
    SUNNY_ORB.itemName,
    { name: "sunny_orb", data: 0 },
    { stack: 1 }
);

Recipes.addShaped(
    { id: sunny_orb.getID(), data: 0, count: 1 },
    ["xxx", "xyx", "xxx"],
    ["x", 1, 0, "y", 87, 0]
);

Callback.addCallback("ItemUse", (coords, item, block) => {
    if (item.id == sunny_orb.getID()) {
        for (let i = 0; i < 36; i++) {
            if (Player.getInventorySlot(i).id == 87) {
                if (Player.getInventorySlot(i).count > 1) {
                    Player.setInventorySlot(
                        i,
                        87,
                        Player.getInventorySlot(i).count - 1,
                        0
                    );
                    World.setWeather({ rain: 0, thunder: 0 });
                    Game.tipMessage(
                        Native.Color.GREEN + "Success!"
                    );
                }
            }
        }
    }
});
