﻿/// <reference path="dts/phaser.d.ts"/>

class SimpleGame {
    game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.WEBGL, 'content');

        this.game.state.add('boot', this);

        this.game.state.add('menu', new AppMenu());

        if (document.location.hash.indexOf("prod") != -1) {
            this.game.state.start('boot');
        } else {
            this.game.state.add('test', new AppTest(), true);
          // this.game.state.add('2dScrolling', new Game2dScrolling(), true);
        }
    }

    preload() {
        this.game.load.image('logo', 'phaser2.png');
        this.game.load.image('monster', 'assets/sprites/monster.jpg');
        this.game.load.audio('intro', 'assets/sound/intro.mp3');
    }

    create() {
        var logo = this.game.add.sprite(this.game.world.centerX,
            this.game.world.centerY,
            'logo'
            );

        logo.anchor.setTo(0.5, 0.5);

        logo.scale.setTo(0.2, 0.2);

        var signal = new Phaser.Signal();
            
        signal.add(function () {
            console.log("ok");
        });

        this.game.add.audio('intro', 3, false).play();

        this.game.add.
            tween(logo.scale)
            .to({ x: 1, y: 1 }, 2000, Phaser.Easing.Bounce.Out, true)
            .onComplete.add(function ()
        {
            this.game.state.start('menu');
        }, this)
        ;
    }

    update() {

    }
}

interface StateInterface {
    update();
    preload();
    create();
    game: Phaser.Game
}

window.onload = () => {
    var game = new SimpleGame();
};