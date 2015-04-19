class Weapon extends Phaser.Sprite implements WeaponInterface
{
    power: Numeric;

    constructor(game: Phaser.Game, power: Numeric) {
        super(game, 0, 0, this.getTexture());
        this.power = power;
    }

    attack(enemy: Numeric) {
    }

    getTexture(): string {
        return "";
    }
}

interface WeaponInterface
{
    attack(enemy: Numeric);

    getTexture();
}
