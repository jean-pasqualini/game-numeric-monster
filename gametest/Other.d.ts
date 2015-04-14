declare class LabelButton extends Phaser.Button {
    constructor(game: Phaser.Game, x?: number, y?: number, key?: string, label?: string, callback?: Function, callbackContext?: any, overFrame?: string|number, outFrame?: string|number, downFrame?: string|number, upFrame?: string|number);

    setLabel(label: String);
}