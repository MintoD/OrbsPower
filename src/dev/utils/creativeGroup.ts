/* 
   ____       _         _____                       
  / __ \     | |       |  __ \                      
 | |  | |_ __| |__  ___| |__) |____      _____ _ __ 
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |   
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|                

 */

const CREATIVE_GROUP = {
    name: "Orbs",
    displayedName: "Orbs",
    ids: [
        sun_orb.getOrbNumericID(),
        sunny_orb.getOrbNumericID(),
        rainy_orb.getOrbNumericID(),
        moon_orb.getOrbNumericID(),
        cow_orb.getOrbNumericID(),
        bat_orb.getOrbNumericID(),
        pufferfish_orb.getOrbNumericID(),
        empty_orb.getOrbNumericID(),
    ],
};

(() => {
    const { name, displayedName, ids } = CREATIVE_GROUP;
    Item.addCreativeGroup(name, displayedName, ids);
})();
