class WeaponBar extends Phaser.TileSprite
{
    constructor(game: Phaser.Game) {
        super(game, 50, 50, game.width - 100, 50, "weapon-bar");
    }

    addWeapon(weapon: Phaser.Sprite) {
        var countWeaopon = this.children.length;

        var itemHeight = 50;

        var itemWidth = 50;

        weapon.x = this.x + 50 * countWeaopon;

        weapon.y = 10;

        this.addChild(weapon);
    }
} 