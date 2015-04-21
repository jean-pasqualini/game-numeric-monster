var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Number2D = (function (_super) {
    __extends(Number2D, _super);
    function Number2D(game, entity, x, y) {
        if (typeof x == "undefined")
            x = 32;
        if (typeof y == "undefined")
            y = 32;
        _super.call(this, game, x, y, 'monster', entity.getLife());
        this.game = game;
        this.entity = entity;
        this.scale = new Phaser.Point(0.5, 0.5);
    }
    Number2D.prototype.getNumeric = function () {
        return this.entity;
    };
    Number2D.prototype.update = function () {
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
    };
    return Number2D;
})(Phaser.Sprite);
//# sourceMappingURL=Number2D.js.map