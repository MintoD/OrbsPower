/* 
   ____       _         _____                       
  / __ \     | |       |  __ \                      
 | |  | |_ __| |__  ___| |__) |____      _____ _ __ 
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |   
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|                

 */

class Orb {
    public orbID: string;
    public orbName: string;
    public orbTexture: Item.TextureData;
    public orbConfig: any;

    constructor(orbID: string,orbName: string,orbTexture: Item.TextureData, orbConfig: any) {
        this.orbID = orbID;
        this.orbName = orbName;
        this.orbTexture = orbTexture;
        this.orbConfig = orbConfig;
    }

    public create(): void {
        Utils.registerID(this.orbID);
        Utils.createItem(this.orbID, this.orbName, this.orbTexture, this.orbConfig);
    }

    public addRecipe(item: ItemInstance, mask: string[], data: (string | number)[]): void {
        Utils.setRecipe(item, mask, data);
    }

    public getOrbNumericID(): number {
        return Item.getNumericId(this.orbID);
    }
}
