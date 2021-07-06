const CREATIVE_GROUP = {
    name: "Orbs",
    displayedName: "Orbs",
    ids: [sun_orb.getOrbNumericID(), sunny_orb.getOrbNumericID(), rainy_orb.getOrbNumericID(), moon_orb.getOrbNumericID(), cow_orb.getOrbNumericID()],
};

(() => {
    const { name, displayedName, ids } = CREATIVE_GROUP;
    Item.addCreativeGroup(name, displayedName, ids);
})();
