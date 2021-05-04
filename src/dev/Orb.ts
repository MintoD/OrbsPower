/* 

   ____       _         _____                       
  / __ \     | |       |  __ \                      
 | |  | |_ __| |__  ___| |__) |____      _____ _ __ 
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |   
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|   
                                                    
                                   Version: 1.1                 

 */

class Orb {
    stringID: string;
    itemName: string;
    itemTexture: Item.TextureData;
    itemConfig: any;

    constructor(
        stringID: string,
        itemName: string,
        itemTexture: Item.TextureData,
        itemConfig: any
    ) {
        this.stringID = stringID;
        this.itemName = itemName;
        this.itemTexture = itemTexture;
        this.itemConfig = itemConfig;
    }

    createItem(): void {
        IDRegistry.genItemID(this.stringID);
        Item.createItem(
            this.stringID,
            this.itemName,
            this.itemTexture,
            this.itemConfig
        );
    }

    getID(): number {
        return Item.getNumericId(this.stringID);
    }
}
