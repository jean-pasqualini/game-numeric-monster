class Number2D extends Phaser.Sprite {
    entity: Numeric;
    game: Phaser.Game;
    sprite: Phaser.Sprite;
    constructor(game: Phaser.Game, entity: Numeric, x, y) {

        if (typeof x == "undefined") x = 32;
        if (typeof y == "undefined") y = 32;

        super(game, x, y, 'monster', entity.getLife());

        this.game = game;

        this.entity = entity;
        this.scale = new Phaser.Point(0.5, 0.5);
    }

    getNumeric() {
        return this.entity;
    }

    update() {
        //var frame = new Phaser.Frame(this.getNumeric().getLife() - 1);

        if (this.getNumeric().isDead()) {
            var emitter = this.game.add.emitter(this.x, this.y);

            emitter.makeParticles('particle', 1, 100, false, false);

            emitter.explode(10000, 500);

            this.kill();

            this.destroy();

            return;
        }

        this.loadTexture('monster', this.getNumeric().getLife());
    }
} 