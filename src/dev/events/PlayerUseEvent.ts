namespace EventListener {
    export function PlayerUseEvent(callback: Function): void {
        Callback.addCallback("ItemUse", callback);
    }
}
