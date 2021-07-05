class Utils {
    static registerID(id: string) {
        IDRegistry.genItemID(id);
    }

    static createItem(id: string, name: string, texture: Item.TextureData, config: any) {
        Item.createItem(id, name, texture, config);
    }

    static setRecipe(item: ItemInstance, mask: string[], data: (string | number)[]): void {
        Recipes.addShaped(item, mask, data);
    }

    //TODO: Create an item id that cannot be duplicated

   /* private ascii_letters () { // eslint-disable-line camelcase
        //   original by: Yury Shapkarin (https://shapkarin.me)
        //   example 1: ascii_letters()
        //   returns 1: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const length = 26
        let i = 65
        return [...Array(length + 6 + length)]
          .reduce(function (accumulator) {
            return accumulator + String.fromCharCode(i++)
          }, '')
          .match(/[a-zA-Z]+/g)
          .reverse()
          .join('')
      }
    
    static randomString(length): string {
        const asciiString = ascii_letters() + "0123456789";

        return 
    }*/
}