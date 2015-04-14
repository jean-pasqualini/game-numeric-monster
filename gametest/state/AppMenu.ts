/// <reference path="../dts/phaser.d.ts"/>

class AppMenu {
    constructor() {
          
    }

    game: Phaser.Game;

    button: LabelButton;

    preload() {
        this.game.load.image("btn", "assets/sprite/btn.png");
    }

    create() {
        //this.game.add.button(0, 0, "btn");

        this.button = new LabelButton(this.game, 50, 50, "btn", "okok", this.onStart, this);
    }

    onStart() {

        this.button.setLabel("noknok");
    }

    update() {
    }
} 