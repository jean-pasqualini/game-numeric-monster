class Game2dScrolling implements StateInterface {
    game: Phaser.Game;
    cursors: Phaser.CursorKeys;
    monsters: Phaser.Group;
    player: Phaser.Sprite;
    layer: Phaser.TilemapLayer;
    init: boolean;

    constructor() {
        this.init = false;
    }


    update() {
        if (this.init) {
            this.game.physics.arcade.collide(this.player, this.layer);
            this.game.physics.arcade.collide(this.monsters, this.layer);
            //this.game.physics.arcade.collide(this.monsters, this.player);
            this.game.physics.arcade.collide(this.player, this.monsters, this.onPlayerCollideWithMonster, undefined, this);

            this.monsters.setAll("body.velocity.x", 0);

            this.player.body.velocity.x = 0;

            if (this.cursors.up.isDown) {
                if (this.player.body.onFloor()) {
                    this.player.body.velocity.y = -200;
                }
            }

            if (this.cursors.left.isDown) {
                this.player.body.velocity.x = -150;
            }
            else if (this.cursors.right.isDown) {
                this.player.body.velocity.x = 150;
            }
        }
    }

    onPlayerCollideWithMonster(player: Number2D, monster: Number2D) {
        monster.getNumeric().attack(player.getNumeric());
    }

    preload() {
        this.game.load.tilemap('default', 'assets/tilemaps/maps/default.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles', 'assets/tilemaps/tiles/super_mario.png');
        this.game.load.image('player', 'assets/sprites/phaser-dude.png');
        this.game.load.audio('bg', 'assets/sound/bg.mp3');
        this.game.load.image('weapon-bar', 'assets/sprites/weapon-bar.gif');
        this.game.load.image('particle', 'assets/sprites/particle.png');
       // this.game.load.image("weapon-moins", "");
        this.game.load.image("weapon-plus", "assets/sprites/weapon-plus.png");
        this.game.load.spritesheet('monster', 'assets/sprites/monster.png', 127, 127);
    }

    render() {
        //this.game.debug.bodyInfo(this.player, 32, 320);
        this.game.debug.body(this.player);

        //this.game.time.advancedTiming = true;
        //this.game.debug.text(this.game.time.fps || '--', 2, 14, "#ffffff");

    }

    create() {
        this.monsters = this.game.add.group(this.game.world, "monsters", true, true, Phaser.Physics.ARCADE);

       // Phaser.Canvas.setSmoothingEnabled(this.game.context, false);

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.game.stage.backgroundColor = '#787878';

        var bgSound = this.game.add.audio('bg', 2, true);

        bgSound.play();

        var map = this.game.add.tilemap('default');

        map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');

        map.createFromObjects("objetsmap", 12, "monster", 0, true, false, this.monsters, Number2D);

        map.setCollisionBetween(15, 16);
        map.setCollisionBetween(20, 25);
        map.setCollisionBetween(27, 29);
        map.setCollision(40);

        var layer = map.createLayer('World1', this.game.width * 0.5, this.game.height * 0.5);

        layer.setScale(2);

        layer.smoothed = false;

        this.layer = layer;

        layer.resizeWorld();

        var player = new Number2D(this.game, new Numeric(9), 32, 32);

        player.entity = new Numeric(5);

        var weaponBar = new WeaponBar(this.game);

        weaponBar.addWeapon(new PlusWeapon(this.game, player.getNumeric()));

        weaponBar.addWeapon(new PlusWeapon(this.game, player.getNumeric()));

        weaponBar.addWeapon(new PlusWeapon(this.game, player.getNumeric()));

        this.player = player;

        this.game.add.existing(player);

        this.addMonsters(map);

        this.game.add.existing(weaponBar);
        
        this.game.physics.enable(player);

        player.body.bounce.y = 0.2;
        player.body.linearDamping = 1;
        player.body.collideWorldBounds = true;
        
        this.game.physics.arcade.gravity.y = 250;

        this.game.camera.follow(player);

       //layer.wrap = true;

       this.cursors = this.game.input.keyboard.createCursorKeys();

       this.init = true;
    }

    addMonsters(map: Phaser.Tilemap) {

        var sprite;

        for (var i = 0, len = map.objects["objetsmap"].length; i < len; i++) {
            sprite = new Number2D(this.game, new Numeric(3), map.objects["objetsmap"][i].x * 2, map.objects["objetsmap"][i].y);

            console.log("monster : " + map.objects["objetsmap"][i].x + ", " + map.objects["objetsmap"][i].y);

            this.game.physics.enable(sprite);

            //sprite.body.collides([this.player]);

            this.monsters.add(sprite);


        }
    }
} 