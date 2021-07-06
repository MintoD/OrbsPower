class Utils {
    static registerID(id: string) {
        IDRegistry.genItemID(id);
    }

    static createItem(id: string, name: string, texture: Item.TextureData, config: any) {
        Item.createItem(id, name, texture, config);
    }
}
