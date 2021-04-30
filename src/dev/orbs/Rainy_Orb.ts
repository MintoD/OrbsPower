enum RAINY_ORB {
    stringID = "op.rainy_orb",
    itemName = "Rainy Orb",
}

const rainy_orb = new Orb(
    RAINY_ORB.stringID,
    RAINY_ORB.itemName,
    {
        name: "rainy_orb",
        data: 0,
    },
    {
        stack: 1,
    }
);

rainy_orb.createItem();

Recipes.addShaped(
    { id: rainy_orb.getID(), count: 1, data: 0 },
    ["xxx", "xyx", "xxx"],
    ["x", 1, 0, "y", 452, 0]
);

Callback.addCallback('ItemUse', (coords, item, block) => {
    if(item.id == rainy_orb.getID()) {
        for (let i = 0; i < 36; i++) {
            if (Player.getInventorySlot(i).id == 452) {
                if (Player.getInventorySlot(i).count > 1) {
                    Player.setInventorySlot(
                        i,
                        452,
                        Player.getInventorySlot(i).count - 1,
                        0
                    );
                    World.setWeather({ rain: 10, thunder: 0 });
                    Game.tipMessage(
                        Native.Color.GREEN + "Success!"
                    );
                }
            }
        }
    }
})