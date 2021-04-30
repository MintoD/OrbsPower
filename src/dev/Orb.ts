class Orb {
    stringID: string;
    itemName: string;
    itemTexture: Item.TextureData;
    itemConfig: any;

    constructor(stringID: string, itemName: string, itemTexture: Item.TextureData, itemConfig: any) {
        this.stringID = stringID;
        this.itemName = itemName;
        this.itemTexture = itemTexture;
        this.itemConfig = itemConfig;
    }

    createItem(): void {
        IDRegistry.genItemID(this.stringID);
        Item.createItem(this.stringID, this.itemName, this.itemTexture, this.itemConfig);
    }

    getID(): number {
        return Item.getNumericId(this.stringID);
    }
}
