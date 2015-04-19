/// <reference path="../dts/phaser.d.ts"/>

class AppMenu {
    constructor() {
          
    }

    game: Phaser.Game;

    buttonMap: LabelButton;
    button2dScrolling: LabelButton;

    preload() {
        this.game.load.image("btn", "assets/sprites/btn.png");
    }

    create() {
        //this.game.add.button(0, 0, "btn");

        this.buttonMap = new LabelButton(this.game, 50, 50, "btn", "Map", this.onStartMap, this);
        this.button2dScrolling = new LabelButton(this.game, 50, 100, "btn", "2DScrolling", this.onStart2dScrolling, this);
    }

    onStartMap() {
        this.game.state.add('map', new GameMap(), true);
    }

    onStart2dScrolling() {
        this.game.state.add('2dScrolling', new Game2dScrolling(), true);
    }

    update() {
    }
} 