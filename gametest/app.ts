/// <reference path="dts/phaser.d.ts"/>

class SimpleGame {
    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content');

        this.game.state.add('boot', this);

        this.game.state.add('menu', new AppMenu());

        this.game.state.start('boot');
    }

    game: Phaser.Game;

    preload() {
        this.game.load.image('logo', 'phaser2.png');
        this.game.load.image('monster', 'assets/sprite/monster.jpg');
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

window.onload = () => {
    var game = new SimpleGame();
};