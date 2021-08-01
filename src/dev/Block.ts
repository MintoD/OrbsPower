/* 
   ____       _         _____                       
  / __ \     | |       |  __ \                      
 | |  | |_ __| |__  ___| |__) |____      _____ _ __ 
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |   
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|                

 */

namespace Manager {
    export class BlockManager {
        stringID: string;
        blockName: string;
        blockTexture: any[];

        constructor(stringID: string, blockName: string, blockTexture: any[]) {
            this.stringID = stringID;
            this.blockName = blockName;
            this.blockTexture = blockTexture;
        }

        create(): void {
            IDRegistry.genBlockID(this.stringID);
            Block.createBlock(this.stringID, [
                {
                    name: this.blockName,
                    texture: this.blockTexture,
                    inCreative: true,
                },
            ]);
        }

        public addRecipe(
            item: ItemInstance,
            mask: string[],
            data: (string | number)[]
        ): void {
            Manager.RecipesManager.addRecipe({ item, mask, data });
        }

        getNumericID(): number {
            return Block.getNumericId(this.stringID);
        }
    }
}
